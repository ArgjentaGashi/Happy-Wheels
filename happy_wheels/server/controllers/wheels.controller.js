const Wheel = require('../models/wheels.model');

module.exports = {
    getWheels: (req, res) => {
        Wheel.find({})
    .then((wheels) => {
        res.json(wheels);
    })
    .catch(err=>{console.log(`Error in find all`, err);
    res.status(400).json({message:"Something went wrong in find all wheels", error: err});
    });
    },

    getWheelById: (req, res) => {
        Wheel.findOne({_id:req.params.id})
    .then((wheel) => {
        res.json(wheel);
    })
    .catch(err=>{
        console.log(`Error in find wheel`, err);
        res.status(400).json({message:"Something went wrong in find wheel", error: err});
    });
    },

    createWheel: (req, res) => {
        Wheel.create(req.body)
    .then((newWheel) => {
        res.status(201).json(newWheel);
    })
    .catch(err=>{
        console.log(`Error in create`, err);
        res.status(400).json({message:"Something went wrong in create wheel", errors: err.errors});
    });
    },

    updateWheel: (req, res) => {
        Wheel.findOneAndUpdate({_id:req.params.id}, req.body,{new: true,  runValidators: true})
    .then((wheel) => {
        res.status(201).json(wheel);
    })
    .catch(err=>{console.log(`Error in update wheel`, err);
    res.status(400).json({message:"Something went wrong in update wheel", error: err});
    });
    },

    deleteWheel: (req, res) => {
        Wheel.deleteOne({_id:req.params.id})
    .then((wheel) => {
        res.json(wheel);
    })
    .catch(err=>{console.log(`Error in delete wheel`, err);
    res.status(400).json({message:"Something went wrong in delete wheel", error: err});
    });
    },

}; 