const express = require("express");
const mysql = require("mysql2");

const app = express();

app.use(express.static('html_files'));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "frxnds",
    password: "frx24"
});

connection.connect(function(err){
    if (err) {
        return console.log('Ошибка' + err.message)
    } else {
        console.log('Подключение к БД установленно')
    }
});

let queryString = 'SELECT * FROM user_info';

connection.query(queryString, (err, result) => {
    console.log(err);
    console.log(result);
});

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/html_files/index.html');
});

app.listen(80, () => {
    console.log('Сервер запущен')
});
