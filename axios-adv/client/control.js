// 控制并发
var urls = ['https://www.kkkk1000.com/images/getImgData/getImgDatadata.jpg', 'https://www.kkkk1000.com/images/getImgData/gray.gif', 'https://www.kkkk1000.com/images/getImgData/Particle.gif', 'https://www.kkkk1000.com/images/getImgData/arithmetic.png', 'https://www.kkkk1000.com/images/getImgData/arithmetic2.gif', 'https://www.kkkk1000.com/images/getImgData/getImgDataError.jpg', 'https://www.kkkk1000.com/images/getImgData/arithmetic.gif', 'https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/10/29/166be40ccc434be0~tplv-t2oaga2asx-image.image'];
function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = function () {
      console.log('一张图片加载完成');
      resolve();
    }
    img.onerror = reject
    img.src = url
  })
};

function limitLoad(urls, handler, limit) {
  // 对数组做一个拷贝
  const sequence = [].concat(urls)
  let promises = [];

  //并发请求到最大数
  promises = sequence.splice(0, limit).map((url, index) => {
    // 这里返回的 index 是任务在 promises 的脚标，用于在 Promise.race 之后找到完成的任务脚标
    return handler(url).then(() => {
      return index
    });
  });

  // 利用数组的 reduce 方法来以队列的形式执行
  return sequence
    .reduce((last, url, currentIndex) => {
      return last
        .then(() => {
          // 返回最快改变状态的 Promise
          return Promise.race(promises)
        })
        .catch(err => {
          // 这里的 catch 不仅用来捕获 前面 then 方法抛出的错误
          // 更重要的是防止中断整个链式调用
          console.error(err)
        })
        .then((index) => {
          // 用新的 Promise 替换掉最快改变状态的 Promise
          promises[index] = handler(sequence[currentIndex]).then(() => {
            // 成功也还是返回这个索引
            return index
          });
        })
    }, Promise.resolve())
    .then(() => {
      return Promise.all(promises)
    })

}
limitLoad(urls, loadImg, 3)
