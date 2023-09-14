//Utilizando os meus módulos
/*
const myModule = require("./myModule.js");

myModule.minhaFunction(); //function
console.log(myModule.pi); //var
console.log("Nome = " + myModule.obj.nome); //obj
console.log("Idade = " + myModule.obj.idade); //obj
*/

//Utilizando os meus módulos com classes
/*
const myClass = require("./myModule.js");
const myInstanceClass = new myClass();
console.log(myInstanceClass.nome);
*/


//Declaração de constantes para a criação de um servidor Node
const http = require("http");
const fs = require("fs");
const { log } = require("console");

const hostname = "127.0.0.1";
const port = 3000;

//cria novo arquivo
/*
fs.writeFile('texto.txt', 'realizando um teste', function(err){
    if(err) throw err;
    console.log('O arquivo foi criado com sucesso');
});
*/

//cria novo arquivo ou insere o conteúdo depois do que existe
/*
fs.appendFile('texto.txt', '\noutro conteudo', (err)=>{
    if(err) throw err;
    console.log('salvo com sucesso!');
})
*/

//Lendo um txt de maneira simples
/*
fs.readFile('leitura.txt', (err,data) =>{
    console.log(data.toString());
});
*/

//Identifica um simbolo como separados e cria um array com os dados (FUNÇÃO split)
//Pega determinados caracteres do arquivo (FUNÇÃO  substring)
/*
fs.readFile('leitura.txt', (err,data) =>{
    let str = data.toString();
    
    //let newStr = str.split('/'); 
    //let newStr = str.substring(0,3);
    console.log(newStr);
});
*/

//Apagando um arquivo
/*
fs.unlink('texto.txt', (err)=>{
    if(err) throw err;
    console.log('arquivo apagado');
});
*/

//Renomeando um arquivo
/*
fs.rename('name.txt', 'leitura.txt', function(err){
    if(err) throw err;
    console.log('arquivo renomeado');
})
*/

//Criação de constante para usar as funções abaixo
/*
const readline = require('readline');
*/

//Criando constante para leitura do terminal
/*
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
*/

//Lendo do terminal
/*
rl.question('Digite o seu nome: ', (name)=>{
    rl.question('Digite a sua idade: ', function(idade){    
        console.log( name + ' sua idade é ' + idade + ' anos!');
        if(idade >= 18){
            console.log('Você já possui maioridade!');
        } else {
            console.log('Ainda é menor de idade!');
        }
    })
});
*/

//Mensagem para encerrar o programa
/*
rl.on('close', function(){
    console.log('Adeus!');
    process.exit(0);
})
*/

//Criação do servidor Node
const server = http.createServer((require, request) => {
  if (require.url == "/home") {
    fs.readFile("index.html", function (err, data) {
      request.writeHead(200, { "Content-Type": "text/html" });
      request.write(data);
      return request.end();
    });
  } else {
    return request.end();
  }
});

server.listen(port, hostname, () => {
  //console.log("O servidor está online");
});
