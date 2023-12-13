// Index.js
const express = require('express');
const dataSiswa = require('./datasiswa'); // Import dataSiswa dari file DataSiswa.js

const app = express();
const port = 8080;

// Rute utama
app.get('/', (req, res) => {
  res.send('Selamat Datang Di Data Center Siswa Indonesia');
});

// Rute /DataSiswa
app.get('/DataSiswa', (req, res) => {
  res.json(dataSiswa);
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
