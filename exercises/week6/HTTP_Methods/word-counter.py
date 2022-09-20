import re
from fastapi import FastAPI, status, Response
import uvicorn

from data import wordCounter, total_count


app = FastAPI()

@app.get('/')
def root():
    return {"message":"Server is up and running"}

@app.get('/sanity')
def sanity():
    return {"message":"Server is up and running"}


@app.get('/get/{word}')
def get_count(word, response:Response):
    word = ignore_special_chars(word.lower())
    value = wordCounter.get(word, None)
    if value is not None:
        return {"count": value}
    
    response.status_code = status.HTTP_404_NOT_FOUND
    return {"count": 0}


@app.post('/add')
async def add_word(response:Response, word=""):
    global total_count 
    total_count += 1
    word = ignore_special_chars(word.lower())
    if word in wordCounter:
        wordCounter[word] += 1
    else:
        wordCounter[word] = 1
        response.status_code = status.HTTP_201_CREATED
    return {"text": f"Added- {word}", "currentCount": wordCounter[word] }


@app.post('/add_sentence')
async def add_sentence(response:Response, sentence=""):
    global total_count 
    
    words = sentence.split()
    if len(words) == 0:
        return "" 
    
    old_words_count = 0
    for word in words:
        word = ignore_special_chars(word.lower())
        total_count += 1
        if word in wordCounter:
            wordCounter[word] += 1
            old_words_count += 1
        else:
            wordCounter[word] = 1
            response.status_code = status.HTTP_201_CREATED      
    new_words_count = len(words) - old_words_count  
    return {"text": f"Added- {new_words_count} words, {old_words_count} already existed"} 


@app.delete('/delete/{word}')
def delete_word(word, response:Response):
    word = ignore_special_chars(word.lower())
    value = wordCounter.get(word, None)
    
    if value is not None:
        wordCounter.pop(word)
        global total_count 
        total_count -= 1
        return {"removed": word, "previous count:": value}
    response.status_code = status.HTTP_404_NOT_FOUND
    return f"{word} was not in wordCounter data"


# extension 1
def ignore_special_chars(word):
    return "".join(re.findall(r"[a-z]", word))


# extension 2
@app.get('/mostPopular')
def get_most_popular():
    max_word = max(wordCounter, key=wordCounter.get)
    return {"text": max_word, "count": wordCounter[max_word] }


# extension 4
@app.get('/countAll')
def count_all():
    return {"text": "Total count", "count": total_count }

    

if __name__ == "__main__":
    uvicorn.run("word-counter:app", host="0.0.0.0", port=8000, reload=True)