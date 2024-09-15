import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email : { 
        type : string,
        unique : [true, ' Email already exist'],
        required :[ true, 'Message is required']
    },
    username : {
        type : string,
        required : [true, 'username is required !'],

    },
    image : {
        type : string
    },
    bookmarks : [
        {
        type : Schema.Types.ObjectId,
        ref: 'Property'
        }
    ]
}, {
    timestamps : true
});


const User = models.User || model('User', UserSchema )

export default Useer;