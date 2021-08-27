const instance = axios.create({})
/**
 * 拦截器: 可以做一些数据处理,记录请求响应时间
 */
instance.interceptors.request.use(config => {
  console.log('请求拦截', config)
  // 请求了那个地址
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  console.log('响应拦截', response)
  return response
})

function request(cancel = {}) {
  return new Promise((resolve, reject) => {
    instance.get('http://localhost:3000/', {
      // 取消请求
      cancelToken: new axios.CancelToken(c => {
        cancel.current = c
      })
    }).then(res => {
      resolve(res)
    }).catch(e => {
      reject(e)
    })
  })
}

// request()

const cancel = { current: null }

const requestBtn = document.getElementById('request-btn')
requestBtn.addEventListener('click', () => {
  request(cancel).then(res => {
    console.log('结果:', res)
  }, e => {
    console.log('错误:', e)
  })
})

// 取消请求
const cancelBtn = document.getElementById('cancel-btn')
cancelBtn.addEventListener('click', () => {
  cancel.current?.()
})

function getPromiseWithAbort(p) {
  const obj = {}
  const p1 = new Promise((resolve, reject) => {
    obj.abort = reject
  })

  obj.promise = Promise.race([p, p1])
  return obj
}

// 取消请求2
const cancelBtnPromise = document.getElementById('cancel-btn-promise')
cancelBtnPromise.addEventListener('click', () => {
  const obj = getPromiseWithAbort(request)

  console.log(obj)
  obj.promise.then(res => {
    console.log('结果:', res)
  }).catch(e => {
    console.log('出错:', e)
  })

  setTimeout(() => {
    obj.abort?.()
  }, 2000)
})

const fetchBtn = document.getElementById('fetch')
fetchBtn.addEventListener('click', e => {
  fetch('http://localhost:3000', {
    credentials: 'include'
  })
    .then(res => res.json())
    .then(res => {
      console.log(res)
    })
})



