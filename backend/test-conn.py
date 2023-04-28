#! /usr/bin/env python

import connection

conn = connection.connection()

cur = conn.cursor()

print('PostgresSQL database version: ')
cur.execute('SELECT version()')
db_version = cur.fetchone()
print(db_version)

