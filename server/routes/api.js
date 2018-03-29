const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/TourOfHeroes', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};
// const connection = (closure) => {
//     return MongoClient.connect('mongodb://PhamNghiep:thaiduonghe1234@ds014118.mlab.com:14118/mdb', (err, db) => {
//         if (err) return console.log(err);

//         closure(db);
//     });
// };

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users

router.get('/api/heroes', (req, res) => {
    connection((db) => {
        var dbbase= db.db("mdb");
        dbbase.collection("heroes").find({}).toArray(function(err, result){
            if(err) throw err;
            response.data = result;
            res.json(response);
            db.close();
        });
    });
});

router.get('/detail/:id', (req, res) => {
    connection((db) => {
        var dbbase= db.db("mdb");
        var id = req.params.id;
        //console.log(query);
        var query = {id};
        console.log(query);
        dbbase.collection("heroes").find(query).toArray(function(err, result){
            if(err) throw err;
            response.data = result;
            console.log(result);
            res.json(response);
            db.close();
        });
    });
});

router.post('/addHero', function(req, res){
    connection((db)=>{
        var dbbase = db.db("mdb");
        var hero = req.data;
        console.log(hero);
        var myobj = {hero};
        dbbase.collection("heroes").insertOne(myobj, function(err, res){
            if(err) throw err;
            console.log("1 document inserted");
            db.close();
        })
    })
})
module.exports = router;