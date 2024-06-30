const MongoClient = require("mongodb").MongoClient;
const url = "";


async function EgyeniAranyerem() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T14");
        const collection = db.collection("Helsinki");

        const result = await collection.find({
            $and: [
                { Helyezes: 1 },
                { CsapatMeret: 1 },
            ]
        }, { projection: { _id: 0, Sportag: 1 } }).toArray();

        console.log(result);

        client.close();
    } catch (error) {
        console.log(error);
    }
}


EgyeniAranyerem();
