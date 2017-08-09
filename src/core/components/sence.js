export default Hilo.Class.create({
    constructor(options, Stage) {
        this.options = options
        this.Stage = Stage
        this.DOM = null
        this.createSenceImg()
        this.createSence()
        this.animate()
        this.initEvent()
    },
    createSenceImg() {
        this.senceImg = new Hilo.Bitmap({
            image: this.options.locationImg,
            rect: [0, 0, 300, 344],
            x: 0,
            y: 0,
            scaleX: 0.1,
            scaleY: 0.1
        })
    },
    createSence() {
        this.DOM = new Hilo.Container({
            children: [this.senceImg],
            width: 100,
            height: 100,
            x: this.options.location.x,
            y: this.options.location.y
        }).addTo(this.Stage)
    },
    animate() {
        Hilo.Tween.to(this.DOM, {
            x: this.options.location.x,
            y: this.options.location.y - 10
        }, {
            duration: 1000,
            ease: Hilo.Ease.Quad.EaseIn,
            loop: true,
            reverse: true
        })
    },
    initEvent() {
        this.DOM.on(Hilo.event.POINTER_START, (e) => {
            if (this.options.callbackfns) {
                this.options.callbackfns(e, this.options.title)
            }
        })
    }
})