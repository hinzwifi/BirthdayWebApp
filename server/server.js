const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3003
const app = express();
const mongoose = require('mongoose')
const corsOptions = {
    origin: "http://localhost:3000"
  };

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



async function main() {
  await mongoose.connect('mongodb://localhost:27017/bday');
  const bdaySchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    birthdate: {
        type: String,
        required: true
    },
   
  }, { timestamps: true})
  const Birthday = mongoose.model('birthday', bdaySchema);
  const celebrant = new Birthday({ name: 'Sheesh' , birthdate: '2018-07-22'});

//   Birthday.deleteMany( function (err) {
//     if (err) return handleError(err);
//     // deleted at most one tank document
//   });
 

    await celebrant.save();
  const kittens = await Birthday.find();
  console.log(kittens);


}

main().catch(err => console.log(err));


app.listen(port, () => {
    
})