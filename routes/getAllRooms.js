const Room = require('../data/sequelize');

module.exports = app => {
    app.get('/all_rooms', (req, res) => {
        Room.findAll({ raw: true })
        .then(rooms => {
            res.status(200).send(rooms);
        })
        .catch(err => {
            console.log('problem communicating with db');
            res.status(500).json(err);
        });

    });
};
