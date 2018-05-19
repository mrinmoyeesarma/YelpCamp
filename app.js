var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    var campgrounds = [
        { name: "Salmon Creek", image: "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b0144393f7c17ba2e5b4_340.jpg" },
        { name: "Granite Hill", image: "https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b0144393f7c17ba2e5b4_340.jpg" },
        { name: "Mountain Bee", image: "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b0144393f7c17ba2e5b4_340.jpg" }
    ]

    res.render("campgrounds", { campgrounds: campgrounds });
});

app.listen(3000, function () {
    console.log("YelpCamp server has started...");
});