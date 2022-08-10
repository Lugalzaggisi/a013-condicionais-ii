let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!");
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!");
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!");
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!");
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!");
// } else{
//     console.log("nacionalidade não encontrada")
// }
switch(nacionalidade){
    case "brasileiro" || "brasileira":
        console.log ("infelizmente você é brasilero, senta e chora")
        break
    case "argentino" || "argentina" :
        console.log ("usted es argentino y tiene mala suerte")
        break
    case "uruguaio" || "uruguaia":
        console.log ("Uruguay es el pais mas normal de latinoamerica. Suerte!")
        break
    case "chileno" || "chilena":
        console.log ("usted es chileno y no va a pensionarse")
        break
    case "colombiano" || "colombiana":
        console.log ("lo siento por la violencia de tu pais")
    default:
        console.log ("nacionalidade não encontrada. Ainda bem")

}