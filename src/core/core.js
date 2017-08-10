import Stage from './components/stage'
import Sence from './components/sence'

class Core {
    constructor(options) {
        this.options = options
        this.STAGE = null
        this.TICKER = null
        this.init()
    }

    /**
     * 初始化
     */
    init() {
        this.divideParam()
        this.initStage()
        this.initBackground()
        this.initTicker()
        this.initSence()
    }

    divideParam() {
        this.stageparam = this.options.stage
        this.senceparam = this.options.sences
    }

    initStage() {
        this.Stage = new Hilo.Stage({
            renderType: 'canvas',
            width: this.stageparam.width,
            height: this.stageparam.height,
            scaleX: this.stageparam.scale,
            scaleY: this.stageparam.scale
        })
        document.body.appendChild(this.Stage.canvas)
        this.Stage.enableDOMEvent([Hilo.event.POINTER_START, Hilo.event.POINTER_MOVE, Hilo.event.POINTER_END])
    }

    initBackground() {
        new Hilo.Bitmap({
            image: this.stageparam.bgImg,
            rect: [0, 0, this.stageparam.width * 2, this.stageparam.height * 2],
            x: 0,
            y: 0,
            scaleX: 0.5,
            scaleY: 0.5
        }).addTo(this.Stage)
    }

    initTicker() {
        this.TICKER = new Hilo.Ticker(60)
        this.TICKER.addTick(this.Stage)
        this.TICKER.addTick(Hilo.Tween)
        this.TICKER.start()
    }

    initSence() {
        this.senceparam.forEach((ele) => {
            new Sence(ele, this.Stage)
        });
    }
}

export default Core