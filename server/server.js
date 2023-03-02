const express = require('express');
const PORT = process.env.PORT ?? 8000
const app = express();
const path = require('path');
const pool = require('./db')

app.get('/foodlist', async (req,res) => {
  try {
    const food = await pool.query('SELECT * FROM foods')
    res.json(food.rows);
  } catch (err) {
    console.log('error')
  }
});


app.listen(PORT, () => {
  console.log (`Server is listening on Port ${PORT}`);
});

