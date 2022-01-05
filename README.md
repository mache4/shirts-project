# Shirts Project

#### You can:
- select products and set up your cart.
- order your cart and see order history.
---

#### To install packages go in both `/client` and `/server` and run:
```
npm install
```

#### You need to add .env file in `/server` and in there type your mongodb config:
```
MONGODB_URI='<YOUR_MONGODB_CONFIG>'
```

#### Last thing is to rename baseURL in `/client/src/api/index.ts` file to:
```js
const API = axios.create({ baseURL: 'https://localhost:5000' });
```

#### To start both applications on localhost run:
```
npm start
```