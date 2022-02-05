input.onButtonPressed(Button.A, function () {
    angle += direction
    pins.servoWritePin(AnalogPin.P0, angle)
    if (angle >= 180 || angle <= 0) {
        direction = direction * -1
    }
})
let angle = 0
let direction = 0
direction = 1
direction = 0
pins.servoWritePin(AnalogPin.P0, angle)
basic.forever(function () {
	
})
