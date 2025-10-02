/*6. Contador de visitas
Enunciado: Crie um endpoint /visitas que conte quantas vezes ele foi acessado 
desde que o servidor iniciou. Armazene o contador em memória (pode ser uma variável global).

Resolução:*/

const http = require('http');
let visitor = 0;

const server = http.createServer((req, res) => 
{

    visitor++;

  if (req.url === '/visitas') 
{
 res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
 res.write(`Visitantes:${visitor}`)    
 res.end()
  
} 
else 
{
   res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
   res.end("Error!")
}
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));