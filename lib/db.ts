// // lib/mongodb.js
import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';
const MONGO_URI = "mongodb+srv://acazivkovic012_db_user:eMV3iwtzHZ12xFdU@cluster0.w7ymw89.mongodb.net/mydb"






async function dbConnect() {
  if (!MONGO_URI) {
    throw new Error('Please define the MONGO_URI environment variable');
  }
  await mongoose.connect(MONGO_URI);
  return mongoose;
}


export default dbConnect;


// const client = new MongoClient("mongodb+srv://acazivkovic012_db_user:eMV3iwtzHZ12xFdU@cluster0.w7ymw89.mongodb.net/mydb");

// export async function dbConnect() {
//   // 'use cache'
//   try {
//     await client.connect();
//     console.log("You successfully connected to MongoDB!");
//     return client;
//   } catch (err) {
//     console.dir(err);
//   }
// }

// export default dbConnect;


// // Call this only when your application terminates
// export async function disconnectFromMongoDB() {
//   await client.close();
// }