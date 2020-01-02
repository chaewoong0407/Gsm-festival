const express = require('express');
var session = require('express-session');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '..', 'public/')));
app.listen(PORT, () => {
    console.log(`Check out the app at http://localhost:${PORT}`);
});
app.use(session({
    secret: 'asadlfkj!@#!@#dfgasdg',
    resave: false,
    saveUninitialized: true
}))

app.get('/regit', function (req, res) {//회원가입 
    var name = req.param('name');
    var id = req.param('id');
    var email = req.param('email');
    var pass = req.param('pass');
    var sort = req.session.st_user;

    const mysql = require('mysql');//mysql연동
    var conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: 3306,
        database: 'register'
    });

    conn.connect(function (err) {

        if (err) {
            console.log(err);
        } else {
            console.log('mysql connected.');
        }
    });

    conn.query("SELECT id FROM log_db WHERE id='" + id + "'", (err, rows, fields) => {
        if (!err) {
            if (rows[0] === undefined) {
                console.log(rows[0]);
                console.log(id);
                console.log('중복X');
                var sql = 'INSERT INTO log_db(name,id,pass,email,sort)VALUES(?,?,?,?,?)';

                var params = [name, id, pass, email, sort];
                conn.query(sql, params, function (err, rows, fields) {
                    if (err) {
                        console.log(err);
                    }
                });
                res.redirect('/');
            }
            else {
                console.log(rows[0]);
                console.log(id);
                console.log('중복O');
                res.redirect('/Join_2.html');
            }
        } else {
            console.log('err: ', err);
        }
    });
});