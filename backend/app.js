const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const dummySeeding=require('./seed')
const app=express()
const routes=require('./apis/userDataRouts')

mongoose.connect('mongodb+srv://rohnraj027:LNQoL3dmeb26R4Xi@cluster0.nq7o2.mongodb.net/portfoliodata?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('Connected!'))
.catch((e) => console.log(`Server not connected to DB: ${e}`));

// dummySeeding()
app.use(cors(
    {
        origin:['https://1st-portfolio-pjtu.vercel.app'],
        method:["POST","GET"],
        credentials:true
    }
))
app.use(express.json());
app.use(routes)


const PORT=8080
app.listen(PORT, ()=>{
    console.log(`server is running on PORT - ${PORT}`);
})