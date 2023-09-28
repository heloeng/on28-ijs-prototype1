//

 function eat1() {
	console.log(`O cachorro está correndo`);
}

let animal1 = {}
animal1.type = 'cachorro';
animal1.name = 'Aslam';
animal1['can I have'] = true; //propriedade com "espaço"
//chama a função pre-existente
animal1.eat1 = eat1 ////chama a função sem o "parenteses", pois não precisa executar, so da o nome
//a propriedade "eat1" , vai conrresponder a função eat1. Será executada somente quando 
//chamar no console ai sim tem parentêses.



//acessar propriedades do objeto com "ponto"
console.log(animal1.name) // Aslam

//acessar propriedades do objeto com "colchetes"
console.log(animal1['type']) // cachorro

//precisa acessar, obrigatoriamente com "colchetes" propriedade descritas "com espaços"
 console.log(animal1["can I have"]) //true
//  console.log(animal1.eat1()) //O animal está correndo
 console.log(animal1.age) // undefined(propriedade age não existe)
animal1.eat1()





let animal = {}
animal.type = 'gato';
animal.name = 'fernando';
animal['can I have'] = true;
animal.eat = function eat() {
	console.log(`O animal chamado ${this.name} está dormindo`);
	console.log(`O animal chamado ${this['can I have']} está de pé`);
}

console.log(animal.name) // fernando
console.log(animal['type']) // gato
console.log(animal.age) // undefined
animal.eat() //Executa(parenteses) O animal chamado Aslam está comendo




