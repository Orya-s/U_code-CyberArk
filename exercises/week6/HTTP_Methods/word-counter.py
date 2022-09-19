from fastapi import FastAPI, status, Response
import uvicorn

from data import wordCounter


app = FastAPI()

@app.get('/')
def root():
    return {"message":"Server is up and running"}

@app.get('/sanity')
def sanity():
    return {"message":"Server is up and running"}


@app.get('/get/{word}')
def get_count(word, response:Response):
    value = wordCounter.get(word, None)
    if value is not None:
        return {"count": value}
    
    response.status_code = status.HTTP_404_NOT_FOUND
    return {"count": 0}


@app.post('/add')
async def add_word(word, response:Response):
    if word in wordCounter:
        wordCounter[word] += 1
    else:
        wordCounter[word] = 1
        response.status_code = status.HTTP_201_CREATED
    return {"text": f"Added- {word}", "currentCount": wordCounter[word] }


@app.post('/add_sentence')
async def add_sentence(sentence, response:Response):
    words = sentence.split()
    if len(words) == 0:
        return "" 
    old_words_count = 0
    for word in words:
        if word in wordCounter:
            wordCounter[word] += 1
            old_words_count += 1
        else:
            wordCounter[word] = 1
            response.status_code = status.HTTP_201_CREATED         
    return {"text": f"Added- {len(words)} words, {old_words_count} already existed"} 


@app.delete('/delete/{word}')
def delete_word(word, response:Response):
    value = wordCounter.get(word, None)
    if value is not None:
        wordCounter.pop(word)
        return {"removed": word, "previous count:": value}
    response.status_code = status.HTTP_404_NOT_FOUND
    return "Word was not in wordCounter data"


# extension 2
@app.get('/mostPopular')
def get_most_popular():
    max_word = max(wordCounter, key=wordCounter.get)
    max_value = max(wordCounter.values())
    return {"text": max_word, "count": max_value }


# extension 4
@app.get('/countAll')
def count_all():
    return {"text": "Total count", "count": sum(wordCounter.values()) }

    

if __name__ == "__main__":
    uvicorn.run("word-counter:app", host="0.0.0.0", port=8000, reload=True)