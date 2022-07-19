const express = require('express');

const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors({
    origin : ["http://localhost:3000"],
    methods : ["GET","POST","DELETE","PUT"],
    credentials: true,

    
}));
const db = mysql.createConnection("mysql://root:password@localhost:3307/kfcbase");
db.connect((errr)=>{
    if (errr) {
        console.log(errr)
        
    }
    else{
        console.log("database connected")
    }
 });


 app.get("/everyday", (req, res) => {
    db.query("SELECT * FROM everydayvalue", (err, result) => {
      if (err) {
        console.log(err);
      } 
      else {
        console.log(result)
        res.send(result);
      }
    });
  });
  app.listen(3001, ()=>{
    console.log("yay!");
});