const express = require('express');
const bodyParser = require("body-parser");
const keys = require('./config/keys');
const mysql = keys.mysql
const Guest = require('./models/Guest');

const app = express();
require('./models/Guest')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const PORT = process.env.PORT || 5000;

require('./routes/createRoom')(app);
require('./routes/getAllRooms')(app);

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

app.listen(PORT, () => {
    console.log("Express server listening on port 5000");
});