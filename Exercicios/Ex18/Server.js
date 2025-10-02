/*18. CRUD básico em memória
Enunciado: Crie um endpoint /produtos:

GET → lista todos os produtos
POST → adiciona um produto { "id": 1, "nome": "Teclado", "preco": 120 }
PUT → atualiza um produto pelo id
DELETE → remove um produto pelo id*/

const http = require('http');
const url = require('url');

let produtos = [];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  if (path === '/produtos' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(produtos));
  }

  else if (path === '/produtos' && method === 'POST') {
    let body = '';

    req.on('data', chunk => { body += chunk.toString(); });

    req.on('end', () => {
      const novoProduto = JSON.parse(body);

      if (!novoProduto.nome || !novoProduto.preco) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ erro: "Preencha todos os campos" }));
        return;
      }

      if (!novoProduto.id) {
        novoProduto.id = produtos.length + 1;
      }

      produtos.push(novoProduto);

      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Produto adicionado', produtos }));
    });
  }

  
  else if (path.startsWith('/produtos/') && method === 'PUT') {
    const id = parseInt(path.split('/')[2]);
    let body = '';

    req.on('data', chunk => { body += chunk.toString(); });

    req.on('end', () => {
      const dadosAtualizados = JSON.parse(body);
      const index = produtos.findIndex(p => p.id === id);


      produtos[index] = { ...produtos[index], ...dadosAtualizados };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Produto atualizado', produto: produtos[index] }));
    });
  }

  // DELETE → remove pelo id
  else if (path.startsWith('/produtos/') && method === 'DELETE') {
    const id = parseInt(path.split('/')[2]);
    const index = produtos.findIndex(p => p.id === id);

    const removido = produtos.splice(index, 1);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Produto removido', produto: removido[0] }));
  }

  
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Endpoint não encontrado');
  }
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
