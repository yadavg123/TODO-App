// REQUIRING MODELS SCHEMA
const Task=require('../models/task');

// MAKING delete ACTION AVAILABLE OUTSIDE
module.exports.delete=function(req,res){
    const a=req.body;
    for(var prop in a){
        Task.findByIdAndDelete(a[prop], function(err){
            if(err){
                console.log("error in deleting an object from db");
                return;
            }
        });
    }

    // REDIRECTING TO HOME PAGE
    return res.redirect('/');
};