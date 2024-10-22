const mysql = require('mysql');
require('dotenv').config(); //carrega variaveis de ambiente do arquivo .env 
console.log(process.env.MENSAGEM_PERSONALIZADA);

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_NAME
});

db.connect((err) => {
    if(err){
        console.log('Erro ao conectar no banco de dados', err);
        return;
    }
    console.log('Conectou do banco de dados com sucesso');
});

db.query('SELECT * FROM usuário', (err, rows) => {  //WHERE emal = ? AND bçoqueado = ?
    if(err){
        console.log
    }
});

db.connect((err) => {
    if(err){
        console.log('Erro ao conectar no banco de dados', err);
        return;
    }
    console.log('Desconectou do banco de dados com sucesso');
});
