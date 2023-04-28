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

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
    username: str
    email: Optional[str]
    password: str
    is_tutor: bool 

createTables()

@app.post("/users")
async def createUsers(user: User):
    conn = connection.connection()
    cur = conn.cursor()

    try:
        cur.execute("""INSERT INTO users (username, email, password, is_tutor) 
                    VALUES(%s, %s, %s, %s)""", (user.username, user.email,
                                                user.password, user.is_tutor))
        conn.commit()
        return JSONResponse(content={"message": "User created successfully"},
                            status_code=status.HTTP_201_CREATED)
    except Exception as e:
        print(e)
        return JSONResponse(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)

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
