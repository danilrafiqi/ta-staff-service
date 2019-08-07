const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb://danil:rahasia12@ds353957.mlab.com:53957/tourinc-staff",
  { useNewUrlParser: true }
);

const routes = require("./routes");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

const port = process.env.PORT || 2009;
app.listen(port, process.env.IP, () => {
  console.log("server started on port", port);
});

module.exports = app;
