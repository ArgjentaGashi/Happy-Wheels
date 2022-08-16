const mongoose = require("mongoose")

const mongoURI = 'mongodb://127.0.0.1:27017/wheels';
const dbName = 'wheels';

mongoose
.connect(mongoURI+dbName)
.then(()=>console.log(`Connected to the ${dbName} db`))
.catch((err)=> console.log(`Error in connection ti db`, err));


