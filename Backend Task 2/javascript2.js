var url_bb = 'https://breakingbadapi.com/api/characters?category=Breaking+Bad'
var url_bcs = 'https://breakingbadapi.com/api/characters?category=Better+Call+Saul'

const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.get('/breakingbad', async (req, res) => {
    try{
    //fetching the data from api
    const response1 = await fetch(url_bb);

    //parsing data into json format
    const data1 = await response1.json();

    //sending response
    res.send(data1);
    }

    //error handling
    catch(error)
    {
        console.log(error);
    }
});

//bonus task
app.get('/bettercallsaul', async (req, res) => {
    try{
    const response2 = await fetch(url_bcs);
     const data2 = await response2.json();
     res.send(data2);
    }
    catch(error)
    {
        console.log(error);
    }
});

app.listen(3000, () => {
    console.log("Server is active!");
});