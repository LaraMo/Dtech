var loki = require("lokijs");
const express = require('express'); //middleware for api
const cors = require('cors');

const port = "4000"; 
 const app = express();
 app.use(cors());

 app.listen (port, () => {
    console.log("This server is listening on port 4000");
 });

 //home page route
app.get('/', (req, res) => {
    //to move
    var db = new loki('loki.json')
    var jobs = db.addCollection('jobs').insert([
        {jobTitle:"Information security engineer", salary:"131,300"},
        {jobTitle:"DevOps engineer", salary:"$137,400"},
        {jobTitle:"Enterprise architect", salary:" $144,400"},
        {jobTitle:"Software architect", salary:"145,400"},
        {jobTitle:"Applications architect", salary:"149,000"},
    ])
    res.send(jobs);
});


