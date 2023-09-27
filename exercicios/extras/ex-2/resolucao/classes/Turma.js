function Turma(){
    this.alunas = [];
this.adicionarAluna = function(aluna){
    this.alunas.push(aluna);
}

this.exibirListaAlunas = function(){
    this.alunas.forEach((aluna) => {
        console.log(`Nome: ${aluna.nome}, Matricula: ${aluna.matricula} `)

    });
}

}
module.exports = {Turma};