const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Sudhar_b:Sudharsan_b@cluster0.mrozqrh.mongodb.net/todo_app")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}