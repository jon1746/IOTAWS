#!/usr/bin/python
import sys
from sense_hat import SenseHat



sense = SenseHat()
print sense.get_orientation_degrees()
