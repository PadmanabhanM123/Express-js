const express = require('express');
const user=require('./routes/user')
const products=require('./routes/products')
const app = express();
const port = 4000;
app.use('/',user)
app.use('/p',products)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    console.log("check pannu bro")
});
