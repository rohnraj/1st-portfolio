const UserData=require('./models/protfolioModel')

let dummyData=[
    {
        name:'Richa',
        email:'richa21@gmail.com',
        message:"let's connect"
    },
    {
        name:'Harman',
        email:'harman2002@gmail.com',
        message:"we have new opening"
    },
    {
        name:'Ajit',
        email:'ajit27@gmail.com',
    }
]

async function dummySeeding(){
    try{

        await UserData.create(dummyData)
        console.log('dummy data added successfully')
    }
    catch(e){
        console.log(`dummy data not added error - ${e}`);
    }
}

module.exports=dummySeeding