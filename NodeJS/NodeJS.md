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


