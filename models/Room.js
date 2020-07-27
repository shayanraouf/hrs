module.exports = (sequelize, type) => {
    return sequelize.define('room', {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      number: type.STRING,
      name: type.STRING,
      room_type_id: type.INTEGER
    }, {
      timestamps: false
  });
};

//   CREATE TABLE `rooms` (
//     `id` int NOT NULL AUTO_INCREMENT,
//     `number` varchar(10) NOT NULL,
//     `name` varchar(40) NOT NULL,
//     `room_type_id` int DEFAULT NULL,
//     PRIMARY KEY (`id`)
//   ) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;