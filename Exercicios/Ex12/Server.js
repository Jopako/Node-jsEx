/*12. Lendo arquivo HTML
Enunciado: Crie um endpoint / que retorne o conteúdo de um arquivo index.html.

Use fs.readFile para ler o arquivo de forma assíncrona.
Resolução:*/

const http = require('http');
const fs = require('fs'); // módulo para manipular arquivos

const server = http.createServer((req, res) => 
    {
  if (req.url === '/') 
    {
    fs.readFile('index.html', (err, data) => 
        {
      if (err) 
    {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });        
        res.end('Erro ao ler arquivo');
      } 
      else 
    {
        res.writeHead(200 , {'Content-Type': 'text/html; charset=utf-8'})
        res.end(data)
        
    }
    });
  } 
  else 
    {
        res.writeHead(400 , {'Content-Type': 'text/html; charset=utf-8'})
        res.end("EroR!")
    }
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));