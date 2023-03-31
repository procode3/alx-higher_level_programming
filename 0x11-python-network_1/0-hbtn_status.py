#!/usr/bin/python3
"""A Python script that fetches
https://alx-intranet.hbtn.io/status
"""
from urllib.request import urlopen

with urlopen('https://alx-intranet.hbtn.io/status') as f:
    html = f.read()

print('Body response:')
print(f'    - type: {type(html)}')
print(f'    - content: {html}')
print(f'    - utf8 contnent: {html.decode("utf-8")}')
