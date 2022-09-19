from fastapi import FastAPI
import uvicorn
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import requests


app = FastAPI()

# static files      - should be at the top of the file!
# first parameter - sub-path for the route, if we want to reach a file example.txt that is found in
# the static folder, it’s route will be /static/example.txt
# second parameter - the StaticFiles function, we pass it a directory="static" keyword argument to 
# specify the directory of the static files 
# example - localhost:8000/static/view.jpg
app.mount("/static", StaticFiles(directory="static"), name="static")


# server code...

@app.get('/')
def root():
    return FileResponse('./static/view.jpg')    # we will receive the image if we try to access the server
    # return {"message":"Someone has made a request and accessed the server. Exciting!"}


@app.get('/maps')
def maps():
    return "Here's some stuff related to maps"


@app.get('/shoobi')
def shoobi():
    return "This here is the shoobi *route*"


@app.get("/landing/{username}")     # example - localhost:8000/landing/Rob
async def greet_user(username):
    return {"message":"Hi there {}".format(username)}


@app.get("/optionalParameters/")    # example - localhost:8000/optionalParameters?name=robert
async def query_params(name):
    return {"message":"Hi there {}".format(name)}


# external API
# we used .json on the response because the requests library requires us to do so
@app.get("/book/{name}")
async def get_book(name):
    res = requests.get('https://www.googleapis.com/books/v1/volumes?q={}'.format(name))
    return res.json()



if __name__ == "__main__":
    uvicorn.run("server:app", host="127.0.0.1", port=8000, reload=True)