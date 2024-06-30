const MongoClient = require("mongodb").MongoClient;
const url = "";

async function TornaVagyUszas() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T14");
        const collection = db.collection("Helsinki");

        const feltetel = {
            $or: [{
                Sportag: "torna"
            },
            {
                Sportag: "uszas"
            }]
        }

        const result = await collection.find(feltetel, { projection: { _id: 0, Sportag: 1, VersenySzam: 1 } }).toArray()

        console.log(result);

        client.close();
    } catch (error) {
        console.log(error);
    }
}

TornaVagyUszas();
