const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'studentDB';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Use connect method to connect to the Server
client.connect((err) => {
    assert.equal(null, err);
    console.log("Connected to database server successfully");

    const db = client.db(dbName);

    insertDocuments(db, () => {
        findDocuments(db, () => {
            client.close()
        })
    })
});

const insertDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('students')
    // Insert some documents
    collection.insertMany(
        [
            {
                _id: 1,
                name: 'Prathamesh',
                marks: 94.44
            },
            {
                _id: 2,
                name: 'Kavya',
                marks: 80.44
            },
            {
                _id: 3,
                name: 'Sai',
                marks: 70.44
            }
        ], (err, result) => {
            assert.equal(err, null);
            assert.equal(3, result.result.n);
            assert.equal(3, result.ops.length);
            console.log("Inserted 3 documents into the collection");
            callback(result);
        }
    )
}

const findDocuments = (db, callback) => {
    // Get the documents collection
    const collection = db.collection('students');
    // Find some documents
    collection.find({}).toArray(function (err, fruits) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits)
        callback(fruits);
    });
}
