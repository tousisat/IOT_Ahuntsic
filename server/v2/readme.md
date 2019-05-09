# Install nodejs on the raspberrypi

1. Run the following in the Visual code terminal: `ssh pi@raspberrypi`
2. Let's add and install node to apt-get on the remote rpi:
   - `curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -`
   - `sudo apt-get install nodejs`
   - `node -v`

> REF: <br/> - https://github.com/nodesource/distributions <br/> - https://www.youtube.com/watch?v=zBgj-WPiL2g

# This is how to enable remote coding on the Rapsberrypi

1.  Run the following in the Visual code terminal: `ssh pi@raspberrypi`
2.  From the rpi remote ssh, create a directory: `mkdir IOT_Ahuntsic`
3.  From the rpi remote ssh,clone the project to the rpi: `git clone https://github.com/tousisat/IOT_Ahuntsic.git`
4.  Add the SSH FS extension for visual code and configure the remote connection
    - Here is my global .vscode settings:
      ```json
      "sshfs.configs": [
            {
                "host": "raspberrypi",
                "name": "rpi_remote",
                "password": "raspberry",
                "root": "/home/pi/IOT_Ahuntsic",
                "username": "pi"
            }
      ]
      ```
5.  You can now connect remotely and use ssh with the rpi terminal

# You can edit the services/GPIO.js file
-  The library `onoff` use the BCM numbers instead of the GPIO.
      - in your ssh terminal: `gpio readall` (http://wiringpi.com/the-gpio-utility/)
      - you now have a full mapping of the GPIO pins

> REF for  `onoff` library: - https://github.com/fivdi/onoff

# Here are some git helpers when working remotely

- git pull
- git commit -am "your message goes here"
- git push

> REF: - https://www.youtube.com/watch?v=zBgj-WPiL2g
