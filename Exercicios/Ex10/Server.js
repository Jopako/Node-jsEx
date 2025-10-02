/*10. Endpoint /metodo
Enunciado: Crie um endpoint /metodo que retorna em JSON o método HTTP 
usado na requisição. Use req.method para obter o método e JSON.stringify para formatar a resposta. O status deve ser 200.

Resolução:*/

const http = require('http');

const server = http.createServer((req, res) => 
   
{

    if (req.url === '/metodo') 
    {       

    

        res.writeHead(200 , {'Content-Type': 'application/json; charset=utf-8'})
        res.write(JSON.stringify({ metodo: req.method }));
        res.end()

    }
    else
    {
        res.writeHead(404 , {'Content-Type': 'application/json; charset=utf-8'})
        res.end("eRoR!")
    }


});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));