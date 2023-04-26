require('dotenv').config()
const { CHATGPT_API_KEY } = process.env

let express = require("express");
let app = express();

let server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

app.set('view engine', 'html');
app.get("/", function(req, res, next){
    res.sendFile(__dirname + 'index.html');
});

app.use(express.static('public'));

app.post("/app", (req, res) => {
    console.log('get apiKey start');
    res.send(CHATGPT_API_KEY);
});