let strip: neopixel.Strip = null
let strip2: neopixel.Strip = null
basic.forever(function () {
    if (BitMaker.read_Ain(AnalogPort.P0) != 509) {
        strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip.setBrightness(25)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
    } else {
        strip2 = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
        strip2.setBrightness(25)
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
        strip2.show()
    }
})
