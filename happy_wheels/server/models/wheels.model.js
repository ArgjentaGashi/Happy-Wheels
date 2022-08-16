const mongoose = require('mongoose');

const WheelSchema = mongoose.Schema(
    {
        name:  {
            type: String,
            required: [true, "A vehicle's name is required"],
            maxlength: [20, "The name should be at least 10 characters!"],
        },
        type: {
            type: String,
            enum: [
                'Car',
                'Bicycle',
                'Electric Scooter'
            ],
        },
        picture: {
            type: String,
            required: [true, "Vehicle picture is required"],
        },
        description: {
            type: String,
            required: [true, "Vehicle description is required"],
        },
        isKidLegal: {
            type: Boolean,
            default: false,
        },
        releaseYear: {
            type:Number,
            min: [2002, "Too old"],
        },
        maxSpeed: {
            type: Number,
            max: [180, "The max speed allowed is 180km/h"],
        },
        fuelType: {
            type: String,
            enum: [
                'Oil',
                'Gasoline',
                'Hybrid',
                'Free',
            ],
        }
        
    }, 
    {
    timestamps: true,
}
);

const Wheel = mongoose.model('wheel', WheelSchema);
module.exports = Wheel;