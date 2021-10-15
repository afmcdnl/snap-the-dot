input.onButtonPressed(Button.A, function () {
    if (Dot.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
let Dot: game.LedSprite = null
Dot = game.createSprite(2, 2)
basic.forever(function () {
    Dot.move(1)
    Dot.ifOnEdgeBounce()
    basic.pause(200)
})
