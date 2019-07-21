// REQUIRING MODELS SCHEMA
const Task=require('../models/task');

// MAKING remove ACTION AVAILABLE OUTSIDE
module.exports.remove=function(req,res){
    console.log(req.query);
    Task.findByIdAndDelete(req.query.id,function(err){
        if(err){
            console.log("ERROR REMOVING A TASK!");
            return;
        }
    });
    
    // REDIRECTING TO HOME PAGE
    return res.redirect('/');
};