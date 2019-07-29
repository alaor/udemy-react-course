const resftul = require('node-restful')
const mongoose = resftul.mongoose

const todoSchema = new mongoose.Schema({
    description : {type: String, requeried: true},
    done: {type: Boolean, requeried: true, default: false},
    createdAt: {type: Date, default: Date.now}
})

module.exports = resftul.model('Todo', todoSchema)