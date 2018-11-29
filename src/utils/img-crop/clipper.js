; (function () {

    var Cropper = typeof require === 'function'
        ? require('cropperjs').default
        : window.Cropper

    var addEvent = function (obj, type, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(type, fn, false);
        } else {
            obj.attachEvent('on' + type, fn);
        }
    };

    var removeEvent = function (obj, type, fn) {
        if (obj.removeEventListener) {
            obj.removeEventListener(type, fn, false);
        } else {
            obj.detachEvent('on' + type, fn);
        }
    }

    var defaultOption = {
        image_src: "",
        ok: function () { },
        cancel: function () { },
        ok_text: "ok", // optional parameters , the default value is ok
        cancel_text: "cancel" // optional parameters , the default value is cancel
    }

    var Clipper = function (option) {
        this.previewEle = null;
        this.img = new Image();
        this.option = Object.assign(defaultOption, option);
        this.createPreviewDom();
        this.img.onload = this.init.bind(this);
        this.img.src = this.option.image_src;
    }

    Clipper.prototype = {
        createPreviewDom: function () {
            this.renderTo = document.getElementsByTagName('body')[0];
            let str = `<div><img id="clip_image" src="${this.option.image_src}"></div><button type="button" id="cancel_clip">${this.option.cancel_text}</button><button type="button" id="clip_button">${this.option.ok_text}</button>`;
            str += '<div class="crop_loading"><div class="crop_content"><i class="loading"></i></div></div>';
            str += '<div class="crop_success"><div class="crop_success_text">上传成功</div></div>';

            this.reagion = document.createElement('div');
            this.reagion.id = 'clip_container';
            this.reagion.className = 'container';
            this.reagion.innerHTML = str;
            //添加创建好的DOM元素
            this.renderTo.appendChild(this.reagion);
            this.previewEle = document.getElementById('clip_image');

            //绑定一些方法
            this.initFunction();
        },
        initFunction: function () {
            this.okBtn = document.getElementById('clip_button');
            this.cancelBtn = document.getElementById('cancel_clip');
            //确定事件
            addEvent(this.okBtn, 'click', this.crop.bind(this))
            //取消事件
            addEvent(this.cancelBtn, 'click', this.destoried.bind(this))
        },
        init: function () {

            this.cropper = new Cropper(this.previewEle, {
                // aspectRatio: 1,// 设置裁剪框的宽高比。默认情况下，裁剪框是空闲比率 设置：1 为正方形
                autoCropArea: 0.8,// 介于0和1之间的数字。定义自动裁剪框区域的大小（百分比）。
                viewMode: 1, // 将裁剪框限制为不超过画布的大小
                dragMode: "move", // 定义裁剪器的拖动模式 'crop':创建一个新的裁剪框 'move': 移动画布
                guides: true, // 显示裁剪框里面的虚线。
                cropBoxResizable: true, // 启用通过拖动调整裁剪框的大小。
                cropBoxMovable: true, // 启用通过拖动来移动裁剪框。
                dragCrop: true,
                background: false, // 显示容器的网格背景。
                checkOrientation: true, // 检查当前图像的Exif方向信息。
                checkCrossOrigin: true,
                rotatable: true, // 允许旋转图片 经测试，好像不管用
                zoomable: true,// 允许缩放图片
                zoomOnWheel: false, // 启用通过滚动鼠标放大图像。
                center: false,
                toggleDragModeOnDblclick: false, // 在裁剪器上点击两次时，启用“切割”和“移动”之间切换拖动模式。
                ready: () => {
                    // this.cropper.rotate(90)
                    // console.log(self.cropper.rotate(90))
                    // if (opt.aspectRatio == 'Free') {
                    //     let cropBox = self.cropper.cropBox;
                    //     cropBox.querySelector('span.cropper-view-box').style.outline = 'none';
                    //     self.cropper.disable();
                    // }
                }
            });
        },

        // 获取裁剪图片资源
        getRoundedCanvas: function (sourceCanvas) {
            let canvas = document.createElement('canvas');
            let context = canvas.getContext('2d');
            let width = sourceCanvas.width;
            let height = sourceCanvas.height;
            canvas.width = width;
            canvas.height = height;
            context.imageSmoothingEnabled = true;
            context.drawImage(sourceCanvas, 0, 0, width, height);
            context.globalCompositeOperation = 'destination-in';
            context.beginPath();
            context.rect(0, 0, width, height);
            context.fill();
            return canvas;
        },

        // 点击确认按钮
        crop: function () {
            // Crop
            document.querySelector('.crop_loading').style.display = 'block';
            setTimeout(function () {
                var croppedCanvas = this.cropper.getCroppedCanvas();
                var roundedCanvas = this.getRoundedCanvas(croppedCanvas);
                let imgData = roundedCanvas.toDataURL();
                this.option.ok(imgData);
                this.destoried();
            }.bind(this), 500)
        },
        destoried: function () {
            //移除事件
            removeEvent(this.okBtn, 'click', null);
            removeEvent(this.cancelBtn, 'click', null);
            //移除裁剪框
            this.renderTo.removeChild(this.reagion);
            //销毁裁剪对象
            this.cropper.destroy();
            this.cropper = null;
            // 清空实例
            for (var key in this) {
                delete this[key];
            }
        }
    }

    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = Clipper;
    } else {
        window.Clipper = Clipper;
    }

})()