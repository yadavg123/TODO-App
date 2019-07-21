// REQUIRING MODELS SCHEMA
const Task=require('../models/task');

// MAKING home ACTION AVAILABLE OUTSIDE
module.exports.home=function(req,res){
    Task.find({},function(err,c){
        if(err){
            console.log("ERROR HAI BHAIYA!");
            return;
        }

        // SORTING ON THE BASIS OF DATE
        c.sort(function(a,b){
            var dateA=a.date;
            var dateB=b.date;
            var yA=Number(dateA[0]+dateA[1]+dateA[2]+dateA[3]);
            var yB=Number(dateB[0]+dateB[1]+dateB[2]+dateB[3]);
            var mA=Number(dateA[5]+dateA[6]);
            var mB=Number(dateB[5]+dateB[6]);
            var dA=Number(dateA[8]+dateA[9]);
            var dB=Number(dateB[8]+dateB[9]);
            if(yA<yB){
                return -1;
            }else if(yA==yB){
                if(mA<mB){
                    return -1;
                }else if(mA==mB){
                    if(dA<dB){
                        return -1;
                    }else if(dA==dB){
                        return 0;
                    }else{
                        return 1;
                    }
                }else{
                    return 1;
                }
            }else{
                return 1;
            }
        });

        // RENDERINGH HOME.EJS
        return res.render('home',{arr:c});
    });
};