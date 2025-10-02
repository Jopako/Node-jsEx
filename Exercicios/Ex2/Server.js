/*2. Rota inicial e sobre
Enunciado: Crie um servidor que responda de acordo com o caminho da URL:

/ → "Página inicial", com status 200
/sobre → "Sobre nós", com status 200
Qualquer outro caminho → "Página não encontrada" com status 404
Resolução:*/

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Página inicial');
  } else if (req.url === '/sobre') 
{
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.write('Sobre nós!');
    res.end();
} 
else {
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.write('Página não encontrada!');
    res.end();
  }
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));