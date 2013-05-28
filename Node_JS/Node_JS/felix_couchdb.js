var couchdb = require('felix-couchdb');
var client = couchdb.createClient(5984, '127.0.0.1', "admin", "qwerty123");
var db = client.db('steven_practice');
var newDB = client.db("steven_practice_3");

//client.request({
//    path: '/_uuids',
//    query: { count: 5 },
//    full: true
//}, function (error, data) {
//    if(error) {
//        console.log(error);
//    } else {
//        console.log(data);
//    }
//});

//client.allDbs(function (error, data) {
//    if(error) {
//        console.log(error);
//    } else {
//        console.log(data);
//    }
//});

//newDB.exists(function (error, data) {
//    if (error) {
//        console.log(error);
//    } else {
//        if (data) {
//            console.log("database already exists");
//        } else {
//            newDB.create(function (err) {
//                if (err) {
//                    console.log(err);
//                } else {
//                    console.log("database created successful");
//                }
//          });
//        }
//    }
//});

//newDB.saveDoc('my-doc', { awesome: 'couch fun 1' }, function (error, data) {
//    if (error) {
//        console.log(error);
//    } else {
//        if (data.ok) {
//            console.log("save my-doc successful");
//        } else {
//            console.log("save my-doc failed");
//        }
//    }
//});

//newDB.getDoc('my-doc', function (err, doc) {
//    doc.awesome = "couch fun 2";
//    newDB.saveDoc('my-doc', doc, function (error, data) {
//        if (error) {
//            console.log(error);
//        } else {
//            console.log(data);
//        }
//    });
//});

//newDB.getDoc('my-doc', function (error, doc) {
//    if (error) {
//        console.log(error);
//    } else {
//        console.log(doc);
//    }
//});

//newDB.remove(function(error, data) {
//    if (error) {
//        console.log(error);
//    } else {
//        console.log(data);
//    }
//});





