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
// app.delete("/bruh/:name", async(req,res) =>{
 

//  try{
//      const abortion = await Births.deleteMany({name: req.params.name});
//      res.json(abortion)
     
//  }
//  catch(err){
//     res.status(400).json({message:err})
//  }

// })


app.delete("/bruh/:id" , async(req,res) =>{
  
 try{
  const abortion = await Births.deleteMany({_id: req.params.id });
  res.json(abortion)
  
}
catch(err){
 res.status(400).json({message:err})
}
 
 
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

app.get("/bruh/:id", async (req,res)=>{
  try{
    const abortion = await Births.find({_id: req.params.id})
    res.json(abortion)
    
  }
  catch(err){
    res.status(400).json({message:err})
   }
 
})

app.put("/bruh/:id", async (req,res) =>{

 try{
   const update = req.body
  const user_id = req.params.id
  if(!req.body){
   res.send("eat shit")
  }
  else{
  const abortion = await Births.findByIdAndUpdate(user_id , update, {new:true})
  res.json(abortion)}
 }
 catch(err){
    res.status(400).json({message:err})
 }

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
const e = require("express");
mongoose.connect(db.url);



app.listen(port, () => {
    
})