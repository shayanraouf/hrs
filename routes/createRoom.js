const Room = require('../data/sequelize');

module.exports = app => {
    app.post('/create_room', (req, res) => {
        console.log("req", req);
        console.log("req.body", req.body);
        Room.create({
            number: req.body.number,
            name: req.body.name,
            room_type_id: req.body.type_id
        })
        .then(room => {
            console.log('room created with id', room.id);
            res.status(200).send({
                response: 'room created',
                data: room
            });
        })
        .catch(err => {
            console.log('problem communicating with db');
            res.status(500).json(err);
        });

    });
};