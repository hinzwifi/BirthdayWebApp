module.exports = mongoose => {
    const Birthday = mongoose.model(
      "birthday",
      mongoose.Schema({
    
        name: {
            type: String,
            required: true
        },
        birthdate: {
            type: String,
            required: true
        },
       
      }, { timestamps: true})
    )
    return Birthday;
  };

