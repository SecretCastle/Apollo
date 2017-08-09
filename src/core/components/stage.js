class Stage {
    constructor(options) {
        this.options = options
        this.init()
    }

    /**
     * 初始化舞台
     */
    init() {
        new Hilo.Stage({
            container: document.body,
            width: this.options.width,
            height: this.options.height
        })
    }
}


export default Stage