const express = require('express');
const app = express();

app.get('/mahasiswa', (req, res) => {
    res.json([
        { id: 1, nama: 'Andi' },
        { id: 2, nama: 'Budi' }
    ]);
});

app.listen(3000);