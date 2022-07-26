const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "
const remocao = minhaString.trim() // remocao de espaço

const tam = minhaString.length
console.log("A frase original tem ", tam, "caracteres") //quant caracteres

const tamSemExcesso = remocao.length
console.log("A frase original tem ", tamSemExcesso, "caracteres") 


const novafrase = minhaString.replaceAll(`________`, 'sticioso') //substituiçao de caracteres
console.log(novafrase)

