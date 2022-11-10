radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        x = value
    }
})
let x = 0
radio.setGroup(27)
basic.forever(function () {
    serial.writeValue("x", x)
})
