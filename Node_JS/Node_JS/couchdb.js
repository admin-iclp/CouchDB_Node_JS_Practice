var cradle = require('cradle');

var account = {
    username: "admin",
    password: "qwerty123"
};

var conn = new (cradle.Connection)({
    auth: account
});

var db = conn.database("steven_practice");
var newDB = conn.database("steven_practice_2");

//newDB.exists(function (err, exists) {
//    if (err) {
//        console.log('error', err);
//    } else if (exists) {
//        console.log('database already exists.');
//    } else {
//        console.log('database does not exists.');
        
//        newDB.create(function (error, data) {
//            if (error) {
//                console.log('error', error);
//            } else {
//                console.log(data);
//                console.log("database created successful");
//            }
//        });
//    }
//});

//db.get('test 1', function (error, doc) {
//    if (error) {
//        console.log(error);
//    } else {
//        console.log(doc);
//    }
//});

//db.get('test', function () {
//    db.save('test', {
//        name: 'Steven Test 2'
//    }, function (error, data) {
//        if (error) {
//            console.log(error);
//        } else {
//            console.log(data);
//        }
//    });
//});


//db.get('test 1', function (error, doc) {
//    if (error) {
//        console.log(error);
//    } else {
//        db.remove(doc.id, doc.rev, function (err, res) {
//            if(err) {
//                console.log(err);
//            } else {
//                console.log(res);
//            }
//        });
//    }
    
//});

//db.save('test', {
//    views: {
//        byUsername: {
//            map: "function (doc) { if (doc.resource === 'User') { emit(doc.username, doc) } }"
//        }
//    }
//});

//db.save('test 1', {
//    name: 'Steven Test',
//    description: "willy"
//}, function (err, res) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log(res);
//    }
//});

//db.save('test', {
//    name: 'Steven Test'
//}, function (err) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log("save document successful");
//    }
//});

//newDB.destroy(function (error, res) {
//    if(error) {
//        console.log(error);
//    } else {
//        console.log(res);
//    }
//});



