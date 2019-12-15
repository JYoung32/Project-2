var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/freelancers", function (req, res) {
    db.freelancer.findAll({}).then(function (freelancers) {
      res.json(freelancers);
      console.log(res.json(freelancers));
    });
  });

  app.get("/api/freelancers/position/:position", function (req, res) {
    var searchPosition = req.params.position;
    db.freelancer.findAll({
      where: {
        position: searchPosition
      }
    }).then(function (freelancers) {
      res.json(freelancers);
    });
  });

  app.get("/api/freelancers/location/:location", function (req, res) {
    var searchLocation = req.params.location;
    db.freelancer.findAll({
      where: {
        location: searchLocation
      }
    }).then(function (freelancers) {
      res.json(freelancers);
    });
  });

  //Create a new freelancer
  // app.post("/api/freelancers", function (req, res) 
  // {
  //   console.log(req.body);
  // })

  // Create a new example
  app.post("/api/freelancers", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
