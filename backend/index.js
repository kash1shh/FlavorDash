const express = require('express');
const app = express();
const port = 5000
const mongoDB = require("./db");
mongoDB();

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})


