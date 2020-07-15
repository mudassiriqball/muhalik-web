// const mongoose = require('mongoose');
// const mongoosePaginate = require('mongoose-paginate');
// const Schema = mongoose.Schema;

// const User = new Schema({

//     mobile: {
//         type: String,
//         unique: true,
//         sparse: true
//     },
//     fullName: {
//         type: String,
//         required:true
//     },
//     email: {
//         type: String,
//         unique: true,
//         sparse: true
//     },
//     password: {
//         type: String,
//         required:true
//     },
//     country: {
//         type: String,
//         required:true
//     },
//     gender: {
//         type: String,
//         required:true
//     },
//     role: {
//         type: String,
//         required:true
//     },
//     address: {
//         type: String,
//         required:true
//     },
//     shop_name: {
//         type: String,
//         required:true
//     },
//     category: {
//         type: String,
//         required:true
//     },
//     shopAddress: {
//         type: String,
//         required:true
//     },
//     city: {
//         type: String,
//         required:true
//     },
//     avatar: {
//         type: String
//     },
//     date: {
//         type: Date
//     },
//     is_deleted: {
//         type: Number,
//         default: 0
//     },
//     status:{
//         type: String,
//     }
// });

// User.plugin(mongoosePaginate);

// User.methods.toJSON = function () {
//     var obj = this.toObject();
//     delete obj.password;
//     return obj;


//     //     git remote add origin https://github.com/mudassiriqball/mysouqapi.git
//     // git push -u origin master
// }
// // User.index({'$**': 'text'});

// module.exports = mongoose.model("User", User);

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const User = new Schema({

    mobile: {
        type: String,
        unique: true,
        sparse: true
    },
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        sparse: true
    },
    password: {
        type: String,
        required: true
    },
    countary: {
        type: String,
        required: true
    },
    gender: {
        type: String,
    },
    role: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    shop_name: {
        type: String,
    },
    shop_category: {
        type: String,
    },
    shop_address: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    entry_date: {
        type: Date
    },
    is_deleted: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
    },
    Rank: {
        type: String,
    },
    cart:[
        {
            p_id:{type: Schema.Types.ObjectId},//product_id
            variation_id:{type: Schema.Types.ObjectId},
            index:{type:Number},
            quantity:{type:Number}
        }
    ]
});

User.plugin(mongoosePaginate);

User.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;
}

module.exports = mongoose.model("User", User);