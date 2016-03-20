#!/usr/bin/python
from sense_hat import SenseHat
import sys

sense = SenseHat()
sense.set_rotation(180)
red = (255, 0, 0)
sense.show_message(str(sys.argv[1]), text_colour=red)
