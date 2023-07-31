#nodejs


Відправка запроса і прочитка параметра з запроса. 
```ts
app.get('/api/v1/tours/:id', (req, res) => { // тут :id як параметр
  console.log(req.params); // тут читаєм 
  res.status(200).json({
    status: 'success',
  });
});

ссилка
127.0.0.1:3000/api/v1/tours/1
```

не обізательний параметр
```ts
app.get('/api/v1/tours/:id:name?', (req, res) => { // name не обізатєльний
  console.log(req.params); // тут читаєм 
  res.status(200).json({
    status: 'success',
  });
});
```





JSON
```JSON
{
  "name": "express",
  "version": "1.0.0",
  "description": "",
  "main": "./dist/app.js",
  "scripts": {
    "build": "concurrently \"rimraf dist\" \" npx tsc\"",
    "start_js": "node dist/app.js",
    "prestart": "npm run build",
    "start": "concurrently \"npx tsc -w\" \" nodemon dist/app.js\""
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@types/express": "^4.17.17",
    "@types/node": "^20.2.5",
    "body-parser": "^1.20.2",
    "express": "^4.18.2",
    "rimraf": "^5.0.1",
    "typescript": "^5.1.3"
  },
  "devDependencies": {
    "ts-node": "^10.9.1"
  }
}

```

В tsconfig міняєм  "outDir": "./dist"


--------------------

## Filtering
#### 2 варіанта фільтрації 
```ts
/*const tours = await Tour.find({  
difficulty: req.query.difficulty ? req.query.difficulty as string : "",  
duration: req.query.duration ? +req.query.duration : undefined  
}); */*


const query = Tour.find({ ...req.query });
  //-----------------------------------
 const tours = await Tour.find()  
.where("difficulty").equals("easy")  
.where("duration").equals(5);
```

#### обичний фільтр (95)
``` request
127.0.0.1:8000/api/v1/tours?difficulty=easy&duration=5
```

```ts

const query = await Tour.find({ ...req.query });// difficulty і duration будуть сидіти в об*єкті req.query і ми найдем всі підходящі нам тури

```


#### Адванс фільтер (96)

``` request
127.0.0.1:8000/api/v1/tours?difficulty=easy&duration[gte]=5
```


```ts
const queryObj = { ...req.query };  
const excludeFields = ["page", "sort", "limit", "fields"];  
excludeFields.forEach(el => delete queryObj[el]);

const queryStr = JSON.stringify(queryObj).replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);  
   

const query = Tour.find(JSON.parse(queryStr));
```



#### Sorting (97)

``` request
127.0.0.1:8000/api/v1/tours?sort=price,ratingsAverage
```

```ts

const queryObj = { ...req.query };  
const excludeFields = ["page", "sort", "limit", "fields"];  
excludeFields.forEach(el => delete queryObj[el]);  
  
const queryStr = JSON.stringify(queryObj).replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
let query = Tour.find(JSON.parse(queryStr));  

if (req.query.sort) {  
query = query.sort((req.query.sort as string).split(",").join());
}
```



#### Field limiting(98)

``` request
127.0.0.1:8000/api/v1/tours?fields=name,duration,difficulty,price
```

```ts
let query = Tour.find(JSON.parse(queryStr));


if (req.query.fields) {  
console.log(req.query.fields);  
const fields = (req.query.fields as string).split(",").join(" ");  
query = query.select(fields);  
}  
else {  
query = query.select("-__v");  
}


const tours = await query;

res.status(200).json({  
status: "success",  
tourAmount: tours.length,  
data: {  
tours  
	}  
});
```


#### Pagination (99)

```request
127.0.0.1:8000/api/v1/tours?page=2&limit=10
```

```ts
 paginate() {    const page = this.queryString.page && +this.queryString.page || 1;    const limit = this.queryString.limit && +this.queryString.limit || 100;    let skip = (page - 1) * limit;    this.query = this.query.skip(skip).limit(limit);    return this;  }}*/
```

### Aggregation Pipeline



