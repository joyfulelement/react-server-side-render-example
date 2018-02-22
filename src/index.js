// Root file for application on server

const express = require("express");
const React = require("react");
const renderToString = require("react-dom/server").renderToString;
const Home = require("./client/components/Home").default;
const app = express();

app.get("/", (req, res) => {
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(3001, () => {
  console.log("Listening to port 3001");
});
