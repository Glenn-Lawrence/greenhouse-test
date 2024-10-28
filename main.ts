input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    servos.P0.setAngle(10)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    servos.P0.setAngle(90)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
servos.P0.setAngle(90)
