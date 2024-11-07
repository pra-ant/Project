const express = require("express");
const app = express();

// console.dir(app);

app.use('',(req,res) =>{
    // console.log("request received");
    res.send("<h1> fruits<h1>");
      


});
   
let port = 3000;
 
app.listen(port,()=>{
    console.log(`app connected at port ${port}`);
});
