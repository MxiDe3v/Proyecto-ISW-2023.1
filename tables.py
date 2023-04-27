#! /usr/bin/env python

import connection
# crea tables del sistema
def createTables():
    
    conn = connection.connection()
    cur = conn.cursor()

    # users table
    cur.execute("""CREATE TABLE IF NOT EXISTS users (
        id serial PRIMARY KEY,
        username varchar(50) NOT NULL,
        email varchar(50),
        password varchar(50));
        """)

    conn.commit()
    print("All tables created successfully")

createTables()
