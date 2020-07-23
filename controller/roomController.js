const roomController = {};

roomController.createRoom = (req, res) => {
    res.render('room/createRoom')
}

roomController.joinRoom = (req, res) => {
    res.render('room/joinRoom')
}

roomController.renderJoinedRoom = (req, res) => {
    res.send('It works')
    console.log(req.body)
}

module.exports = roomController;
