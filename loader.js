const { getOptions } = require('loader-utils');

module.exports = function (source) {
    const options = getOptions(this);

    // 用loader载入文件的源代码
    console.log(source);

    // 传入loader的参数
    console.log(JSON.stringify(options));

    return source;
};