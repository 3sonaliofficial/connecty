const Model = require("../models/userModel");
const router = require("express").Router();

router.post("/add", (req, res) => {
  new Model(req.body)
    .save()
    .then((data) => {
      console.log("user data saved!!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getall", (req, res) => {
  Model.find({})
    .populate("user")
    .then((data) => {
      console.log("user data saved!!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id)
    .then((data) => {
      console.log("user data saved!!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.post("/backendlogin", (req, res) => {
  console.log(req.body);
  let formdata = req.body;
  // promise method
  Model.findOne({ email: formdata.email })
    .then((data) => {
      if (data) {
        if (data.password == formdata.password) {
          console.log("login success");
          res.status(200).json(data);
        } else {
          console.log("password incorrect");
          res.status(300).json({ message: "password incorrect" });
        }
      } else {
        console.log("email not found");
        res.status(300).json({ message: "email not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.put("/update/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      console.log("user data saved!!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((data) => {
      console.log("user data saved!!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;
