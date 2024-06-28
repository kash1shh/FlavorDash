const mongoose = require('mongoose');
const mongoURI ="mongodb+srv://Flavordash:Twenty204.@cluster0.b2pzsva.mongodb.net/flavordash_mern?retryWrites=true&w=majority&appName=Cluster0"

const mongoDB = async ()=>{
    await mongoose.connect(mongoURI, {useNewUrlParser: true }, async(err, result)=>{
        if(err) console.log("error---", err)
            else{
                console.log("connected successfully");
                const fetched_data = await mongoose.connection.db.collection("flavordash_data");
                fetched_data.find({}).toArray(function(err, data){
                    if(err) console.log(err);
                    else console.log(data);
                })
        }
    });    
}

module.exports = mongoDB;

 