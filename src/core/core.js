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
        this.initStageEvent()
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
            scaleY: this.stageparam.scale,
            viewport: {
                width: 200,
                height: 100
            }
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
    initStageEvent() {
        let isTouch = false,
            isMove = false,
            startX,
            startY,
            moveX,
            moveY
        this.Stage.on(Hilo.event.POINTER_START, (e) => {
            isTouch = true
            startX = e.changedTouches[0].clientX
            startY = e.changedTouches[0].clientY
        })
        this.Stage.on(Hilo.event.POINTER_MOVE, (e) => {
            if (!isTouch) {
                return
            }
            isMove = true
            moveX = e.changedTouches[0].clientX - startX
            moveY = e.changedTouches[0].clientY - startY
        })
        this.Stage.on(Hilo.event.POINTER_END, (e) => {
            if (!isTouch && !isMove) {
                return
            }
            isTouch = false
            isMove = false
            console.log(e);
        })
    }
}

export default Core