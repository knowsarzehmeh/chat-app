const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
// create a cross os path to serve our public folder
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`server is up on port ${port} `);
});
