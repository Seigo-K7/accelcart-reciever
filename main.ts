radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        x = value
    }
})
let x = 0
radio.setGroup(27)
datalogger.setColumnTitles("x")
basic.forever(function () {
    datalogger.log(datalogger.createCV("x", x))
})
