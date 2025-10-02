/*15. Endpoint /mensagem
Enunciado: Crie um endpoint /mensagem que retorne uma mensagem diferente dependendo do método HTTP usado (GET, POST, PUT, DELETE).

Resolução:*/

const http = require('http');

const server = http.createServer((req, res) => 
    {
  if (req.url === '/mensagem') 
    {
    let msg;
    switch (req.method) 
    {
      case 'GET': msg = 'Você fez um GET'; break;

      case 'POST': msg = 'Você fez um POST'; break;

      case 'PUT': msg = 'Você fez um PUT'; break;

      case 'DELETE': msg = 'Você fez um DELETE'; break;

      default: msg = 'Método não suportado';
    }
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8'});
    res.end(JSON.stringify({mensagem:msg}));
  } 
  else
     {
    res.writeHead(404 , { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify('Página não encontrada'));
  }
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));