import { MongoClient, ServerApiVersion } from "mongodb";

// Retrieve the MongoDB URI from environment variables
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("MongoDB URI is not defined");
}

// Create a new MongoClient instance with the provided URI
const client = new MongoClient(MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const connectDB = async () => {
  try {
    console.log("MONGO_URI:", MONGO_URI);

    // Connect to MongoDB
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process with failure
  } finally {
    // You might want to keep this open for continuous use
    // await client.close();
  }
};

export default connectDB;
