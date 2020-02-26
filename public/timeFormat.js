/**
 * 作用：时间格式化
 * 作者：李然
 * 时间：2020.02.26
 */
export function timeFormat () {
  var dt = new Date()
  var y = dt.getFullYear()
  var mt = dt.getMonth() + 1
  var d = dt.getDate()
  var h = dt.getHours()
  var m = dt.getMinutes()
  var s = dt.getSeconds()
  var date = y + ':' + supple0(mt) + ':' + supple0(d) + ' ' + supple0(h) + ':' + supple0(m) + ':' + supple0(s)
  return date
}
// 个位数 补充 0
function supple0 (n) {
  var num = n < 10 ? n = '0' + n : n
  return num
}
