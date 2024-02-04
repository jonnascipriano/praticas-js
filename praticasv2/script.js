var agora = new Date()
var ano = agora.getFullYear()
var mes = agora.getMonth()
var diasem = agora.getDay()
var dia = agora.getDate()
var hora = agora.getHours()
var minuto = agora.getMinutes()

var ola = document.getElementById('ola')
var date = document.getElementById('date')

var img = document.createElement('img')

if(hora < 12){
    ola.innerHTML = `Bom dia!`
} else if (hora < 18){
    ola.innerHTML = `Boa tarde!`
} else {
    ola.innerHTML = `Boa noite!`
    document.body.style.background = '#114'
    document.body.style.color = '#fff'
}



    date.innerHTML = `${hora}:${minuto} - ${dia} de `
    
    switch(mes){
        case 0:
            date.innerHTML += 'Janeiro'
            break
        case 1:
            date.innerHTML += 'Fevereiro'
            break
        case 2:
            date.innerHTML += 'Março'
            break
        case 3:
            date.innerHTML += 'Abril'
            break
        case 4:
            date.innerHTML += 'Maio'
            break
        case 5:
            date.innerHTML += 'Junho'
            break
        case 6:
            date.innerHTML += 'Julho'
            break
        case 7:
            date.innerHTML += 'Agosto'
            break
        case 8:
            date.innerHTML += 'Setembro'
            break
        case 9:
            date.innerHTML += 'Outubro'
            break
        case 10:
            date.innerHTML += 'Novembro'
            break
        case 11:
            date.innerHTML += 'Dezembro'
    }

    date.innerHTML += ` de ${ano}`

function calcimc(){
    var peso = document.getElementById('peso')
    var p = Number(peso.value)
    var altura = document.getElementById('altura')
    var a = Number(altura.value)

    var imc = p / (a**2)

    var resimc = document.getElementById('resimc')

    resimc.innerHTML = `Seu IMC é ${imc.toFixed(2)}!`
    console.log(imc)

    if (imc < 18.5){
        resimc.innerHTML += `\nVocê está abaixo do peso.`
    } else if ((imc > 18.6) && (imc < 24.9)){
        resimc.innerHTML += `\nVocê está no peso ideal, parabéns.`
    } else if ((imc > 25) && (imc < 29.9)){
        resimc.innerHTML += `\nVocê está levemente acima do peso.`
    } else if ((imc > 30) && (imc < 34.9)){
        resimc.innerHTML += `\nVocê está com obesidade grau 1.`
    } else if ((imc > 35) && (imc < 39.9)){
        resimc.innerHTML += `\nVocê está com obesidade grau 2(severa).`
    } else {
        resimc.innerHTML += `\nVocê está com obesidade grau 3(mórbida)`
    }
}

function porcentagem(){
    var porc = document.getElementById('porc')
    var p = Number(porc.value)

    var valor = document.getElementById('valor')
    var v = Number(valor.value)

    var resporc = document.getElementById('resporc')

    var res = (p/100) * v

    resporc.innerHTML = res
}


function tabuada(){
    let num = document.getElementById('num')
    let tab = document.getElementById('tab')

    if(num.value.length == 0){
        alert('Digite um número')
    } else if (num.value.length >= 10){
        alert('Máximo de caracteres excedido (no máximo 10)')
    } else {
        tab.innerHTML = ''
        let n = Number(num.value)
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}