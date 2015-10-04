var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;


var DB_URL = "mongodb://localhost:27017";
var db;
var schluckspatz;



//bootstrap DB
MongoClient.connect(DB_URL + "/esn", function (err, _db) {
    db = _db;
    schluckspatz = db.collection('schluckspatzform');
});

function saveFormSubmit(data) {
    schluckspatz.save(data);
}




module.exports = {
    saveFormSubmit: saveFormSubmit
};