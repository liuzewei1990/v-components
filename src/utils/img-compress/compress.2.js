
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
        //用于压缩图片的canvas
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext('2d');
        // 瓦片canvas
        var tCanvas = document.createElement("canvas");
        var tctx = tCanvas.getContext("2d");
        var maxsize = 100 * 1024;
        var initSize = this.img.src.length;
        var width = this.img.width;
        var height = this.img.height;



        //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
        var ratio;
        if ((ratio = width * height / 4000000) > 1) {
            ratio = Math.sqrt(ratio);
            width /= ratio;
            height /= ratio;
        } else {
            ratio = 1;
        }
        console.log("压缩比例：", ratio);
        console.log("width：", width);
        console.log("height：", height);

        // 计算图片质量
        var bili = 1;
        if (width > 480) {
            bili = 480 / width;
        } else {
            if (height > 640) {
                bili = 640 / height;
            } else {
                bili = 1;
            }
        }
        console.log('图片质量：', bili);

        canvas.width = width;
        canvas.height = height;
        // 铺底色
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        //如果图片像素大于100万则使用瓦片绘制
        var count;
        if ((count = width * height / 1000000) > 1) {
            count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
            //计算每块瓦片的宽和高
            var nw = ~~(width / count);
            var nh = ~~(height / count);
            tCanvas.width = nw;
            tCanvas.height = nh;
            for (var i = 0; i < 1; i++) {
                for (var j = 0; j < 2; j++) {
                    tctx.drawImage(this.img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
                    ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
                }
            }
        } else {
            ctx.drawImage(this.img, 0, 0, width, height);
        }
        //进行最小压缩
        var ndata = canvas.toDataURL('image/jpeg', bili);

        console.log('压缩前：' + initSize);
        console.log('压缩后：' + ndata.length);
        console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");
        tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;

        this.callBack(ndata);
    }
}