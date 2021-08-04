var url_bb = 'https://breakingbadapi.com/api/characters'

const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.get('/', async (req,res) => {
    const response = await fetch(url_bb);
    const data = await response.json();
    res.send(data);
})

app.listen(3000);