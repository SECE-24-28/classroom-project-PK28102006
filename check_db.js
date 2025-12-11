const mongoose = require("mongoose");

const run = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/sri-eshwar-backend-1");
        console.log("Successfully connected to React_DB via Mongoose!");
        
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log("Current Collections:", collections.map(c => c.name));
        
        await mongoose.disconnect();
    } catch (e) {
        console.error("Connection failed:", e);
    }
};

run();
