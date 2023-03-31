#!/usr/bin/python3
"""A Python script that fetches
https://alx-intranet.hbtn.io/status
"""

if __name__ == '__main__':
    """Opening a url with a context manager"""
    from urllib.request import urlopen

    with urlopen('https://alx-intranet.hbtn.io/status') as f:
        html = f.read()
        print('Body response:')
        print(f'    - type: {type(html)}')
        print(f'    - content: {html}')
        print(f'    - utf8 contnent: {html.decode("utf-8")}')
