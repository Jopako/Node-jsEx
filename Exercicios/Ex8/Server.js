/*8. Somando dois números via query
Enunciado: Crie um endpoint /soma que receba parâmetros a e b na URL (ex.: /soma?a=3&b=5) e retorne o resultado da soma em JSON.

Resolução:*/

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => 
{
  const q = url.parse(req.url, true).query;


  if (req.url.startsWith('/soma')) 
{

    
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });   
    res.write(`Somando: ${parseInt(q.a) + parseInt(q.b)} `)
    res.end()
} 
else 
{
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });  
    res.end("Error!") 

}
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));