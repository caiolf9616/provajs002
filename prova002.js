let nomeUser = prompt('Seu nome: ')
let alturaUser = Number(prompt('Sua Altura sem usar o ponto ou virgula: '))
let pesoUser = Number(prompt('Seu Peso: '))

let alturaMetros = alturaUser / 100 

let imc = pesoUser / (alturaMetros * alturaMetros)


if (imc < 16 ){
    clasificacao = 'Baixo peso muito grave'
} 

else if (imc >= 16 && imc < 16.99){
    clasificacao = 'Baixo peso grave'
}

else if (imc >= 17 && imc < 18.49){
    clasificacao = 'Baixo peso'
}

else if (imc >= 18.50 && imc < 24.99){
    clasificacao = ' Peso normal'
}

else if (imc >= 25 && imc < 29.99 ){
    clasificacao = 'Sobrepeso'
}

else if (imc >= 30 && imc < 34.99){
    clasificacao = 'Obesidade grau I'
}

else if (imc >= 35 && imc < 39.99){
    clasificacao = 'Obesidade grau II'
}

else if (imc >= 40){
    clasificacao = 'Obesidade grau III'
}

document.write(`Olá ${nomeUser}, seu e Imc e de: ${imc.toFixed(2)} e Sua Clasificação e de: ${clasificacao}`)
