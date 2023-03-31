#!/usr/bin/python3
"""Get a request using requests package"""

import requests
from sys import argv as av

if __name__ == '__main__':
    url = 'https://api.github.com/user'
    try:
        user = av[1]
        pswd = av[2]
    except IndexError:
        print('Please enter a username and password')
        exit()
    header = {
        'Accept': 'application/vnd.github.v3+json'
    }
    auth = (user, pswd)

    res = requests.get(url, headers=header, auth=auth)
    print(res.json()['id'])
