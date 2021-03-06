//% color=#5042f4 icon="\uf2c9"
namespace DS18B20 {
  /**
   * Reads the temperature from the one-wire temperature sensor.
   * Returns a 3 digit number. value should be divided by 10 to get 
   *temperature in hundreths of a degree centigrade. 
   * block="Temperature(C)"
   */

  let pin_arg: number;

  export enum pin {
    //% block=pin0
    pin0 = 0,
    //% block=pin1
    pin1 = 1,
    //% block=pin2
    pin2 = 2,
    //% block=pin5
    pin5 = 5,
    //% block=pin8
    pin8 = 8,
    //% block=pin11
    pin11 = 11,
    //% block=pin12
    pin12 = 12,
    //% block=pin13
    pin13 = 13,
    //% block=pin14
    pin14 = 14,
    //% block=pin15
    pin15 = 15,
    //% block=pin16
    pin16 = 16
  }

  //% weight=11 
  //% block = "set pin %arg_pin"
  //% arg_pin.fieldEditor="gridpicker" arg_pin.fieldOptions.columns=4
  export function setPin(arg_pin: pin): void {
    pin_arg = arg_pin;
  }

  //% shim=DS18B20::Temperature
  export function Temperature(p: number): number {
    // Fake function for simulator
    return 0
  }

  //% weight=10
  //% block="Temperature"
  export function TemperatureNumber(): number {
    // Fake function for simulator

    return Math.round(Temperature(pin_arg) / 10);
  }
}
