const roomController = {};

roomController.createRoom = (req, res) => {
    res.send('Hello from Create Room')
}

roomController.joinRoom = (req, res) => {
    res.send('Hello from Join Room')
}

module.exports = roomController;
