# domeMUSIC

TOPICS:
- music sources
    - synthesized through credit card sized computers
    - cheap laptops
    - analog sources
- amplifiers

TODO:
- Explore some of the following promising leads:
  1. [[**non**]]  LINK: http://non.tuxfamily.org/    and
  2. [[**Pure Data**]] (Pd).  LINK: https://puredata.info/
    - check out this example of what Pure Data can do:  https://guitarextended.wordpress.com/2013/01/27/real-time-guitar-effects-with-raspberry-pi-pd-and-arduino/
  3. [[**Jack**]] LINK: http://www.jackaudio.org/
- Follow this tutorial and play wav from pi with sufficiently low latency: https://www.raspberrypi.org/learning/gpio-music-box/worksheet/
    + follow up on previous point: further develop python script to accept "velocity" input to change the sound depending on hard or soft hits

'SERVER' BRANCH:
  Contains code for John's original proof of concept.
  To run this, clone this branch and install [node.js](https://nodejs.org/en/download/)
  Also install the following node.js modules right in the project directory:
  1. express `npm install express`
  2. play-sound `npm install play-sound`
  3. string-hash `npm install string-hash`
  To test the app, use the command `node main.js`, check which port it is running on and then go to localhost:port in your browser

