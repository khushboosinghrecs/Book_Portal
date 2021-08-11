import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
   bookName: {
        type: String,
    },
    publication: {
        type: String
    },
    price: {
        type: Number
    },
    author: {
        type: String
    }

})

export default mongoose.model("Book", bookSchema);
// module.exports.BOOK = mongoose.model("BOOK", bookSchema)