const express = require("express");
const app = express();

const port = 3030;

app.get("/" , (req , res) => {
    res.send("Hii , Good Afternoon")
})

app.get("/:name",(req,res) => {
    const name = req.params.name;
    
    if(name === "Sharvari"){
        res.send("Hey Sharvariiii")
    }
    res.send(`hey ${name}`)
})

app.listen(port,() => {
    console.log(`server is running on ${port}`);
})