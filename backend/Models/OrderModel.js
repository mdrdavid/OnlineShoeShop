import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.objectId,
        required:true,
        ref:"User",
    },
    orderItems:[{
        name: {
            type: String, required: true  },
        qty: {type: Number, required: true },
        image: {type: String, required: true },
        price: {type: Number, required: true },
        product:{
            type: mongoose.Schema.Types.objectId,
            required: true,
            ref: "product"
        },
    },
],
shippingAddress:{
    address:{type:String, required:true},
    city:{type:String, required:true},
    postalCode:{type:String, required:true},
    country:{type:String, required:true},
},
paymentMethod:{
    type: String,
    required: true,
    default: "paypal"
},
PaymentRequest:{
    id:{type:String},
    status:{type:String},
    udate_time:{type: String},
    email_address:{type:String}
},
textPrice:{
    type:Number,
    required:true,
    default:0.0,
},
shippingPrice:{
    type: Number,
    required: true,
    default: 0.0
},
totalPrice:{
    type:Number,
    required:true,
    default: 0.0,
},
isPaid:{
    type: Boolean,
    required:true,
    default:false
},
paidAt:{
    type:Date,
},
isDelivered:{
    type:Boolean,
    required:true,
    default:false
},
deliveredAt:{
    type:Date,
},
},
    {
        timestamps: true
    }
)

const Order = mongoose.model("Order", orderSchema)

export default User