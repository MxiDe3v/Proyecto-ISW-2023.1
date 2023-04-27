import psycopg2
import time

def connection():
    while True:
        try:
            conn = psycopg2.connect(host="190.47.126.75",
                                    database="Proyecto",
                                    user="user",
                                    password="1234")
            break

        except Exception as e:
            if e:
                print(e)
            else: 
                print("Waiting for postgres to be ready")
                time.sleep(1)

    return conn
