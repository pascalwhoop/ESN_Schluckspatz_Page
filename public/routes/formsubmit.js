var express = require('express');
var router = express.Router();
var repo = require('../local_modules/mongoConnector');

/* GET home page. */
router.get('/filter/:cityPlaceId', function (req, res, next) {
    repo.getMachinesByCityPlaceId(req.params.cityPlaceId, function(results){
        res.send(results);
    });
});

router.get('/:id', function(req,res,next){
    repo.getMachine(req.params.id, function(err, result){
        res.send(result);
    });
});

router.post("/:machineId/levels/:brandId", function(req,res,next){
    //TODO move to machine engine
    repo.updateMachineBrandLevel(req.params.machineId, req.params.brandId, req.body.level, function(err, value){
        console.log(value);
        res.send();
    })
});

router.post("/", function(req, res, next){
    if(req.body.command == "fillall"){
        machineFillHelper.fillAllMachines();
        res.send("success");
    }
});


//TODO move to machine engine
router.post("/:machineId/webpurchase/:brandId", function(req, res, next){
    var mId = req.params.machineId;
    var bId = req.params.brandId;

    machineEngine.handleWebPurchaseRequest(mId, bId,
        //success callback
        function () {
            setTimeout(function(result){
                res.status(200).send();
            },3000);
        },
        //error callback
        function (err) {
            res.status(500).send(err);
        });


});

module.exports = router;
