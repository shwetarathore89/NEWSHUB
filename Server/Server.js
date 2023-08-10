const express = require("express")
const collection = require("./mongo")
const jwt = require("jsonwebtoken")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


const secretKey = 'mysecretkey';



app.get("/",cors(),(req,res)=>{
    response.json({
       message:"a sample api"
   })
})


app.post("/",async(req,res)=>{
    const { email, password } = req.body;
    jwt.sign({ email }, secretKey, { expiresIn: '300s' }, (err, token) => {
        if (err) {
            res.status(500).json({ error: 'Failed to generate token' });
        } else {
            res.json({ token });
        }
    });
    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(8001,()=>{
    console.log("port connected");
})



