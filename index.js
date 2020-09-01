const express = require("express");
const { dependencies, minimumSecure, latestReleases } = require("./api");

const app = express();
app.get("/dependencies", dependencies);
app.get("/minimum-secure", minimumSecure);
app.get("/latest-releases", latestReleases);
const PORT = 3000;

app.listen(PORT);

module.exports = app;
