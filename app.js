import express from "express"
import booksRouter from './routes/books.js'
const app = express()
const port = 3000

app.use(express.json())
  
//root route. Any request sent to root path returns a 'Hello World' string
app.get('/',(req,res)=>{
    res.json("Hello World")
})

app.use('/books',booksRouter)

// app.use('/books/:id',booksRouter)

//server listening for requests on '/test' path. Returns a json object as a reponse


//server listening for connections on localhost port 3000
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})

