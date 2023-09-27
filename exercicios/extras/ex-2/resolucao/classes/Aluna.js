
function Aluna(nome, matricula) {
    this.nome = nome;
    this.matricula = matricula;
    this.notas = []

    this.adicionarNota = function(nota) {
        this.notas.push(nota);
    }

    this.calcularMedia = function() {

        if (this.notas.length === 0) {
            return 0;
        }
        const total = this.notas.reduce((soma, nota) => soma + nota, 0)
        const media = total / (this.notas.length).toFixed(2);
        return media;

    }

    this.exibirInformacoes = function () {
        console.log(`Nome: ${this.nome}, Matricula ${this.matricula}, Media ${this.calcularMedia()}`)
    }
}

module.exports = { Aluna }










// A classe Aluna deve possuir os seguintes métodos:
// - `adicionarNota(nota)`: Este método permite adicionar uma nota à lista de notas da aluna.
// 02° forma
// Aluna.prototype.adicionarNota = function(nota){
//     this.notas.push(nota);
// }

// - `calcularMedia()`: Este método calcula e retorna a média das notas da aluna.
//média tem que ter duas casas decimais
//02° forma
// Aluna.prototype.calcularMedia = function(){

// //verificar se está dividindo por zero
// //matematicamente não existe divisão por zero
// if(this.notas.length ===0){
//     return 0;
// }

// //valor inicial da soma das notas é zero
// const total = this.notas.reduce((soma, nota)=> soma + nota,0 )
// const media = total / (this.notas.length).toFixed(2);
// return 0;
// }

// - `exibirInformacoes()`: Este método exibe no console o nome, número de matrícula e média da aluna.

// Aluna.prototype.exibirInformacoes = function(){
//     console.log(`Nome: ${this.nome}, Matricula ${this.matricula}, Media ${this.calcularMedia})
// }

