# REST-API
## Movie API
### Endpoints and examples

### Use Cases
1. Movie CRUD
```
POST http://api.movieapp.com/movies HTTP/1.1

Example:
Request-
{
    "title": "Twilight",
    "plot": "Very old Vampire falls in love with a teenager",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_.jpg",
    "budget": 1,000,000,
    "revenue": 6,500,000,
    "genres": ["Fantasy", "Romance", "Action"],
    "popularity": 9.5,
    "review": 8.2,
    "runtime" 125
}

Response-
HTTP/1.1 201 Created
Location: /movies/666
{
    "id": 666,
    "title": "Twilight",
    "plot": "Very old Vampire falls in love with a teenager",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_.jpg",
    "budget": 1,000,000,
    "revenue": 6,500,000,
    "genres": ["Fantasy", "Romance", "Action"],
    "popularity": 9.5,
    "review": 8.2,
    "runtime" 125
}
```

```
GET http://api.movieapp.com/movies/666 HTTP/1.1

Example:
Response-
HTTP/1.1 200 OK
{
    "id": 666,
    "title": "Twilight",
    "plot": "Very old Vampire falls in love with a teenager",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_.jpg",
    "budget": 1,000,000,
    "revenue": 6,500,000,
    "genres": ["Fantasy", "Romance", "Action"],
    "popularity": 9.5,
    "review": 8.2,
    "runtime" 125
}

```
```
PUT http://api.movieapp.com/movies/666 HTTP/1.1

Example:
Request-
{
    "id": 666,
    "title": "Twilight",
    "plot": "Very old Vampire falls in love with a teenager",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_.jpg",
    "budget": 1,500,000,
    "revenue": 23,500,000,
    "genres": ["Fantasy", "Romance", "Action"],
    "popularity": 9.5,
    "review": 8.5,
    "runtime" 125
}

Response-
{
    "id": 666,
    "title": "Twilight",
    "plot": "Very old Vampire falls in love with a teenager",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_.jpg",
    "budget": 1,500,000,
    "revenue": 23,500,000,
    "genres": ["Fantasy", "Romance", "Action"],
    "popularity": 9.5,
    "review": 8.5,
    "runtime" 125
}
```
```
DELETE http://api.movieapp.com/movies/666 HTTP/1.1

Response -
HTTP/1.1 204 No Content
```

2. Actor CRUD
```
POST http://api.movieapp.com/actors HTTP/1.1

Example:
Request-
{
  "name": "Brad Pitt", 
  "bio": "William Bradley Pitt (born December 18, 1963) is…", 
  "image": "https://flxt.tmsimg.com/assets/1366_v9_bc.jpg",
  "birthday": "1963-12-18", 
  "deathday": null, 
  "gender": 2, 
  "popularity": 9.93
}

Response-
HTTP/1.1 201 Created
Location: /actors/283
{
  "id": 283, 
  "name": "Brad Pitt", 
  "bio": "William Bradley Pitt (born December 18, 1963) is…", 
  "image": "https://flxt.tmsimg.com/assets/1366_v9_bc.jpg",
  "birthday": "1963-12-18", 
  "deathday": null, 
  "gender": 2, 
  "popularity": 9.93
}
```
```
GET http://api.movieapp.com/actors/283 HTTP/1.1

Example:
Response-
HTTP/1.1 200 OK
{
  "id": 283, 
  "name": "Brad Pitt", 
  "bio": "William Bradley Pitt (born December 18, 1963) is…", 
  "image": "https://flxt.tmsimg.com/assets/1366_v9_bc.jpg",
  "birthday": "1963-12-18", 
  "deathday": null, 
  "gender": 2, 
  "popularity": 9.93
}
```
```
PUT http://api.movieapp.com/actors/283 HTTP/1.1

Example:
Request-
{
  "id": 283, 
  "name": "Brad Pitt", 
  "bio": "William Bradley Pitt (born December 18, 1963)", 
  "image": "https://flxt.tmsimg.com/assets/1366_v9_bc.jpg",
  "birthday": "1963-12-18", 
  "deathday": null, 
  "gender": 2, 
  "popularity": 9.99
}

Response-
HTTP/1.1 200 OK
{
  "id": 283, 
  "name": "Brad Pitt", 
  "bio": "William Bradley Pitt (born December 18, 1963)", 
  "image": "https://flxt.tmsimg.com/assets/1366_v9_bc.jpg",
  "birthday": "1963-12-18", 
  "deathday": null, 
  "gender": 2, 
  "popularity": 9.99
}
```
```
DELETE http://api.movieapp.com/actors/283 HTTP/1.1

Response -
HTTP/1.1 204 No Content
```

3. Get actors of a specific movie
```
GET http://api.movieapp.com/actors?movieId=666&limit=20&offset=0

Example:
Response-
HTTP/1.1 200 OK
{
    {"id": 200, 
    "name": "Robert Pattinson",
    ... },
    {"id": 201, 
    "name": "Kristen Stewart",
    ... },
    {"id": 202, 
    "name": "Taylor Lautner",
    ... }
}
```

4. Add an actor to a specific movie
```
PATCH http://api.movieapp.com/movies/666 HTTP/1.1

Example:
Request-
{
    "actors":
        {
        "id": 283, 
        "name": "Brad Pitt", 
        "bio": "William Bradley Pitt (born December 18, 1963)", 
        "image": "https://flxt.tmsimg.com/assets/1366_v9_bc.jpg",
        "birthday": "1963-12-18", 
        "deathday": null, 
        "gender": 2, 
        "popularity": 9.99
        }
}

Response-
{
    "id": 666,
    "title": "Twilight",
    "plot": "Very old Vampire falls in love with a teenager",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_.jpg",
    "budget": 1,500,000,
    "revenue": 23,500,000,
    "genres": ["Fantasy", "Romance", "Action"],
    "popularity": 9.5,
    "review": 8.5,
    "runtime" 125,
    "actors":
    {
        "id": 283, 
        "name": "Brad Pitt", 
        "bio": "William Bradley Pitt (born December 18, 1963)", 
        "image": "https://flxt.tmsimg.com/assets/1366_v9_bc.jpg",
        "birthday": "1963-12-18", 
        "deathday": null, 
        "gender": 2, 
        "popularity": 9.99
    }
}
```

5. Remove an actor from a specific movie



