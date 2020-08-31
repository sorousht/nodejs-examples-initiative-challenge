const express = require("express");
const { dependencies } = require("./api");

const app = express();
app.get("/dependencies", dependencies);
const PORT = 3000;

app.listen(PORT);
