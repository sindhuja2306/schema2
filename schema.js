const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    commentedAt: {
        type: Date,
        default: Date.now,
    },
});

const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
    },
    content: {
        type: String,
        required: true,
        minlength: 50,
    },
    author: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    category: {
        type: String,
        default: 'General',
    },
    likes: {
        type: [String],
        default: [],
    },
    comments: {
        type: [commentSchema],
        default: [],
    },
}, { timestamps: true });

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: [String],
        default: ['user']
    },
    profile: {
        firstName: {
            type: String,
            trim: true
        },
        lastName: {
            type: String,
            trim: true
        },
        age: {
            type: Number,
            min: 0
        }
    },
    lastLogin: {
        type: Date,
        default: null
    }
}, { timestamps: true });

module.exports = {
    User: mongoose.model('User', userSchema),
    BlogPost: mongoose.model('BlogPost', blogPostSchema)
};
