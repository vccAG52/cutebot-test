radio.onReceivedNumber(function (receivedNumber) {
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ffff)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
cuteBot.moveTime(cuteBot.Direction.forward, 100, 5)
basic.forever(function () {
	
})
