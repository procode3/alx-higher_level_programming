#!/usr/bin/python3
"""A Python script that fetches
https://alx-intranet.hbtn.io/status
"""
import sys
from urllib.request import urlopen

with urlopen(sys.argv[1]) as f:
     print(f.getheader('X-Request-Id'))
