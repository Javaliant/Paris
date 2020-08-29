const MongoClient = require('mongodb').MongoClient
const url = 'your url'
const database = 'your database name'

// Use connect to connect to your server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully")

    const db = client.db(database);
    client.close();
})