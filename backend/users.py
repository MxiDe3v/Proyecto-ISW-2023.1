#! /usr/bin/env python
from pydantic import BaseModel
from typing import Optional
from fastapi import FastAPI, Response, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

import connection
from tables import createTables

# instancia de FastAPI
app = FastAPI()

class User(BaseModel):
    username: str
    email: Optional[str]
    password: str


# crea un nuevo usuario
@app.post("/register")
async def createUsers(user: User):
    conn = connection.connection()
    cur = conn.cursor()

    try:
        cur.execute("""INSERT INTO users (username, email, password) 
                    VALUES(%s, %s, %s)""", (user.username, user.email,
                                            user.password))
        conn.commit()
        return JSONResponse(content={"message": "User created successfully"},
                            status_code=status.HTTP_201_CREATED)
    except Exception as e:
        print(e)
        return JSONResponse(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)

# muestra los datos de un usuario dado un id
@app.get("/users/{id}")
async def showUser(id : int):
    conn = connection.connection()
    cur = conn.cursor()
   
    try:
        cur.execute("""SELECT * FROM users WHERE id = %s""", (id,))
        conn.commit()
        return JSONResponse(content = {"message": "User selected successfully"},
                            status_code = status.HTTP_200_OK)
    except Exception as e:
        print(e)
        return JSONResponse(status_code = status.HTTP_500_INTERNAL_SERVER_ERROR)

# actualiza los datos de un usuario dado una id
@app.put("/users/{id}")
async def updateUser(id: int, new_data: User):
    conn = connection.connection()
    cur = conn.cursor()

    try:
        cur.execute("""UPDATE users SET (username, email, password)
                    WHERE id = %d, VALUES (%s, %s, %s)""", (user.name,
                                                            user.password,
                                                            user.email))
        conn.commit()
        return JSONResponse(content= {"message": "User updated successfully"},
                            status_code=status.HTTP_200_OK)

    except Exception as e:
        print(e)
        return JSONResponse(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)

# elimina los datos de un usuario
@app.delete("/users/{id}")
async def deleteUser(id: int):
    conn = connection.connection()
    cur = conn.cursor()
   
    try:
        cur.execute("""DELETE FROM users WHERE id = %s""", (id,))
        conn.commit()
        return JSONResponse(content = {"message": "User delete successfully"},
                            status_code = status.HTTP_200_OK)
    except Exception as e:
        print(e)
        return JSONResponse(status_code = status.HTTP_500_INTERNAL_SERVER_ERROR)
