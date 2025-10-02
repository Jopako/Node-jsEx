/*13. Query de múltiplos parâmetros
Enunciado: Crie um endpoint /media que receba os parâmetros a e b na URL e retorne a média deles em JSON. 
Use Number() para converter os valores, url.parse para ler os parâmetros e JSON.stringify para formatar a resposta.

Ex.: /media?a=8&b=6 → { "media": 7 }
Resolução:*/

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => 
    {
  if (req.url.startsWith('/media')) 
    {
    const q = url.parse(req.url, true).query;
    const a = Number(q.a);
    const b = Number(q.b);
    const media = (a + b) / 2
    
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8'});
    res.write(JSON.stringify({media: media}));
    res.end();

  }
 else 
{
    res.writeHead(404, { 'Content-Type': 'application/json'});
    res.end('Página não encontrada');
  }
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));