const { MongoClient } = require('mongodb');

async function main() {
    const client = await MongoClient.connect('mongodb://localhost:27017/');
    const db = client.db('MyDb');
    const collection = db.collection('Persons');

    try {
        await collection.insertMany([
            {id: 1, firstName: 'June Sarah', lastName: 'Quiambao'},
            {id: 2, firstName: 'Rosemi', lastName: 'Lovelock'},
            {id: 3, firstName: 'Elira', lastName: 'Pendora'}
        ]);
    } catch (err) {
        console.error(err);
} finally {
    client.close();
} 
}

main();