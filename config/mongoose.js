// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Polling_System');

// // ----->this the code for using the cloud mongodb atlas ------------------------------------------------------- 
// // const url='mongodb+srv://gurjashapdeep1:kPKjUaqgs0b1ApUZ@cluster0.whteafy.mongodb.net/?retryWrites=true&w=majority';
// const connectParams={
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }



// // mongoose
// //     .connect(url,connectParams)
// //     .then(()=>{
// //         console.info("yeah successfully connected to mongodb")
// //     })
// //     .catch((err)=>{
// //         console.log('error in mongodb',err);
// //     })

// // ------------------------------------------------------------------------------------

// // ----->this the code for manually using the mongodb of local system

// const db = mongoose.connection

// db.on('error', console.error.bind(console, 'error connecting to database'));

// db.once('open', ()=>{
//     console.log("successfully connected to database : mongoDB");
// });

// module.exports = mongoose;

const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/GurjashanDataBase")
mongoose.connect("mongodb+srv://gurjashandeepsingh1:KwANZpC918qmEDu2@cluster0.bfexgjw.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log(`Database is successfully connected with the server`);
})
.catch((error) => {
    console.log(`Sorry, there is been an issue in connecting database to the server`);
})