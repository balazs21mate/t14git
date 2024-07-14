const MongoClient = require("mongodb").MongoClient;
const url = "";


async function MagyarDobogosHelyezesek() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T14");
        const collection = db.collection("Helsinki");

        const result = await collection.find({
            $or: [
                { Helyezes: 1 },
                { Helyezes: 2 },
                { Helyezes: 3 }
            ]
        }, { projection: { _id: 0, VersenySzam: 1 } }).toArray();

        console.log(result);

        client.close();
    } catch (error) {
        console.log(error);
    }
}


MagyarDobogosHelyezesek();
