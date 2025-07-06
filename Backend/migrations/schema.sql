CREATE TABLE denuncias (
  id SERIAL PRIMARY KEY,
  tipo TEXT,
  faixa_etaria TEXT,
  periodo TEXT,
  descricao TEXT,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
