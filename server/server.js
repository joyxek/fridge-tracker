const express = require('express');
const PORT = process.env.PORT ?? 8000
const app = express();
const pool = require('./db');
const cors = require('cors');
// const { ids } = require('webpack');
const { v4: uuidv4 } = require('uuid');
const async_hooks = require('async_hooks');

// bypass cors 
app.use(cors());

// parse request body sent to server to JSON data
app.use(express.json());

// when a get request is sent to this endpoint
app.get('/foodlist/:userEmail', async (req,res) => {
  const { user_email } = req.params;
  // console.log(userEmail);
  try {
    const food = await pool.query('SELECT * FROM foods WHERE user_email = $1', [user_email])
    // grab the query and send the rows of that query into res
    res.json(food[0].rows); // CHANGED THIS!!!
  } catch (err) {
    console.log('error getting data')
  }
});

// create a new grocery item
app.post('/foodlist', async (req,res) => {
  const { user_email, food, date, expiration } = req.body;
  const id = uuidv4();
  try {
    const newFood = await pool.query(`INSERT INTO foods(id, user_email, food, date, expiration) VALUES($1, $2, $3, $4, $5)`,
    [id, user_email, food, date, expiration])
    res.json(newFood);
  } catch (err) {
    console.log('error creating a new grocery item')
  }
})

// edit food item
app.put('/foodlist/:id', async (req,res) => {
  const { id } = req.params;
  const { user_email, food, date, expiration } = req.body;
  try {
    const editFoods = await pool.query('UPDATE foods SET user_email = $1, food = $2, date = $3, expiration = $4 WHERE id = $5;',
      [user_email, food, date, expiration, id]
    )
    res.json(editFoods);
  } catch (err) {
    console.log('error editing grocery item')
  }
})

// delete a food item
app.delete('/foodlist/:id', async (req,res) => {
  const { id } = req.params;
  try {
    const deletedFood = await pool.query('DELETE FROM foods WHERE id = $1', [id]);
    res.json(deletedFood)
  } catch (err) {
    console.log('error deleting data')
  }
})



app.listen(PORT, () => {
  console.log (`Server is listening on Port ${PORT}`);
});

