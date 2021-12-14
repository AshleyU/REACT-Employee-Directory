const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'employeesystem',
});

app.post('/create', (req, res) => {
    const name = req.body.name;
    const position = req.body.position;
    const email = req.body.email;
    const startDate = req.body.startDate;
    const salary = req.body.salary;

    db.query('INSERT INTO employees (name, position, email, startDate, salary) VALUES (?,?,?,?,?)', 
    [name, position, email, startDate, salary], 
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("values inserted");
        }
    });
});

app.listen(3001, () => {
    console.log("Yay! Your server is running on port 3001.");
});