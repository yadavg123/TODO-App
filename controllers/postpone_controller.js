// REQUIRING MODELS SCHEMA
const Task=require('../models/task');

// MAKING postpone ACTION AVAILABLE OUTSIDE
module.exports.postpone=function(req,res){
    console.log(req.query);
    Task.findOne({_id:req.query.id},function(err,user){
        user.date=req.query.date;
        user.save(function(err){
            if(err){
                console.log("ERROR IN POSTPONING!");
            }
        });
    });
    
    // REDIRECTING TO HOME PAGE
    return res.redirect('/');
};