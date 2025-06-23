// seed.js

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}


const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
    initDB();
  })
  .catch((err) => {
    console.log("❌ MongoDB connection error:", err);
  });
console.log("Connecting to:", process.env.ATLASDB_URL);

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
      ...obj,
      owner: "685941027460d347ad94113a", // ✅ Ensure this user exists in Atlas
    }));
    await Listing.insertMany(initData.data);
    console.log("🌱 Sample listings added successfully!");
    mongoose.connection.close(); // close the connection after seeding
  } catch (err) {
    console.log("❌ Error inserting data:", err);
  }
};
