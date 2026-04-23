import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "studentDB";

let db, students;

// Connect DB once
async function connectDB() {
  await client.connect();
  db = client.db(dbName);
  students = db.collection("students");
  console.log("MongoDB Connected");
}
connectDB();

// CREATE
app.post("/students", async (req, res) => {
  const result = await students.insertOne(req.body);
  res.send(result);
});

// READ
app.get("/students", async (req, res) => {
  const data = await students.find().toArray();
  res.send(data);
});

// UPDATE
app.put("/students/:id", async (req, res) => {
  const result = await students.updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.send(result);
});

// DELETE
app.delete("/students/:id", async (req, res) => {
  const result = await students.deleteOne({
    _id: new ObjectId(req.params.id),
  });
  res.send(result);
});

app.listen(3000, () => console.log("Server running on port 3000"));