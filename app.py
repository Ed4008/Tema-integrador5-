from flask import Flask, render_template, request, jsonify
import sqlite3
from datetime import datetime

app = Flask(__name__)

# Banco de dados
def init_db():
    conn = sqlite3.connect('database/denuncias.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS denuncias
                 (id INTEGER PRIMARY KEY, tipo TEXT, descricao TEXT, 
                 faixa_etaria TEXT, periodo TEXT, data TIMESTAMP)''')
    conn.commit()
    conn.close()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/denunciar', methods=['POST'])
def denunciar():
    data = request.form
    conn = sqlite3.connect('database/denuncias.db')
    c = conn.cursor()
    c.execute("INSERT INTO denuncias (tipo, descricao, faixa_etaria, periodo, data) VALUES (?, ?, ?, ?, ?)",
              (data['tipo'], data['descricao'], data['faixa_etaria'], 
               data['periodo'], datetime.now()))
    conn.commit()
    conn.close()
    return jsonify({"status": "sucesso"})

@app.route('/dashboard')
def dashboard():
    conn = sqlite3.connect('database/denuncias.db')
    c = conn.cursor()
    
    # Dados para gráficos
    c.execute("SELECT tipo, COUNT(*) FROM denuncias GROUP BY tipo")
    violacoes = c.fetchall()
    
    c.execute("SELECT faixa_etaria, COUNT(*) FROM denuncias GROUP BY faixa_etaria")
    faixas = c.fetchall()
    
    conn.close()
    return render_template('dashboard.html', violacoes=violacoes, faixas=faixas)

if __name__ == '__main__':
    init_db()
    app.run(host='0.0.0.0', port=5000, debug=True)
