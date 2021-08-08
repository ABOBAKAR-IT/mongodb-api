
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
                    

 
    app.post('/add-student',(req,res)=>{
        const studentdata= new student({
        id:req.body.id,
        name:req.body.name,
        class:req.body.class
         })
         studentdata.save()
         .then(data=>res.send(data))
         .catch(err=>res.send(err));
         })
                  
    
    
 
                    
         app.get('/find-all',(req,res)=>{
            student.find()
            .then(data=>res.send(data))
            .catch(err=>res.send(err));
        })
    
  
        app.get('/find-onebyid',(req,res)=>{
            student.find({id:req.body.id})
            .then(data=>res.send(data))
            .catch(err=>res.send(err));
        })
                                        
    
                
    app.post('/update',(req,res)=>{
        student.findOneAndUpdate({id:req.body.id},req.body)
            .then(()=>res.send("data is update"))
            .catch(err=>res.send(err));
        })
    
                

    app.delete('/delete',(req,res)=>{
        student.findOneAndDelete({id:req.body.id})
        .then(()=>res.send("data is delete"))
        .catch(err=>res.send(err));
    })

                                                             
                