const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://balazs21mate:eKEEvH91NLLjK0Bs@cluster0.nsw5uto.mongodb.net/";


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