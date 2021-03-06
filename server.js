var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var burgerRoutes = require("./controllers/burgers_controller.js");
app.use(burgerRoutes);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT)
});

