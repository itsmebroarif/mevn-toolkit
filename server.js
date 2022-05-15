// Jalanin dulu 'npm run server:side && node server'

// Sekarang Masuk Ke kodingan
// panggil semua data yang sudah di install [mysql, express, ejs, body-parser, nodemon]
const express = require('express');
const mysql = require('mysql');

// use express untuk membuat server backend nya
const app = express();
// Konfigurasi Index.ejs
app.set('view engine', 'ejs');
app.set('views', './views');

// Konfigurasi MySql
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_laravel_api'
})

//  Select nama tabel disini
const sql = 'SELECT * FROM galleries';;
// View engine tampilan yang akan ada diweb
db.connect((err) => {
 if (err) throw err;
 console.log('MySQL Telah Terhubung');
// Tampilkan data yang ada di tabel
db.query(sql, (err, result) =>{
    // Parse Data
    const users = JSON.parse(JSON.stringify(result));
    console.log("Isi Data Terkini -> ",users);
    app.get('/', (req, res) => {
        res.send(users);
    })
  })
})
// respon aplikasinya ketika server berhasil di jalankan
app.listen(8000, () => {
    console.log('Selamat Jalan Di Comment.js | Developed by : Arif Alexander');
    console.log('Server Jalan Di port 8000');
    console.log('Jalankan Di http://localhost:3000 Untuk Menjalankan Vue Js');
    console.log('Jalankan Di http://localhost:8000 Untuk menjalankan Connection Js');
})
