/*POST simples com JSON
Enunciado: Crie um endpoint /login que aceite requisições POST com JSON contendo usuario e senha.

Se usuario === "admin" e senha === "1234", retorne { "sucesso": true, "mensagem": "Login bem-sucedido" }.
Caso contrário, retorne { "sucesso": false, "mensagem": "Usuário ou senha inválidos" }.
Para testar se está funcionando, use o Postman ou curl.

curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"usuario":"admin","senha":"1234"}'
Resolução:*/

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/login' && req.method === 'POST') 
    {
    let body = '';

    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => 
    {
      const dados = JSON.parse(body);

        const usuario = dados.usuario
        const senha = dados.senha
    
      const sucesso = (usuario ==="admin" && senha ==="1234")

      const mensagem = sucesso ? 'Login bem-sucedido' : 'Usuário ou senha inválidos';

      res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ sucesso, mensagem }));
      res.end()
    });
  } 
  else 
    {
    res.writeHead(404 , { 'Content-Type': 'application/json; charset=utf-8' });;
    res.end('Página não encontrada');
  }
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));