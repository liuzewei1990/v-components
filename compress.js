/*
 * 使用方法：
 * 1、npm install image-compress-tinify --save-dev
 * 2、node compress.js --path=xx/images --size=70
*/

const compress = require('image-compress-tinify');

compress({
    key: "kqQJW412VF31X6xb5dmjSj651vyTDwYV" // tinify的密钥（必填）
});