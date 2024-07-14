const MongoClient = require("mongodb").MongoClient;
const url = "";

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
