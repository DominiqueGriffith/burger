var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/posts", function(req, res) {
    burger.insertOne(["name"], [req.body.name], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
      console.log( res.json({ id: result.insertId }));
    });
  });

  router.put("/api/posts", function(req, res) {
    burger.update(["name"], [req.body.name], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
      console.log( res.json({ id: result.insertId }));
    });
  });
  
//   router.put("/api/cats/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     console.log("condition", condition);
  
//     cat.update(
//       {
//         devou: req.body.sleepy
//       },
//       condition,
//       function(result) {
//         if (result.changedRows === 0) {
//           // If no rows were changed, then the ID must not exist, so 404
//           return res.status(404).end();
//         }
//         res.status(200).end();
  
//       }
//     );
//   });




// Export routes for server.js to use.
module.exports = router;