/*1. Servidor HTTP simples 
Enunciado: Crie um servidor HTTP que responda "Olá, Mundo!" com status 200. O servidor deve escutar na porta 3000.*/

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.write('Olá, Mundo!');
    res.end();
});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});