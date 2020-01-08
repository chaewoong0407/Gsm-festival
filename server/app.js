const express = require('express');
var session = require('express-session');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
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
        console.log(rows[0])
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
                res.send('success');//로그인페이지 이동
            }
            else {
                console.log(rows[0]);
                console.log(id);
                console.log('중복O');
                res.send('fail');
            }
        } else {
            console.log('err: ', err);
        }
    });
});

app.get('/login', function (req, res) {
    var id = req.param('id');
    var pass = req.param('pass');
    var idAry = [id, pass];
    var uid = '';
    var upass = '';
    var count = 0;
    const mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: 3306,
        database: 'register'
    });

    connection.connect();

    var id_Query = "SELECT id,pass,sort FROM log_db WHERE id='" + id + "'";
    var D_query = connection.query(id_Query, function (err, results) {
        if (err) { throw err }
        for (var i = 0; i < results.length; i++) {
            for (var keyNm in results[i]) {
                if (results[i][keyNm] === idAry[0]) {
                    count++;
                    console.log(count);
                    console.log('고유값' + results[i][keyNm] + '입력값:' + idAry[0]);
                    uid = results[i][keyNm];
                }
                else if (count === 1) {
                    if (results[i][keyNm] === idAry[1]) {
                        count++;
                        console.log('고유값' + results[i][keyNm] + '입력값:' + idAry[1]);
                        upass = results[i][keyNm];
                    }
                }
                if (count == 2) {
                    console.log(results[i][keyNm]);
                    req.session.st_user = results[i][keyNm];
                }
            }
        }

        if (count == 2) {
            console.log('로그인');
            req.session.uid = uid;
            req.session.passw = upass;
            console.log(req.session.uid);
            console.log(req.session.passw);
            req.session.save(function () {
                res.send('success');
            });

        }
        else {
            console.log('실패');
            res.send('fail');
        }

    });

});
app.get('/hak', function (req, res) {
    var fs = require('fs');
    fs.readFile("cal.txt", "utf8", function (err, data) {
        res.send(data);
        console.log(data);
    });

});
app.post('/id', function (req, res) {
    var name = req.param('name');
    var email = req.param('mail');
    const mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: 3306,
        database: 'register'
    });

    connection.connect();

    connection.query("SELECT id FROM log_db WHERE name='" + name + "'and email='" + email + "'", (err, rows, fields) => {
        if (!err) {
            console.log('answer: ', rows);
        } else {
            console.log('err: ', err);
        }
    });

});
