import express = require("express");

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/test", (req, res) => {
  let json = {
    id: 1,
    name: 'Frank',
    email: 'frank@gmail.com'
  };
  res.send(JSON.stringify(json));
});

// export our app
export default app;

