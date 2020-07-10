const homeController = {};

homeController.render = (req, res) => {
  res.render("home/homeView");
};

module.exports = homeController;
