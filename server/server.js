const path = require('path')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath)

const express = require('express')

const app = express();
app.use(express.static(publicPath))

// app.get('/',function(req,res){
// res.sendFile(publicPath)
    
// })

app.listen(3000,()=>{
    console.log("server is upp and running on port 3000")
})