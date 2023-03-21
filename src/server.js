const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compress = require("compression");
const methodOverride = require("method-override");
const cors = require("cors");
const httpStatus = require("http-status");
const { ValidationError } = require("express-validation");
const helmet = require("helmet");
const routes = require("./routes");
const APIError = require("./helpers/APIError");

const app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(compress());
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount all routes on /api path
// app.use("/api", routes);

// // if error is not an instanceOf APIError, convert it.
// app.use((err, req, res, next) => {
//   if (err instanceof ValidationError) {
//     // validation error contains details object which has error message attached to error property.
//     const allErrors = err.details.map((pathErrors) =>
//       Object.values(pathErrors).join(", ")
//     );
//     const unifiedErrorMessage = allErrors
//       .join(", ")
//       .replace(/, ([^,]*)$/, " and $1");
//     const error = new APIError(unifiedErrorMessage, err.statusCode);
//     return next(error);
//   }
//   if (!(err instanceof APIError)) {
//     const apiError = new APIError(err.message, err.status);
//     return next(apiError);
//   }
//   return next(err);
// });

// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//   const err = new APIError("API Not Found", httpStatus.NOT_FOUND);
//   return next(err);
// });

app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});

module.exports = app;
