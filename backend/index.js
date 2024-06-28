const express = require('express');
const app = express();
const port = 5000
const mongoDB = require("./db");

app.get('/', (req, res) => {
    res.send("Hello world");
})
app.use(express.json());

app.use('/api',require("./routes/createUser "));
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})


