// const mongoose = require('mongoose');
// const mongoosePaginate = require('mongoose-paginate');
// const Schema = mongoose.Schema;

// const User = new Schema({
//     id: {
//         type: Number,
//         unique: true,
//         sparse: true
//     },
//     mobile: {
//         type: String,
//         unique: true,
//         sparse: true
//     },
//     fullName: {
//         type: String
//     },
//     email: {
//         type: String,
//         unique: true,
//         sparse: true
//     },
//     password: {
//         type: String
//     },
//     countary: {
//         type: String
//     },
//     gender: {
//         type: String
//     },
//     role: {
//         type: String
//     },
//     address: {
//         type: String
//     },
//     shop_name: {
//         type: String
//     },
//     category: {
//         type: String
//     },
//     shopAddress: {
//         type: String
//     },
//     city: {
//         type: String
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
    fullName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        sparse: true
    },
    password: {
        type: String,
    },
    country: {
        type: String,
    },
    gender: {
        type: String,
    },
    role: {
        type: String,
    },
    address: {
        type: String,
    },
    shop_name: {
        type: String,
    },
    category: {
        type: String,
    },
    shopAddress: {
        type: String,
    },
    city: {
        type: String,
    },
    avatar: {
        type: String
    },
    date: {
        type: Date
    },
    is_deleted: {
        type: Number,
        default: 0
    }
});

User.plugin(mongoosePaginate);

User.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;


    //     git remote add origin https://github.com/mudassiriqball/mysouqapi.git
    // git push -u origin master
}
// User.index({'$**': 'text'});

module.exports = mongoose.model("User", User);