var express = require('express');
var router = express.Router();
var applicant = require('../models/applicant.js')

/* SAVE DATA*/
router.post('/register', function(req, res) {
  let constructor = new applicant(req.body);
  constructor.save()
      .then(constructor => {
        res.status(200).json({'constructor': 'Added successfully'});
      });
  /* applicant.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  }); */
});

/* GET ALL DATA*/
router.get('/view', function(req, res, next) {
  applicant.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
}); 

/* GET SINGLE DATA BY ID */
router.get('/view/:id', function(req, res, next) {
  applicant.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE DATA */
router.put('/update/:id', function(req, res, next) {
  applicant.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE DATA */
router.delete('/delete/:id', function(req, res, next) {
  applicant.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//-----------------------------------      My Codes     -----------------------------------\\
/* GET ALL DATA BY OF EACH cTypes */
router.get('/cTypes', function(req, res, next) {
  let type = req.query.cType;
  applicant.find({cType: type }, function (err, post) {
    if (err) return next(err);
    res.json(post);
    console.log(type + ' categorised');
  });
});

/* GET ALL DATA BY OF EACH DISTRIC */
router.get('/districs', function(req, res, next) {
  let dis = req.query.distric;
  applicant.find({distric: dis }, function (err, post) {
    if (err) return next(err);
    res.json(post);
    console.log(dis + ' categorised');
  });
});

/* GET ALL DATA BY OF EACH GENDER */
router.get('/genders', function(req, res, next) {
  let gen = req.query.gender;
  applicant.find({gender: gen }, function (err, post) {
    if (err) return next(err);
    res.json(post);
    console.log(gen + ' categorised');
  });
});

/* GET ALL DATA BY SEARCHING fName */
router.get('/searchByName', function(req, res, next) {
  let name = req.query.fName;
  applicant.find({fName: name }, function (err, post) {
    if (err) return next(err);
    res.json(post);
    console.log(name + ' searched');
  });
});


/* GET ALL DATA BY SEARCHING city */
router.get('/searchByCity', function(req, res, next) {
  let town = req.query.city;
  applicant.find({city: town }, function (err, post) {
    if (err) return next(err);
    res.json(post);
    console.log(town + ' searched');
  });
});

//MyModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {});

module.exports = router;
