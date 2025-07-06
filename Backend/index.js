const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://user:pass@localhost:5432/denuncias'
});

app.post('/denuncia', async (req, res) => {
  const { tipo, faixaEtaria, periodo, descricao } = req.body;
  await pool.query('INSERT INTO denuncias (tipo, faixa_etaria, periodo, descricao) VALUES ($1, $2, $3, $4)', [tipo, faixaEtaria, periodo, descricao]);
  res.sendStatus(201);
});

app.get('/graficos', (req, res) => {
  res.sendFile(__dirname + '/graficos.html'); // HTML com Recharts embutido
});

app.listen(process.env.PORT || 3000, () => console.log('Servidor rodando'));
