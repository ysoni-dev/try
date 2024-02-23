const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(bodyparser.json())
app.use(cors())
const PORT = 4000

app.get('/',(req,res)=>{
    res.send('helllo world!!!!!!!')
})

app.listen(PORT,()=>{
    console.log(`serve is running on ${PORT}`)
})