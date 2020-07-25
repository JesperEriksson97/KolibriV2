const roomController = {};

roomController.createRoom = (req, res) => {
    res.render('room/createRoom')
}

roomController.joinRoom = (req, res) => {
    res.render('room/joinRoom')
}

roomController.renderJoinedRoom = (req, res) => {
    console.log(req.body)
    res.render('room/room') // Here we should also send the data from the mongoDB
}

module.exports = roomController;
