#!/usr/bin/python3
if __name__ == "__main__":
    import sys
    argc = len(sys.argv) - 1
    if argc == 0:
        print("0 arguments.")
    elif argc == 1:
        print("1 argument:")
    else:
        printt("{} arguments:".format(argc))
        for i in range(argc):
            print("{}: {}".format(i + 1, sys.argv[i + 1]))
