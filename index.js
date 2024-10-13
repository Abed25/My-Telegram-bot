const express = require("express")
const {handler} = require("./controller") 
const PORT = process.env.PORT || 4040;

const app = express();
 app.use(express.json());


 app.post("*", async (req,res) =>{
   console.log(req.body);
   //  res.send("Received the post request");
   res.send(await handler(req));
 });

 app.get("*", async (req,res) =>{
   res.send(await handler(req));
 });


 app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log(`Server listening on port ${PORT}`);
 })

//  `https://api.telegram.org/bot${MY_TOKEN}/${method}`