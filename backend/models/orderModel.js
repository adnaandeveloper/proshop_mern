import mongoose from 'mongoose'

const orderSchema = mongoose.Schema ({
        user: {
            
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref:'User'
        },
        orderItems:[ {
            
            name: {type:String, require:true},
            qtw: {type:Number, require:true},
            image: {type:String, require:true},
        }],
        password: {
            
            type: String,
            require: true
        },
        isadmin: {
            
            type: Boolean,
            require: true,
            default: false
        }
}, 
{
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User