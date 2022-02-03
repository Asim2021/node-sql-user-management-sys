const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const mysql = require("mysql");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const PORT = 3005;

// ROUTES
const userRouter = require('./server/routes/user')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/',userRouter)




///STATIC FILE WITH HBS
app.use(express.static(path.join(__dirname, "public")));
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");


///// CONNECTION POOL TO SQL
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log(`SQL IS CONNECTED with ID: ${connection.threadId}`);
  connection.query();
});

app.listen(PORT, () => {
  console.log(`The App is running at ${PORT}`);
});
