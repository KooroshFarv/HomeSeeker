import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
   {
    owner : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
    },
    location : {
        street : String,
        city : String,
        state : String,
        zipcode : String
    },
    bath : {
        type : Number,
        required : true
    },
    square_feet : {
        type : Number,
        required : true
    },
    amenities: [
        {
            type : String,
            
        }
    ],
    rates : {
       nightly : Number,
       weekley : Number,
       monthly : Number 
    },
    seller_info : {
        name : String,
        email : String,
        photne : Number
    } ,
    images : [
        {
            type : String
        }
    ],
    is_featured : {
        type : Boolean,
        default : false
    },
   
}, {
    timestamps : true
});


const Property = models.Property || model('Property', UserSchema )

export default Property;