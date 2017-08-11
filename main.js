const PIXI = require('pixi.js')

const Stage = new PIXI.Container()
const render = PIXI.autoDetectRenderer(256, 256, {
    antialias: true,
    transparent: false,
    resolution: 1,
    preserveDrawingBuffer: true
})


render.autoResize = true
render.resize(window.screen.availWidth, window.screen.availHeight)
render.backgroundColor = 0xf00f00
document.body.appendChild(render.view)






PIXI.loader.add('./src/assets/location.png').load(step)


function step() {
    const location = new PIXI.Sprite(
        PIXI.loader.resources['./src/assets/location.png'].texture
    )
    Stage.addChild(location)
    render.render(Stage)
}