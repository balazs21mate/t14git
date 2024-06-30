const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://balazs21mate:eKEEvH91NLLjK0Bs@cluster0.nsw5uto.mongodb.net/";

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