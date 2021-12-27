const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3003
const app = express();
const mongoose = require('mongoose')
const corsOptions = {
    origin: "http://localhost:8081"
  };
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) =>{
    res.send({ message: "Welcome to bezkoder application." })
})


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');


  const kittySchema = new mongoose.Schema({
    name: String
  });
  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };
  const Kitten = mongoose.model('Kitten', kittySchema);
  const silence = new Kitten({ name: 'Silence' });
  console.log(silence.name); 
  const fluffy = new Kitten({ name: 'fluffy' });
  
  fluffy.speak();
  const kittens = await Kitten.find();
console.log(kittens);
const looking = await Kitten.find({ name: /^Sil/ });
console.log(looking)
}

app.listen(port, () => {
    console.log("bruh")
})