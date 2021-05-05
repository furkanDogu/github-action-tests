import http from "http";
const port = process.env.PORT || 3000;

const server = http.createServer((_, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
