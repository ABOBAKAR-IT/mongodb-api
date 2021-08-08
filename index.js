
    const express=require('express');
    const app=express();
    const mongoose=require('mongoose');
    const student=require('./studentschema');
    app.use(express.json());
    const mongodb='mongodb+srv://abobakar786:rana786@cluster0.ojybe.mongodb.net/school?retryWrites=true&w=majority'
    mongoose.connect(mongodb,{useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=>console.log('mongodb is connected'))
    .catch(err=>console.log(err));
    const port=9000;
    app.listen(port,()=>{
        console.log(`server work on port no ${port}`);
    })
                    

                