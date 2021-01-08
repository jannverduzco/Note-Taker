const express = require("express");

// Tells node that we are creating an "express" server
var app = express();

// Points to files
const apiRoute = require("./routes/apiRoutes");
const htmlRoute = require("./routes/htmlRoutes")

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Allows use to express in these listed files
app.use("/api", apiRoute);
app.use("/", htmlRoute)

// LISTENER The below code effectively "starts" our server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});