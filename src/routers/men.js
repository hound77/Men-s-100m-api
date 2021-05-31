
const express = require ('express');
const router = new express.Router();
const MensRanking = require('../models/mens');


router.post("/mens", async(req, res) =>{
    try{
            const addingMensRecords = new MensRanking (req.body)
            console.log(req.body);
           const insertMens= addingMensRecords.save();
           res.send(insertMens);
    }catch(e){
            res.status(400).send(e);
    }
})

router.get("/mens", async(req, res) =>{
    try{
           
           const getmens= await MensRanking.find({}).sort({"ranking":1});
           res.send(getmens);
    }catch(e){
            res.status(400).send(e);
    }
})


router.get("/men/:id", async(req, res) =>{
    try{
           const _id = req.params.id ;
           const getmen= await MensRanking.findById({_id:_id});
           res.send(getmen);
    }catch(e){
            res.status(400).send(e);
    }
})

router.patch("/men/:id", async(req, res) =>{
    try{
           const _id = req.params.id ;
           const patchmen= await MensRanking.findByIdAndUpdate(_id,req.body,{
               new:true
           });
           res.send(patchmen);
    }catch(e){
            res.status(500).send(e);
    }
})

router.delete("/men/:id", async(req, res) =>{
    try{
           const _id = req.params.id ;
           const delmen= await MensRanking.findByIdAndDelete(_id,);
           res.send(delmen);
    }catch(e){
            res.status(500).send(e);
    }
})

module.exports =router;