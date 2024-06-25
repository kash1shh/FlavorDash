const mongoose = require('mongoose');
const mongoURI ="mongodb+srv://Flavordash:Twenty204.@cluster0.b2pzsva.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const mongoDB = async ()=>{
    await mongoose.connect(mongoURI, {useNewUrlParser: true }, async(err, result)=>{
        if(err) console.log("error---", err)
            else{
                console.log("connected successfully");
        }
    });    
}

module.exports = mongoDB;

 