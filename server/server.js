const express = require('express');
const PORT = process.env.PORT ?? 8000
const app = express();
const path = require('path');

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../client/home.html'));
});


app.listen(PORT, () => {
  console.log (`Server is listening on Port ${PORT}`);
});

