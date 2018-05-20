var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var campgrounds = [
    { name: "Salmon Creek", image: "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b0144393f7c17ba2e5b4_340.jpg" },
    { name: "Granite Hill", image: "https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b0144393f7c17ba2e5b4_340.jpg" },
    { name: "Mountain Bee", image: "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b0144393f7c17ba2e5b4_340.jpg" },
    { name: "Salmon Creek", image: "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b0144393f7c17ba2e5b4_340.jpg" },
    { name: "Granite Hill", image: "https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b0144393f7c17ba2e5b4_340.jpg" },
    { name: "Mountain Bee", image: "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b0144393f7c17ba2e5b4_340.jpg" },
    { name: "Salmon Creek", image: "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b0144393f7c17ba2e5b4_340.jpg" },
    { name: "Granite Hill", image: "https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b0144393f7c17ba2e5b4_340.jpg" },
    { name: "Mountain Bee", image: "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b0144393f7c17ba2e5b4_340.jpg" },
    { name: "Salmon Creek", image: "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b0144393f7c17ba2e5b4_340.jpg" },
];

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    res.render("campgrounds", { campgrounds: campgrounds });
});

app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = { name: name, image: image };
    campgrounds.push(newCampground);

    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new.ejs");
});

app.listen(3000, function () {
    console.log("YelpCamp server has started...");
});