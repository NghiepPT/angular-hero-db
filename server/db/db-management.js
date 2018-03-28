var mongoclient  = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/TourOfHeroes";

mongoclient.connect(url, function(err, db){
    if(err) throw err;
    var myobj=[
        { id: '11', name: 'Mr. Nice' },
        { id: '12', name: 'Narco' },
        { id: '13', name: 'Bombasto' },
        { id: '14', name: 'Celeritas' },
        { id: '15', name: 'Magneta' },
        { id: '16', name: 'RubberMan' },
        { id: '17', name: 'Dynama' },
        { id: '18', name: 'Dr IQ' },
        { id: '19', name: 'Magma' },
        { id: '20', name: 'Tornado' }
    ];
    var dbbase= db.db("TourOfHerroes");
    dbbase.createCollection("heroes", function(err, res){
        if(err) throw err;
        console.log("collection created!");
    });
    dbbase.collection("heroes").find({}).toArray(function(err, result){
        if(err) throw err;
        console.log(result);
        db.close();
    });
});