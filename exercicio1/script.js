const num = Number(prompt("insira seu numero aqui"))

if (num %2===0){
    if (num%3===0){
        console.log("parabéns! é divisível por 2 e 3")
    }else{
        console.log ("é divisível por 2, mas não por 3")
    }
}else if (num%3===0) {
    console.log("não é divisível por 2, mas é divisível por 3")
}else {
   console.log("não é divisível por 2 nem por 3")
}


if (num%2===0 || num%3===0){
    console.log ("o número é divisível por 2 ou por 3")
}else {
    console.log("não é divisível por 2 nem por 3")
}