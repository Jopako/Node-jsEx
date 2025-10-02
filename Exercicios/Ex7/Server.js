/*7. Redirecionamento
Enunciado: Crie um endpoint /ifc que redirecione o usuário para https://www.videira.ifc.edu.br usando status HTTP 302 (redirecionamento temporário).

Resolução:*/

const http = require('http');

const server = http.createServer((req, res) => 
{
    if (req.url === '/ifc')
    {
        res.writeHead(302,{Location: 'https://videira.ifc.edu.br/'})
        res.end()
    }

    else
    {
        res.writeHead(404,{ 'Content-Type': 'text/plain; charset=utf-8' });
        res.end("Error!")

    }

});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));