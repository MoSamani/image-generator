const express = require('express');
const app = express()
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 8081

app.get('/', (req, res) => {
    res.status(200).end("Image generator...")
})

app.listen(PORT, () => {
    console.log("Server is listening on port : 8081...")
})


