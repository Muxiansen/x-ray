var Xray = require('..')
var x = Xray()

x('https://image.baidu.com/', {
  main: 'title',
  image: x('https://image.baidu.com/', 'title')
})(console.log)
