import express from "express"
import Book from "../models/book.js"

const router = express.Router()

//Cumulative returns
router.get('/', async (req, res) => {
    try{
        const portfolio = await Book.find()
        const currentPrice = 100 //Assuming current price = 100.00 (given in the task)
        const returns = portfolio.reduce((ans, value)=>ans+((currentPrice-value.price)*value.quantity), 0)
        res.json({returns: returns})
    }catch (err){
        res.json({message: err.message})
    }
})



export default router