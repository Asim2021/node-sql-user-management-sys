const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()
const PORT = 3005

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

///STATIC FILE
app.use(express.static('public'))


const pool = mysql.createPool({
connectionLimit: 10,
           host: "localhost",
       database:"",
           user: "root",
       password: "",
})

app.listen(PORT,()=>{
    console.log(`The App is running at ${PORT}`);
})