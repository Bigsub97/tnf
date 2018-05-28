const express=require('express')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine','hbs')
//app.use('/',express.static(__dirname+'/views'))
app.get('/',(req,res)=>{
    res.render('index')
})
app.listen(4007,()=>{
    console.log('Listening on port 4007')
})
