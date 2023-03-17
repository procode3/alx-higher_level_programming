#!/usr/bin python3
""" selecting with mysqlDb """
import MySQLdb
import sys

if __name__ = "__main__":
	db_conn = MySQLdb.connect
	(host = "localhost", user = sys.arg[1], passwd = sys.arg[2], db = sys.argv[3])

	print("Failed to connect to db")

	cur = db_conn.cursor()
	cur.exercute ("SELECET * FROM state ORDER BT states.id")
	cur.fetchall()
	for row in rows:
		print(row);
	cur.close()
	db_conn.close()
