const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Favourite = require('D:\\Web Development\\Unicode\\backend_task_3\\models\\favchar.js');

//connecting to mongodb
const db_url = 'mongodb+srv://unicodedb:compsop@cluster0.h0arm.mongodb.net/characters?retryWrites=true&w=majority'
mongoose.connect(db_url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000, () => {
        console.log("Server is active!!");
    }))
    .catch((err) => console.log(err));

app.get('/addfavchar', (req, res) => {
    const favourite =new Favourite({
        "id" : "1327",
        "name" : "Tony Stark",
        "birthday" : "31/7/1970",
        "occupation" : "Owner of Stark Industries",
        "img" : "On the posters of magazines",
        "status" : "dead :(",
        "nickname" : "genius, billionaire, playboy, philanthropist",
        "appearance" : "0 seasons",
        "portrayed" : "Robert Downey Jr.",
        "category" : "MCU"
    });

    favourite.save() 
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
})

app.listen(3001);