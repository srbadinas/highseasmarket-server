const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'highseasmarket',
});

db.connect((error) => {
    if (error) {
        throw error;
    }

    console.log('MySQL connected...');
});

const app = express();

app.get('/listings', (req, res) => {
    db.query('SELECT * FROM products LIMIT 5', (err, result) => {
        if (err) throw err;
        res.send(result)
    });
})

app.listen('3000', () => {
    console.log('Server started on port 3000')
})