#!/usr/bin/python
import sys
import json
from sense_hat import SenseHat



sense = SenseHat()
print json.dumps(sense.get_orientation_degrees())
