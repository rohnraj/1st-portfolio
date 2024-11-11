const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const dummySeeding=require('./seed')
const app=express()
const routes=require('./apis/userDataRouts')

mongoose.connect('mongodb+srv://rohnraj027:1f7rOBZXNYyFzCFV@guests.rj0vl.mongodb.net/portfolioData?retryWrites=true&w=majority&appName=Guests')
.then(() => console.log('Connected!'))
.catch((e) => console.log(`Server not connected to DB: ${e}`));

// dummySeeding()
app.use(cors())
app.use(express.json());
app.use(routes)


const PORT=8080
app.listen(PORT, ()=>{
    console.log(`server is running on PORT - ${PORT}`);
})