from fastapi import FastAPI
import uvicorn
from fastapi.staticfiles import StaticFiles
from store import store


app = FastAPI()



@app.get('/')
def root():
    return "Hello"


@app.get('/sanity')
def sanity():
    return "Server is up and running smoothly"


@app.get('/store/item/{name}')
async def get_price(name):
    wanted_item = [item["price"] for item in store if item["name"] == name]
    if len(wanted_item) > 0:
        return {"price": wanted_item[0]}
    else:
        return {"price": None}
    

@app.get('/store/buy/{name}')
async def buy_item(name):
    wanted_item = [item for item in store if item["name"] == name]
    if len(wanted_item) > 0:
        inv = wanted_item[0]["inventory"]
        if(inv != 0):
            wanted_item[0]["inventory"] -= 1
        return {"inventory": inv}
    else:
        return {"inventory": None}
    

@app.get('/store/sale/')
async def query_params(admin):      # http://127.0.0.1:8080/store/sale/?admin=true
    if bool(admin):
        for item in store:
            item["price"] = item["price"] / 2 if item["inventory"] < 10 else item["price"] 
            # discount all the furniture which have more than 10 items in stock by 50%   
    return store      




if __name__ == "__main__":
    uvicorn.run("exercises:app", host="127.0.0.1", port=8080, reload=True)