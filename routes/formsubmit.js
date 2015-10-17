var express = require('express');
var router = express.Router();
var request = require('request');


router.post("/", function (req, res, next) {
    var postData = {
        json: {
            username: req.body.name,
            text: getSlackMessage(req)
        }
    };

    function getSlackMessage(req) {
        return "*Subject:* " + req.body.subject + "\n" + "*Message:* " + req.body.message + "\n\n *To Respond, use Email:* " + req.body.email;
    }

    console.log(JSON.stringify(postData));
    request.post(
        "https://hooks.slack.com/services/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", postData,
        function (SErr, SRes, SBody) {
            if (!SErr && SRes.statusCode == 200) {
                res.sendStatus(200);
            }
            else {
                res.sendStatus(SRes.statusCode);
            }
        });


});

module.exports = router;
