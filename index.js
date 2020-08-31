const express = require("express");
const { dependencies, minimumSecure } = require("./api");

const app = express();
app.get("/dependencies", dependencies);
app.get("/minimum-secure", minimumSecure);
const PORT = 3000;

app.listen(PORT);
