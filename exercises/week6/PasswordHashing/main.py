from typing import Union
from fastapi import Depends, FastAPI, HTTPException, status, Form
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from passlib.context import CryptContext
import uvicorn
from pydantic import BaseModel


app = FastAPI()
security = HTTPBasic()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


# Fake user db containing a single user with a hashed password
users_db = {
    "johnsmith": {
        "username": "johnsmith",
        "full_name": "John Smith",
        "email": "johnsmith@example.com",
        "hashed_password": "$2a$12$YXfUJUQ1XN75Aohh8tNyvuYtFmxvdDKJlHqh0mltISsteUAr0u3aC"
    }
}


class User(BaseModel):
    username: str
    email: Union[str, None] = None
    full_name: Union[str, None] = None


# Function that authenticates the user
def authenticate_user(credentials: HTTPBasicCredentials = Depends(security)):
    is_authorized = True

    # First check if the username exists in the users db and if the password was provided
    if credentials.username not in users_db or not credentials.password:
        is_authorized = False

    # Secondly, check if the provided password matches the stored hashed password
    elif not pwd_context.verify(credentials.password, users_db[credentials.username]["hashed_password"]):
        is_authorized = False

    if not is_authorized:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Basic"},
        )

    # Populate a 'User' object with the database results, except for the hashed password
    return User(**users_db[credentials.username])


@app.get("/profile")
async def main(user: User = Depends(authenticate_user)):
    return user


@app.post("/users")
async def create_user(username: str = Form(), password:str = Form()):
    user = {
        "username": username,
        "full_name": "Jane Doe",
        "email": f"{username}@example.com",
        "hashed_password": pwd_context.hash(password)
    }
    users_db[username] = user
    return user


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, log_level="info")