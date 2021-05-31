const express =require('express');
 const connectDB =  require('./src/db/conn');
 const MensRanking = require('./src/models/mens');
 const router = require ('./src/routers/men');

const app =express();

connectDB();

const port = process.env.PORT || 3000;
app.use(express.json());

app.use(router);


app.get("/", async(req,res)=>{
    res.send("hello yogesh");
})

app.listen(port, () => {
    console.log(`listening to ${port}`);
})