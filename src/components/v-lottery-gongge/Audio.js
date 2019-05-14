export default class Audio {
    constructor(options){
        // super();
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContext();//实例化AudioContext对象
        // 发出的声音频率数据，表现为音调的高低
        this.arrFrequency = [196.00, 220.00, 246.94, 261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25, 587.33, 659.25, 698.46, 783.99, 880.00, 987.77, 1046.50];
         // 音调依次递增或者递减处理需要的参数
        this.start = 0;
        this.direction = 1;
    }

 // 音效
    play(){

        //当前频率
        var frequency = this.arrFrequency[this.start];
        //如果到头，改变音调的变化规则
        if (!frequency) {
            this.direction = -1 * this.direction;
            this.start = this.start + 2 * this.direction;
            frequency = this.arrFrequency[this.start];
        }
        //改变索引
        this.start = this.start + this.direction;
        //创建一个oscillator，它表示一个周期性波形震荡，基本上来说创造了一个音调
        var oscillator = this.audioCtx.createOscillator();
        //创建一个gainNode，控制音频的总音量
        var gainNode = this.audioCtx.createGain();
        //把音量，音调和终结点进行关联
        oscillator.connect(gainNode);
        //this.audioCtx.destination返回audioDestinationNode对象，表示当前audio context中所有节点的最终节点，表示音频渲染设备
        gainNode.connect(this.audioCtx.destination);
        //指定音调的类型
        oscillator.type = 'sine';
        //设置当前播放声音的频率，也就是最终播放声音的调调
        oscillator.frequency.value = frequency;
        //当前时间音量设置为0
        gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime);
        //0.01秒后音量为1
        gainNode.gain.linearRampToValueAtTime(1, this.audioCtx.currentTime + 0.01);
        //音调从当前时间开始播放
        oscillator.start(this.audioCtx.currentTime);
        //一秒内声音慢慢降低
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.2);
        //1秒后声音完全停止
        oscillator.stop(this.audioCtx.currentTime + 0.2);
    }
}