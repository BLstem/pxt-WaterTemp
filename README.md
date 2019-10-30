# DS18B20 Temperature Sensor for Microbit 

## Table of Contents

* [Summary](#summary)
* [Blocks](#blocks)
* [Example](#example)
* [License](#license)

## Summary
DS18B20 module, support single bus control, and read temperature.

## Blocks
### Set up pin connection. 
![image](https://github.com/BLstem/pxt-WaterTemp/blob/master/image/pin.png)<br>

### Read temperature, return a number, the value is amplifies up to 100 times.
![image](https://github.com/BLstem/pxt-WaterTemp/blob/master/image/number.png)<br>

## Example
Example for JavaScript
```
DS18B20.setPin(DS18B20.pin.pin1)
basic.forever(function () {
    serial.writeLine("" + DS18B20.TemperatureNumber())
})

```

## License

GUI
## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)


