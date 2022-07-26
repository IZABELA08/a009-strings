const frase = ("Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"")
console.log(frase)

const novafrase = frase.replaceAll('verde', 'rosa', 'azul', "laranja")
console.log(novafrase)

const verificacao1 = novafrase.includes('verde')
console.log("na frase tem verde? ", verificacao1)

const verificacao2 = novafrase.includes('laranja')
console.log("na frase tem laranja? ", verificacao2)