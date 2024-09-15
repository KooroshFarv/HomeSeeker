import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
   {
    owner : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    name : {
        type : string,
        required : true
    },
    name : {
        type : string,
        required : true
    },
    description : {
        type : string,
    },
    location : {
        street : string,
        city : string,
        state : string,
        zipcode : string
    },
    name : {
        type : number,
        required : true
    },
    bath : {
        type : number,
        required : true
    },
    square_feet : {
        type : number,
        required : true
    },
    amenities: [
        {
            type : string,
            
        }
    ],
    rates : {
       nightly : number,
       weekley : number,
       monthly : number 
    },
    seller_info : {
        name : string,
        email : string,
        photne : number
    } ,
    images : [
        {
            type : string
        }
    ],
    is_featured : {
        type : Boolean,
        default : false
    },
   
}, {
    timestamps : true
});


const Property = models.Property || model('{Property}', UserSchema )

export default Useer;