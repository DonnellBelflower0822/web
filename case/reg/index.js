/**

*/

const pattern1 = new RegExp('\\w+', 'i')
const pattern2 = /\w+/i

// 方法
// test() 方法用于检测一个字符串是否匹配某个模式.
// test: RegExp.test(str: string) => boolean
console.log(pattern1.test('aaaa'))

// exec() 方法用于检索字符串中的正则表达式的匹配。
// 如果字符串中有匹配的值返回该匹配值，否则返回 null。
console.log(pattern2.exec('hello world'))
// [ 'hello', index: 0, input: 'hello world', groups: undefined ]


// function format_with_regex(number) {
//   var reg = /\d{1,3}(?=(\d{3})+$)/g;
//   return (number + '').replace(reg, '$&,');
// }

function format_with_regex(number) {
  var reg = /(\d)(?=(?:\d{3})+$)/g
  return (number + '').replace(reg, '$1,');
}

console.log(format_with_regex(10000000000))
