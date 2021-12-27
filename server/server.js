const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3003
const app = express();
const mongoose = require('mongoose')
const corsOptions = {
    origin: "http://localhost:3000"
  };
const Births = require('../server/models/tutorial.model')(mongoose)
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/bruh/", (req,res)=>{
  
   Births.find({}).exec(function(err,books){
     if(err){
       res.send('error has occured')
     }
     else{
       
       res.send(books)
      }
   })
  
})


app.post("/bruh/", async(req,res) =>{
  const newBDAY = new Births({
   
    name: req.body.name,
    birthdate: req.body.birthdate,
    
 })

 try{
     await newBDAY.save();
     res.json(newBDAY)
     
 }
 catch(err){
    res.status(400).json({message:err})
 }

})

app.get("/bruh/:name", (req,res)=>{
  
  Births.find({name: req.params.name}).exec(function(err,books){
    if(err){
      res.send('error has occured')
    }
    else{
      
      res.send(books)
     }
  })
 
})


// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/bday');
//   const bdaySchema = new mongoose.Schema({
    
//     name: {
//         type: String,
//         required: true
//     },
//     birthdate: {
//         type: String,
//         required: true
//     },
   
//   }, { timestamps: true})
//   const Birthday = mongoose.model('birthday', bdaySchema);
//   const celebrant = new Birthday({ name: 'Sheesh' , birthdate: '2018-07-22'});

// //   Birthday.deleteMany( function (err) {
// //     if (err) return handleError(err);
// //     // deleted at most one tank document
// //   });
 

//     await celebrant.save();
//   const kittens = await Birthday.find();
//   console.log(kittens);


// }

const db = require("./config/db.config");
mongoose.connect(db.url);



app.listen(port, () => {
    
})