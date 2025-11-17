datalogger.onLogFull(function () {
    logging = false
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.A, function () {
    if (logging) {
        logging = false
        basic.clearScreen()
    } else {
        logging = true
        basic.showIcon(IconNames.House)
    }
})
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
    basic.showIcon(IconNames.Yes)
})
let logging = false
basic.clearScreen()
logging = false
input.setAccelerometerRange(AcceleratorRange.EightG)
datalogger.setColumnTitles(
"X",
"Y",
"Z"
)
loops.everyInterval(100, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("X", input.acceleration(Dimension.X)),
        datalogger.createCV("Y", input.acceleration(Dimension.Y)),
        datalogger.createCV("Z", input.acceleration(Dimension.Z))
        )
    }
})
