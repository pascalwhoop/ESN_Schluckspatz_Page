var express = require('express');
var router = express.Router();
var request = require('request');



router.post("/", function(req,res,next){
    var postData = {
        json: {
            name : req.body.name,
            text: "*Subject:* " + req.body.subject + "\n" + "*Message:* " + req.body.message + "\n\n *To Respond, use Email:* " + req.body.email
        }
    };

    console.log(JSON.stringify(postData));

    request.post(
        "https://hooks.slack.com/services/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", postData,
    function(err, res, body){
        if (!err && res.statusCode == 200) {
            console.log(body + " no foo")
        }
        else{
            console.log(err + " foo ");
            console.log(res.body + res.statusCode);
        }
    });


});

module.exports = router;
