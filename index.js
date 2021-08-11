
import express from 'express'
import mongoose from 'mongoose';

import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
import Book from "./models/book.js"
const port = 8005;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let books = [];
// Configuring body parser middleware


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/all', async(req, res)=>{
  try{
    const data=await Book.find();
    res.json(data)
  }
  catch (e){
res.json({message:e.message})
  }
})

app.post('/', async (req, res) => {
  //Take values to insert new book
  const book = new Book({
      bookName: req.body.bookName,
      publication: req.body.publication,
      price: req.body.price,
      author: req.body.author
  })
  console.log(book);

  //Saving it into database using save() and getting getting the saved object as response
  try{
      const saved = await book.save()
      res.json(saved)
  }catch (e) {
      res.json({message: e})
  }
})

mongoose.connect('mongodb+srv://khushi:12345678khushi@cluster0.ekjnl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected tp db");
    console.log(Book);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
