import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000; 

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req,res)=>{

    res.render("index.ejs");
})

app.get("/grocery", (req,res)=>{

    res.render("grocery.ejs");
    })

// app.post("/submit",(req,res)=>{
//     const formData = req.body
//     const newListItem = formData.item // ??
//     res.render("index.ejs");
// })       //加上editbtn 代碼後無法運作

app.listen(port,()=>{
    console.log(`Server is running on ${port}.`);
})