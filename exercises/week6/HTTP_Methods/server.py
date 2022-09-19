from fastapi import FastAPI, Request, status, Response
import uvicorn


app = FastAPI()


wonders = [
    {
        "ID":1,
        "name": "The Great Pyramid",
        "location": "Giza"
    }
]

id_counter = 1




@app.get('/')
def root():
    return {"message":"Server is up and running"}


@app.post('/wonders', status_code=201)
async def create_wonder(request: Request):
    res = await request.json()
    global id_counter 
    id_counter += 1
    res["ID"] = id_counter
    wonders.append(res)
    print(res)
    return "Created"


@app.delete('/delete/{id}')
def deleteByID(id, response:Response):
    for wonder in wonders:
        if wonder.get("ID") == int(id):
            wonders.remove(wonder)
            return wonder
    response.status_code = status.HTTP_404_NOT_FOUND
    return "Item does not exist"
    
    
@app.put("/wonders/{id}")
def update_wonder(id, response:Response, name = "default", location = "default location"):
    for wonder in wonders:
        print(wonder)
        if wonder["ID"] == int(id):
            print("updating", wonder["name"])
            return wonder
    response.status_code = status.HTTP_404_NOT_FOUND
    return "Item does not exist"


@app.get('/get/{id}')
def getByID(id, response:Response):
    for wonder in wonders:
        if wonder.get("ID") == int(id):
            return wonder
    response.status_code = status.HTTP_404_NOT_FOUND
    return "Item does not exist"




if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)