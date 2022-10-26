const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect("mongodb://localhost:27017/tutorial", { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", () => {
  console.log("Connection error");
});

db.once("open", () => {
  console.log("Connected successfully");
});

const kelasSchema = new Schema({
  judul: String,
  deskripsi: String,
  tglPosting: {
    type: Date,
    default: Date.now,
  },
});

const Kelas = mongoose.model("Kelas", kelasSchema);

// Cara pertama
// const nodejs = new Kelas({
//   judul: "Belajar Mongodb dan Mongoose",
//   deskripsi: "Belajar membuat aplikasi sederhana menggunakan Mongodb dan Mongoose",
// });

// nodejs.save((err, data) => {
//   if (err) console.log(err);

//   console.log(data);
//   console.log("Succesfully created Kelas");
// });

// Cara kedua
// const express = new Kelas();
// express.judul = "ExpressJS";
// express.deskripsi = "Belajar front-end menggunakan framework ExpressJS";

// express.save((err, data) => {
//   if (err) console.log(err);

//   console.log(data);
//   console.log("Succesfully created Kelas");
// });

// Cara ketiga
// Kelas.create(
//   {
//     judul: "Belajar VueJS",
//     deskripsi: "Belajar front-end menggunakan framework VueJS",
//   },
//   (err, data) => {
//     if (err) console.log(err);

//     console.log(data);
//     console.log("Succesfully created Kelas");
//   }
// );

// Penggunaan find
// Kelas.find({ judul: /JS/ }, "judul deskripsi", (err, data) => {
//   if (err) console.log(err);

//   console.log(data);
// });

// Pengunaan findByID
// Kelas.findById("635792656ba4015e12cf2da8", (err, data) => {
//   if (err) console.log(err);

//   console.log(data);
// });

const query = Kelas.find({ judul: "ExpressJS" });
query.select("judul tglPosting");
query.exec((err, data) => {
  if (err) console.log(err);

  console.log(data);
});
