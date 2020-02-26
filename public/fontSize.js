
/**
 * 设置字体
 * @param    {参数类型}  参数名称     中文解释
 * @returns  void
 * @date     2020.
 * @author   liran
 * @email    liran1992@vip.163.com
 */
var fontSizes = 0; // eslint-disable-line no-unused-vars
(function (win, doc) {
  function setFontSize () {
    var winWidth = window.screen.availWidth // window.innerWidth;
    //  var dpr = window.devicePixelRatio
    var u = navigator.userAgent
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
      //    打包需要除以dpr
      //    doc.documentElement.style.fontSize = (winWidth / 640) * 100 / dpr + 'px';
      doc.documentElement.style.fontSize = (winWidth / 640) * 100 + 'px'
      fontSizes = (winWidth / 640) * 100
    } else if (u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1) {
      doc.documentElement.style.fontSize = (winWidth / 640) * 100 + 'px'
      fontSizes = (winWidth / 640) * 100
    } else if (u.indexOf('Windows Phone') > -1) {
      alert('暂不支持winphone手机')
    } else {
      fontSizes = 100
    }
  }

  var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize'

  var timer = null

  win.addEventListener(evt, function () {
    clearTimeout(timer)

    timer = setTimeout(setFontSize, 300)
  }, {
    passive: false
  })

  win.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      clearTimeout(timer)

      timer = setTimeout(setFontSize, 300)
    }
  }, {
    passive: false
  })

  setFontSize()
}(window, document))
