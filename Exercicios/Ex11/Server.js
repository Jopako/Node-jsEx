/*11. Rota com HTML simples
Enunciado: Crie uma rota /node que retorne um HTML com <h1>Minha Página Node.js</h1> e <p>Esta é uma página de teste</p>.

Resolução:*/

const http = require('http');

const server = http.createServer((req, res) => 
{
    if(req.url === '/node')
    {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        res.write
        (`
            <h1>Olha so que legal</h1> 
            <p>testando 123</p>

        `)
        res.end();
    }
    else
    {
        res.writeHead(400 , {'Content-Type': 'application/json; charset=utf-8'})
        res.end("EroR!")
    }
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));