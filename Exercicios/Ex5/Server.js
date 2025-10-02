/*5. JSON na resposta
Enunciado: Crie um endpoint /usuario que retorna um objeto JSON com nome e idade.

Resolução:*/

const http = require('http');

let user =
{
    name: "Pedro",
    age: 25
}

const server = http.createServer((req, res) => {
  if (req.url === '/usuario') 
{
 
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });    
        res.end(`Nome:${user.name}\nIdade:${user.age}`);

} 
else 
{
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });    
        res.end("Erro.")

}
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));