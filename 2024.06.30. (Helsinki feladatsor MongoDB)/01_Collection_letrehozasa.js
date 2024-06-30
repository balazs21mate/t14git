const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://balazs21mate:eKEEvH91NLLjK0Bs@cluster0.nsw5uto.mongodb.net/";

async function KollecioLetrehozasa() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T14");

        await db.createCollection("Helsinki");

        console.log("Collection létrehozva!");

        client.close();
    } catch (error) {
        console.log(error);
    }
}

KollecioLetrehozasa();