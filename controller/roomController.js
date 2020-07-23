const roomController = {};

roomController.createRoom = (req, res) => {
    res.render('room/createRoom')
}

roomController.joinRoom = (req, res) => {
    res.render('room/joinRoom')
}

roomController.renderJoinedRoom = (req, res) => {
    res.render('room/room') // Here we should also send the data from the mongoDB
    console.log(req.params)
}

module.exports = roomController;
