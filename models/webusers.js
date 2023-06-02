const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})


const Category = mongoose.model('Category', categorySchema);

module.exports = {
    Category
}