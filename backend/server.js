const  express = require('express');
const mongoose = require('mongoose');
const ContactNames = require('./model');
const cors = require('cors')
const app = express();


app.use(cors())

// middleware
app.use(express.json())
// Connect mongoose 

mongoose.connect('mongodb+srv://prasanth:12345@cluster0.rdzxq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useUnifiedTopology:true,useNewUrlParser:true}).then(()=>{
    console.log('DB connected successfully')
}).catch(err => console.log(err))



// app.get('/',(req, res) => {

//     res.send('hello world prasanth');
// })
//------------------


// post (create)

app.post('/addData',async (req,res)=>{
        const {firstName, lastName,salary,checkbox} = req.body;
        try{
                const newData = ContactNames({firstName, lastName,salary,checkbox});

               await newData.save();
                return res.json(await ContactNames.find())
        }
        catch(err){console.log(err.message)};
})

// get (READ) 

app.get('/getData',async (req,res)=>{
 
    try{
            const allData = await ContactNames.find();
            return res.json(allData)
    }
    catch(err){console.log(err.message)};
})


// path params () ----single value ---id

app.get('/getData/:id',async (req,res)=>{
 
    try{

            const Data = await ContactNames.findById(req.params.id);
            return res.json(Data)
    }
    catch(err){console.log(err.message)};
}) 


// delete  

app.delete('/deleteData/:id',async (req,res)=>{
 
    try{

         await ContactNames.findByIdAndDelete(req.params.id);
            return res.json(await ContactNames.find())
    }
    catch(err){console.log(err.message)};
})

//put (update)  

app.put('/updateData/:id',async (req,res)=>{
   
    try{
        const {firstName, lastName,salary,checkbox} = req.body;
           const id = req.params.id;
           const options = {new: true}

       const  result = await ContactNames.findByIdAndUpdate(id,{firstName, lastName,salary,checkbox},options);
          res.json(result)
    }
    catch(err){console.log(err.message)};
})




app.listen(3002,()=>console.log('Server running...'))