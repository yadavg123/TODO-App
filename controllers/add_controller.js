// REQUIRING MODELS SCHEMA
const Task=require('../models/task');

// MAKING add ACTION AVAILABLE OUTSIDE
module.exports.add=function(req,res){
    const s=req.body.duedate;
    Task.create({
        description: req.body.description,
        category:req.body.selectpicker,
        date:req.body.duedate
    },function(err,newTask){
        if(err){
            console.log("error in adding a task");
            return;
        }
        console.log("***", newTask);

        // REDIRECTING TO HOME PAGE
        return res.redirect('/');
    });
};
