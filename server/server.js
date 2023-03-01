const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../client/home.html'));
});


app.listen(3000, () => {
  console.log('Server is listening on Port 3000');
});

