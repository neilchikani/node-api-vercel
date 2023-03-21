const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compress = require("compression");
const methodOverride = require("method-override");
const cors = require("cors");
const httpStatus = require("http-status");
const { ValidationError } = require("express-validation");
const helmet = require("helmet");
const routes = require("./src/routes");
// const APIError = require("./helpers/APIError");

const app = express();

// parse body params and attache them to req.body
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cookieParser());
// app.use(compress());
// app.use(methodOverride());

// // secure apps by setting various HTTP headers
// app.use(helmet());

// // enable CORS - Cross Origin Resource Sharing
// app.use(cors());

const PORT = 4000;

// mount all routes on /api path
// app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});

// if error is not an instanceOf APIError, convert it.

// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//   const err = new APIError("API Not Found", httpStatus.NOT_FOUND);
//   return next(err);
// });

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

module.exports = app;
