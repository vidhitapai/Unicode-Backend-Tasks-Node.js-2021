var url_bb = 'https://breakingbadapi.com/api/characters?category=Breaking+Bad'
var url_bcs = 'https://breakingbadapi.com/api/characters?category=Better+Call+Saul'

const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.get('/breakingbad', async (req, res) => {
    const response1 = await fetch(url_bb);
    const data1 = await response1.json();
    res.send(data1);
});

//bonus task
app.get('/bettercallsaul', async (req, res) => {
     const response2 = await fetch(url_bcs);
     const data2 = await response2.json();
     res.send(data2);
});

app.listen(3000);