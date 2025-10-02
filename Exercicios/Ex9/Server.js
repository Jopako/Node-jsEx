/*9. JSON com array
Enunciado: Crie um endpoint /frutas que retorne um array JSON com frutas.

Resolução:*/

const http = require('http');

let frutas = ["Pera" , "Ameixa" , "Mamão" , "Banana" ,  "Maça"];

const server = http.createServer((req, res) => 
{
  if (req.url === '/frutas') 
{
    res.writeHead(200,{'Content-Type': 'application/json; charset=utf-8'});
    res.write(JSON.stringify({frutas: frutas}))
    res.end()
} 
else 
{
    res.writeHead(404 , {'Content-Type': 'text/plain; charset=utf-8'});
    res.end("Error 404!")
}
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));