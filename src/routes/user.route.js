const express = require('express')
const userRoute = express.Router()

let User = require('../models/user')

userRoute.route('/post').post((req,res)=>{
    let user = new User(req.body);
    user.save().then(user => {
        res.status(200).json({'status':'success','msg':'new user added to base'});
    }).catch(err => {
        res.status(400).send({'status':'fail','msg':'error when try to add a new user'})
    });
});


userRoute.route('/get').get((req,res)=>{
    User.find().then(users=>{
        res.status(200).json({'status':'success','users':users})
    }).catch(err=>{
        res.status(400).json({'status':'fail','msg':'fail'})       
    })
})


userRoute.route('/delete/:id').delete((req,res)=>{
    User.findByIdAndRemove({_id: req.params.id}).then(users=>{
        res.status(200).json({'status':'success','msg':"user removed"})
    }).catch(err=>{
        res.status(400).json({'status':'fail','msg':'user still in the base'})       
    })
})


userRoute.route('/put/:id').put((req,res)=>{
    User.findByIdAndUpdate({_id:req.params.id},
        {
         name: req.body.name,
         email: req.body.email,
         password: req.body.password
        }).then(users=>{
            res.status(200).json({'status':'success','msg':"updated user"})
        }).catch(err=>{
            res.status(400).json({'status':'fail','msg':'user still the same '})       
        })
})


module.exports = userRoute;