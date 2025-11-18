// server.js
const next = require("next");
const http = require("http");

const port = process.env.PORT || 3000;   // Plesk will pass PORT env
const dev = false;
const hostname = "0.0.0.0";

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`🚀 Next.js app running on port ${port}`);
  });
});
