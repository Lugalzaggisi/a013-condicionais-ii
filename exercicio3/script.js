//código a ser reescrito
let nome = prompt("insira o nome").toLowerCase()
let idade = Number(prompt("insira a idade"))
// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }
console.log(
	nome === "josé"? "Oi Zé": "olá " + nome,
	idade >= 18? "pode tirar carteira": "Ainda não pode tirar carteira de motorista"
)