#!/usr/bin/python3
"""A Python script that fetches
https://alx-intranet.hbtn.io/status
"""

if __name__ == '__main__':
    """Opening a url with a context manager"""
    from urllib.request import urlopen, Request
    req = Request('https://alx-intranet.hbtn.io/status')
    with urlopen(req) as f:
        html = f.read()
        print('Body response:')
        print(f'\t- type: {type(html)}')
        print(f'\t- content: {html}')
        print(f'\t- utf8 contnent: {html.decode("utf-8")}')
