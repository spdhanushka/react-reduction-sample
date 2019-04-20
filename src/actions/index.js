const app = require("./app");
const search = require("./search");

module.exports = {
  ...app,
  ...search
};
