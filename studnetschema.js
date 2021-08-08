

    const mongoose=require('mongoose');
    const studentdata=mongoose.Schema;
    const student=new studentdata({
        id:{
            type:Number,
            require:true
           },
        name:{
            type:String,
            require:true
        },
        class:{
            type:String,
            require:true
        }
    },{timestamps:true});
    const studentdat=mongoose.model('studentdat',student);
    module.exports=studentdat;
                    
                    

                