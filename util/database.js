const mongodb=require('mongodb')
const mongoClient=mongodb.MongoClient;
//connection
const mongoConnection=(cb)=>{
    mongoClient.connect('mongodb+srv://TD17765:Thacchan123@nodetd.f3nnv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
         useUnifiedTopology: true 
    })
    .then((clients)=>{cb(clients)})
    .catch((err)=>{console.log(err)})
}
module.exports=mongoConnection;

