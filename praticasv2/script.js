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

    // ============================================

function b1(){
    alert('Você clicou no 1º Botão!')
}

function b2(){
    alert('Você clicou no 2º Botão!')
}

function b3(){
    alert('Você clicou no 3º Botão!')
}

    // ============================================

function inides(){
    let nome = window.prompt('Digite seu nome')
    let idade = window.prompt(`Olá, ${nome}! Quantos anos você tem?`)
    alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`)
}

    // ============================================


function antdep(){
    let num = window.prompt('Digite um número inteiro qualquer')
    let ant = Number(num) - 1
    let pos = Number(num) + 1
    alert(`Antes de ${num}, temos o número ${ant}.\nDepois de ${num}, temos o número ${pos}.`)
}

    // ============================================


function comprar(){
    let produto = window.prompt('Que produto você está comprando?')
    let valor = Number(window.prompt(`Quanto custa ${produto} que você está comprando?`))
    let valorpago = Number(window.prompt(`Qual foi o valor que você deu para pagar ${produto}`))
    let troco = valorpago - valor

    if(valorpago > valor){
        alert(`Você comprou ${produto} que custou R$${valor.toFixed(2)}.\nDeu R$${valorpago.toFixed(2)} em dinheiro e vai receber ${troco.toFixed(2)} de troco.\nVolte sempre!`)
    } else {
        alert(`Está faltando R$${valor-valorpago.toFixed(2)} para completar a compra do produto`)
    }
}

    // ============================================

function converter(){
    let metros = Number(prompt('Digite uma distância em metros(m)'))
    let resconv = document.getElementById('resconv')

    let km = metros / 1000
    let hm = metros / 100
    let dam = metros / 10
    let dm = metros * 10
    let cm = metros * 100
    let mm = metros * 1000

    resconv.innerHTML += `<p><strong>A distância de ${metros} metros, corresponte a...</strong></p>`
    resconv.innerHTML += `<p>${metros/1000} quilômetros (Km)</p>`
    resconv.innerHTML += `<p>${hm} hectômetros (Hm)</p>`
    resconv.innerHTML += `<p>${dam} decâmetros (Dam)</p>`
    resconv.innerHTML += `<p>${dm} decímetros (dm)</p>`
    resconv.innerHTML += `<p>${cm} (cm)</p>`
    resconv.innerHTML += `<p>${mm} milímetros (mm)</p>`
}

    // ============================================

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

    // ============================================

function porcentagem(){
    var porc = document.getElementById('porc')
    var p = Number(porc.value)

    var valor = document.getElementById('valor')
    var v = Number(valor.value)

    var resporc = document.getElementById('resporc')

    var res = (p/100) * v

    resporc.innerHTML = res
}

    // ============================================

function tabuada(){
    let numero = document.getElementById('numero')
    let n = Number(numero.value)
    let tab = document.getElementById('tab')

    if(numero.value.length == 0){
        alert('Digite um número')
    } else {
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}

    // ============================================


function contador(){
    let ini = document.getElementById('inicio')
    let i = Number(ini.value)

    let passo = document.getElementById('passo')
    let p = Number(passo.value)

    let fim = document.getElementById('fim')
    let f = Number(fim.value)

    let rescont = document.getElementById('rescont')

    rescont.innerHTML = 'Resultado: '

    if(p <= 0){
        alert('Digite um valor válido')
    } else {
        if(i<f){
            for(let c = i; c <= f; c+=p){
                rescont.innerHTML += `\u{1F449} ${c} `
            }
        } else {
            for(let c = i; c >= f; c-=p){
                rescont.innerHTML += `\u{1F449} ${c} `
            }
        }
        rescont.innerHTML += `\u{1F3C1}`
    }
    
}

    // ============================================

