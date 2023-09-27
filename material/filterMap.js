const teste = [1, 2, 3, 4, 5, 7, 8]

// cria uma cópia do array
const resultado = teste.filter((numero) => numero <=5);
console.log("filtrar numeros menor ou igual a 5",resultado)

// cria uma cópia do array
const outroResultado = teste.map((numero) =>  numero*2);
console.log("Multiplicando cada item do array por 2",outroResultado)

// não cria uma cópia do array
teste.forEach((numero) => {
    console.log(`Numero: ${numero}`)
});