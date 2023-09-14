//Expotando uma função
function minhaFunction() {
  console.log("teste");
}
exports.minhaFunction = minhaFunction;

//exportando uma variavel
var pi = 3.1416;
exports.pi = pi;

//exportando um objeto
var obj = { nome: "vinicius", idade: "23" };
exports.obj = obj;


//Exportando uma classe
class myClass {
  constructor() {
    this.nome = 'Vinicius';
  }
  testes() {
    console.log(this.nome);
  }
}

module.exports = myClass;
