const aboutController = {};

aboutController.render = (req, res) => {
  res.render("about/aboutView");
};

module.exports = aboutController;
