DS18B20.setPin(DS18B20.pin.pin1)
basic.forever(function () {
    serial.writeLine("" + DS18B20.TemperatureNumber())
})
