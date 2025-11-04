radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        vooruit()
    }
    if (receivedNumber == 5) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        STOP()
    }
    if (receivedNumber == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        achteruit()
    }
    if (receivedNumber == 3) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        rechts()
    }
})
function STOP () {
    motor.motorStopAll()
}
function rechts () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 200)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 200)
}
function vooruit () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 200)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 200)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 200)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 200)
}
function achteruit () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 200)
}
radio.setGroup(1)
