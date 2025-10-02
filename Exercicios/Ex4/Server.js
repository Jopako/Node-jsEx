/*4. Endpoint /hora
Enunciado: Crie um endpoint /hora que retorne a hora atual do servidor em formato "HH:MM:SS".

Resolução:*/

const http = require('http');

const server = http.createServer((req, res) => 
{
  if (req.url === '/hora') 
{ 
    const data = new Date()

    let HH = data.getHours();
    let MM = data.getMinutes();
    let SS = data.getSeconds();

    const horaFormatada = `${HH}:${MM}:${SS}`;

    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8'});
    res.write(`Hora: ${horaFormatada}`);
    res.end();
} 
else 
    
    {
        res.writeHead(404,  { 'Content-Type': 'text/plain; charset=utf-8'});
        res.end("Erro!");
    }
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));