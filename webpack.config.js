const path = require('path');
const webpack = require('webpack');
//const { VueLoaderPlugin } = require('vue-loader');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Chosen mode tells webpack to use its built-in optimizations accordingly.
    mode: "production", // "production" | "development" | "none"
    // 这里应用程序开始执行
    // webpack 开始打包
    entry: __dirname + "/src/main.js", // string | object | array

    // webpack 如何输出结果的相关选项
    output: {

        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）
        path: __dirname + "/dist", // string

        // 「入口分块(entry chunk)」的文件名模板（出口分块？）
        filename: "bundle.js", // string

        // 输出解析文件的目录，url 相对于 HTML 页面
        publicPath: './' // string

    },

    // 关于模块配置
    module: {

        rules: [{
                test: /\.js$/, //用正则匹配文件，用require或者import引入的都会匹配到
                loader: "babel-loader", //加载器名，就是上一步安装的loader
                exclude: /node_modules/ //排除node_modules目录，我们不加载node模块中的js哦~
            },
            {
                //依次使用以上loader加载css文件，postcss-loader可以暂时不加，后面再深入修改webpack配置的时候再说用处
                //
                //也可以写成这样 loader："style-loader!css-loader!postcss-loader"
                test: /\.styl(us)?$/,
                loader: 'style-loader!css-loader!stylus-loader'

            },

            {
                //图片文件大小小于limit的数值，就会被改写成base64直接填入url里面，
                //不然会输出到dist/img目录下，[name]原文件名，[ext]原后缀，[hash]在url上加上一点哈希值避免缓存。
                test: /\.(png|jpe?j|gif|jpg|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    esModule: false,
                    limit: 10000,
                    name: 'assets/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[ext]?[hash]'
                }
            },
            {
                //这一个loader当然是vue项目必须的加载器啦，不加其他规则的话，
                //简单的这样引入就可以了，vue-loader会把vue单文件直接转成js。
                test: /\.vue$/,
                loader: 'vue-loader'

            },
            {

                test: /.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]

    },
    resolve: {
        //引入路径是不用写对应的后缀名
        extensions: ['.js', '.vue', '.json'],
        //缩写扩展
        alias: {
            //正在使用的是vue的运行时版本，而此版本中的编译器时不可用的，我们需要把它切换成运行时 + 编译的版本
            'vue$': 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1
            //用@直接指引到src目录下，如：'./src/main'可以写成、'@/main'
            '@': path.resolve(__dirname, './src'),
        }
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        hot: true
    },
    stats: {
      children: false
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'liran',
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true // 压缩内联css
            },
            filename: 'index.html',
            template: './public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],

}