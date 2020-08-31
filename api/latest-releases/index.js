const bent = require("bent");
const semver = require("semver");

const API_URL = "https://nodejs.org/dist/index.json";

const isGrater = (first, second) => semver.gt(first.version, second.version);

module.exports = async (req, res) => {
  const releases = await bent("json")(API_URL);
  const result = releases.reduce((acc, release) => {
    const major = `v${semver.major(release.version)}`;
    const existing = acc[major];
    if (!existing) {
      acc[major] = release;
    } else if (isGrater(release, existing)) {
      acc[major] = release;
    }

    return acc;
  }, {});
  res.json(result);
};
