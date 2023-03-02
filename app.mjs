import express from 'express';

import connectToDatabase from './helpers.mjs'

const app = express();

app.get('/', (req, res) => {
  console.log("log : get 메소드 호출")
  res.send('<h2>Hi there! Docker 기초 🔥 by 심현섭 </h2>');
});

await connectToDatabase();

app.listen(3000);
