const handlebars = require("handlebars");
const fs = require("fs");
const packageJson = require("../../package.json");

const VIEW_PATH = "views/dependencies.hbs";

module.exports = (req, res) => {
  const view = fs.readFileSync(VIEW_PATH).toString();
  const template = handlebars.compile(view);
  const dependencies = Object.entries(packageJson.dependencies).map(
    ([name, version]) => ({
      name,
      version,
    })
  );
  res.send(template({ dependencies }));
};
