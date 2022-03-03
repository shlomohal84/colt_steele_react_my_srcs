// server.js
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    if (pathname === "/chicken") {
      app.render(req, res, "/contact", query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen((port = 3000), (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
