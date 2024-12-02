const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
date: {
    type: String,
},
time: {
    type: String,
},
location: {
    type: String,
},
image: {
    url: {
        type: String,
    },
    public_id: {
        type: String,
    },
},
punctualityScore: {
    type: Number,
},
userId: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'SOWusers',
}], 
}, {timestamps: true});

const dataModel = mongoose.model('Data', dataSchema);

// dataSchema.pre('save', function(next) {
//     const self = this;
//     dataModel.findOne({
//       userId: self.userId,
//       createdAt: {
//         $gte: new Date(new Date().setHours(0, 0, 0, 0)),
//         $lt: new Date(new Date().setHours(23, 59, 59, 999))
//       }
//     }, function(err, existingUser) {
//       if (existingUser) {
//         return next(new Error('You can\'t sign in more than once today'));
//       } else {
//         next();
//       }
//     });
//   });

module.exports = dataModel;