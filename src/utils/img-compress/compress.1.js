
export default class Compress {
    constructor(file, callBack) {
        // super();
        // 压缩图片需要的一些元素和对象
        this.reader = new FileReader();
        this.img = new Image();
        // 选择的文件对象
        this.file = file;
        this.callBack = callBack;
        // 缩放图片需要的canvas
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.init();
    }

    init() {
        this.img.onload = this.imgonLoad.bind(this);
        this.reader.onload = (e) => { this.img.src = e.target.result };
        // 选择的文件是图片
        if (this.file.type.indexOf("image") == 0) {
            this.reader.readAsDataURL(this.file);
        }
    }

    imgonLoad() {
        // 图片原始尺寸
        var originWidth = this.img.width;
        var originHeight = this.img.height;
        // 最大尺寸限制
        var maxWidth = 400, maxHeight = 400;
        // 目标尺寸
        var targetWidth = originWidth, targetHeight = originHeight;
        // 图片尺寸超过400x400的限制
        if (originWidth > maxWidth || originHeight > maxHeight) {
            if (originWidth / originHeight > maxWidth / maxHeight) {
                // 更宽，按照宽度限定尺寸
                targetWidth = maxWidth;
                targetHeight = Math.round(maxWidth * (originHeight / originWidth));
            } else {
                targetHeight = maxHeight;
                targetWidth = Math.round(maxHeight * (originWidth / originHeight));
            }
        }

        // canvas对图片进行缩放
        this.canvas.width = targetWidth;
        this.canvas.height = targetHeight;
        // 清除画布
        this.context.clearRect(0, 0, targetWidth, targetHeight);
        // 图片压缩
        this.context.drawImage(this.img, 0, 0, targetWidth, targetHeight);

        //回调base64
        this.callBack(this.canvas.toDataURL());
    }
}