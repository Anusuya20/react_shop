const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter name of a product"],
        trim:true,
        maxLength:[25,"Product name not exceeded 25 characters"]
    },
    description:{
        type:String,
        required:[true,"Please add a description of your product"],
        maxLength:[4000,"Description cannot exceeded 4000 characters"]
    },
    price:{
        type:Number,
        required:[true,"Please add price of your product"],
        maxlength:[8,"Price cannot exceeded 8 characters"]

    },
    offerPrice:{
        type:String,
        maxlength:[4,"Discount price cannnot exceeded 4 characters"],
    },
    color:{
        type:String,
    },
    size:{
        type:String,
    },
    ratings:{
        type:Number,
        default:0,
    },
    images:[
        {
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true,
            },
        }
    ],
    category:{
        type:String,
        required:[true,"Please enter category of your product"],
    },
    Stock:{
        type:Number,
        required:[true,"Please add some stock for your product"],
        maxlength:[3,"Stock cannnot exceeded 3 characters"],

    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
        user: {
            type:mongoose.Schema.ObjectId,
            ref:"User",
            required:true,
        },
        name:{
            type:String,
            required:true,

        },
        rating:{
             type:Number,
             required:true,
        },
        comment:{
            type:String,

        },
        time:{
            type:Date,
            default:Date.now()
        },
    },
],
user:{
    type:mongoose.Schema.ObjectId,
    ref:"User",
   //required:true
},
createAt:{
    type:Date,
    default:Date.now()
}
})

module.exports = mongoose.model("Product",productSchema);