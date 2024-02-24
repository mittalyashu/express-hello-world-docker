const express = require("express");

const app = new express();

app.get("/", (req, res) => {
  const ipList =
    req.headers['x-forwarded-for'] ||
    req.socket.remoteAddress;
  const ip = ipList.toString();

  // res.send(req.id).status(200);

  res.send(`Your IP address is: ${ip}`);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
