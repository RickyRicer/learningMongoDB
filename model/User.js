const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

// The Schema is similar to the class that we are creating in sequelize
const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        minLength: 4,
        maxLength: 8,
        required: [true, 'Username is required and must be a minimum of 4 characters and maximum of 8'],
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(value) {
                return isEmail(value);
            },
            message: function(userObject, message) {
                return `${userObject.email} is not a valid email address`;
            },
        }
    },
    role: {
        type: String,
        enum: ['Admin', 'Employee', 'Manager'],
    },
    powerLevel: {
        type: Number,
        min: 1,
        max: 10000000,
        default: 1,
    },
    // hobbies
    hobbies: [ String ],
    twoFavoriteCryptos: {
        firstFavorite: {
            type: String,
            uppercase: true,
            trim: true,
        },
        secondFavorite: {
            type: String,
            uppercase: true,
            trim: true,
        },
    }
});

const User = model('User', userSchema);

module.exports = User;