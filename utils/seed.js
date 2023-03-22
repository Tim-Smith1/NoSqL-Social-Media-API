const connection = require('../config/connection');
const { user1 } = require('./data');
const { thought1} = require('./data');
const { User, Thought } = require('../models/');

connection.once('open', function () {
    User.create(user1).then(data => 
        console.log(data))
})

connection.once('open', function () {
    Thought.create(thought1).then(data => 
        console.log(data))
})
