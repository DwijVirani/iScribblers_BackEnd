const express = require("express");
const app = express();
const routes = require("./routes/routes");
// const dotenv = require("dotenv");

const port = process.env.PORT || 8000;
//Database Connection
//Ayaya Datebase add krvanu che
// require("./database/connection");

//MiddelWare
app.use(express.json());

//Router
routes(app);

//Listener
app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
