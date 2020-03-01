// 加载express模块
var express = require('express')
const path = require('path')
// 加载模板处理模块
var swig = require('swig')
// 加载数据库模块
var mongoose = require('mongoose')
//加载bodyParser
var bodyParser = require('body-parser')
// 创建APP
var app = express()

app.all('*', function (req, res, next) {
  // 设为指定的域
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('X-Powered-By', ' 3.2.1')
  next()
})
app.use(bodyParser.urlencoded({extended:true}))
// 设置静态文件托管
// 当用户url是以/dist开始，则直接返回__dirname + '/dist'目录下文件
app.use(express.static(path.join(__dirname, 'dist')))

// 配置应用模块
// 定义当前应用模板引擎
// 参数一：定义模板引擎名称，同时也是模板引擎的后缀;
// 第二个参数，用于解析处理模板内容的方法
app.engine('html', swig.renderFile)

// 设置模文件存放的目录
// 第一个参数必须是views
// 第二个参数是目录
app.set('views', './dist')
// 注册所使用的模板引擎，第一个参数必须是view engine
// 第二个参数是app.engine中定义的引擎名称（第一个参数）是一致的
app.set('view engine', 'html')
// 在开发过程中不需要模板缓存
swig.setDefaults({ cache: false })

// 根据不同木块划分不同功能
// app.use('/admin', require('./server/routers/admin'))
// app.use('/api',require('./routers/api'));
app.use('/', require('./server/routers/main'));
app.use('/articles', require('./server/routers/articles'));
// 链接数据库
mongoose.connect('mongodb://localhost:27017/my_blog', { useNewUrlParser: true }, function (err) {
  if (err) {
    console.log('数据库连接失败')
  } else {
    console.log('数据库连接成功')
    app.listen(99)
  }
})
