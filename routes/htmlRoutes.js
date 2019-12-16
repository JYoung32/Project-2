var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  //load the table to display all freelancers
  app.get("/table", function(req, res) {
    //go to sql, get list of freelancers
    db.freelancer.findAll({}).then(function(freelancers) {
      res.render("table", {
        freelancers: freelancers
      });
    });
  });

  //load the form when become-a-freelancer button is clicked
  app.get("/form", function(req, res) {
    res.render("form");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
