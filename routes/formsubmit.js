var express = require('express');
var router = express.Router();
var repo = require('../local_modules/mongoConnector');


router.post("/", function(req,res,next){
    //TODO move to machine engine
    repo.saveFormSubmit(req.body);
    res.send();
});

module.exports = router;
