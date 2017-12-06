const path = require('path');

module.exports = {
    entry: {
        index: [path.resolve('./src/index.js')]
    },
    output: {
        path: path.resolve('./dist/'),
        filename: '[name].js'
    },
    module: {
        rules: [

            // 新增一个文件载入规则
            {
                // 如果文件路径满足该正则表达式
                test: /\.xyz$/,

                // 就依次调用这些loader
                use: [
                    {
                        // loader地址，可以是绝对路径，
                        // 也可以是npm包的路径，例如 -> loader: 'babel-loader'
                        loader: path.resolve('./loader.js'),

                        // 需要传入loader的参数
                        options: {
                            a: 'hello', 
                            b: 'world'
                        }
                    }
                ]
            }
        ]
    }
};