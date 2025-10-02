/*17. Cadastro de usuário em memória
Enunciado: Crie um endpoint /usuarios:

GET → retorna a lista de usuários cadastrados (array em memória).
POST → recebe JSON { "nome": "Maria", "idade": 25 } e adiciona à lista.*/

const http = require('http');

let usuarios = [];


const server = http.createServer((req, res) => 
  {
  if (req.url === '/usuarios' && req.method === 'POST') 
  {
    let body = '';

    req.on('data', chunk => { body += chunk.toString(); });
    
    req.on('end', () => 
    {
      const novoUsuario = JSON.parse(body)
      usuarios.push(novoUsuario)

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Usuário adicionado', usuarios }));

    }
)}
  else if(req.url === '/usuarios' && req.method === 'GET')
  {
      res.writeHead(200, {'Content-Type': 'application/json' })
      res.end(JSON.stringify(usuarios));
  }
  else
     {
    res.writeHead(404);
    res.end('Endpoint não encontrado');
  }
    });

    server.listen(3000,()=>
    {
      console.log('Servidor rodando em http://localhost:3000')
    }
    );