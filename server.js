var express = require("express");

var app = express();
var PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", function(req, res) {
    res.send("You are on the homepage");
});

app.post("/post", function(req, res) {
    var data = req.body;
    res.send("Welcome " + data.user);
});

app.delete("/delete", function(req, res) {
    var data = req.body;
    if (data.taskId != null) {
        res.json({delete: true});
    }
});

app.put("/put/:id", function(req, res) {
    var id = req.params.id;
    res.send(`Task ${id} has been updated`);
});

app.listen(PORT, ()=> {
    console.log("Server on port " + PORT);
});
