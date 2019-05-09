//REF: https://github.com/fivdi/onoff
//REF: https://www.w3schools.com/nodejs/nodejs_raspberrypi_blinking_led.asp

const Gpio = require('onoff').Gpio;
const port = require('../serialPort').getPort();

//######################## DEBUT: CODE que les ETUDIANTS peuvent modifier ####################

//BCM_23 -> GPIO_4 (CMD: gpio readall)
const button = new Gpio(23, 'in', 'falling', {debounceTimeout: 10});

//Configured GPIO_5 (BCM_24) to HIGH so I can add a pull up resistor to the button
const pullUpGPIO = new Gpio(24, 'out');
pullUpGPIO.writeSync(Gpio.HIGH);

// cette fonction est appeler a chaque fois qu'on click sur le boutton de GPIO_4
button.watch((err, value) => {
  if (err) {
    throw err;
  }
  console.log("Button press!");
  port.write('e'); //send to arduino this character
});



// cette fonction est appeler quand on press CTRL+C
process.on('SIGINT', () => {
  button.unexport();
  process.exit(0);
});

//######################## FIN: CODE que les ETUDIANTS peuvent modifier ######################