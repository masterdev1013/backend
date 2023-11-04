require("dotenv").config();
var express = require("express");
var app = express();
const server = require("http").createServer(app);
const bodyParser = require("body-parser");
const Route = require("./routes/index");
const connectdb = require("./config/db");
const port = process.env.PORT || 8080;
var cors = require("cors");
var path = require("path");

const passport = require('passport')

// ------ Configure swagger docs ------
var swaggerJsdoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var options = {
  swaggerDefinition: {
    info: {
      title: "CompanyDB API",
      version: "1.0.0",
      description: "CompanyDB API for doing cool stuff!",
    },
  },
  apis: [path.join(__dirname, "/routes/*.js")],
};
var swaggerSpecs = swaggerJsdoc(options);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const corsOption = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

connectdb();

// Setup for passport and to accept JSON objects
app.use(express.json())
app.use(passport.initialize())

// enable CORS without external module - ruffi0

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use routes
app.use("/v1/api", Route);

app.use(cors(corsOption));


app.listen(port, () => console.log(`CompanyDB API is now running on port ${port}`));
