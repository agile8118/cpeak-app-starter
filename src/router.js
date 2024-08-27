const Test = require("./controllers/test");

module.exports = (server) => {
  server.route("get", "/", Test.indexFile);
  server.route("post", "/api/bar", Test.bar);
};
