const express = require('express')
const cors = require('cors')
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors({ origin: true }));

let data = [];

app.get('/', (req, res) => {
  res.send(data)
});

app.post('/addData', (req, res) => {
    data.push(req.body.data);
    res.send(data);
});

app.put('/update/:id', (req,res) => {
    data.splice(req.params.id,1,req.body.data);
    res.send(data);
})

app.delete('/delete/:id', (req,res) => {
    data.splice(req.params.id,1);
    res.send(data);
})
 
app.listen(5000, () => {
    console.log("Server started in port 5000")
})

