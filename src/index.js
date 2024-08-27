const cpeak = require("../cpeak");
const apiRouter = require("./router.js");

const PORT = 8020;

const server = new cpeak();

// ------ Middlewares ------ //

// For parsing JSON body
server.beforeEach(cpeak.parseJSON);

// ------ API Routes ------ //
apiRouter(server);

server.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
