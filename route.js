const express = require('express')
const app= express()
const port = 3000

app.get('/', (req, res) => {
    res.send('hii bro')
})

app.post('/submit', (req, res) => {
    res.send('Form submitted')
})

app.get('/details',(req,res)=>{
    res.send("get user details")
})

app.get('/username/:key([a-z A-Z]{5})',(req,res)=>{
    res.send("Username: "+req.params.key)
})

app.get('*',(req,res)=>{
    res.send("URL not found")
})

app.get('/details/:city/:state',(req,res)=>{
    res.send("User is from" + req.params.city + req.params.state)
})

app.get('/details/:id([0-9]{4})',(req,res)=>{
    res.send("User id" +req.params.id)
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})