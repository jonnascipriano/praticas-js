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

    resconv.innerHTML = ''
    resconv.innerHTML += `<p><strong>A distância de ${metros} metros, corresponte a...</strong></p>`
    resconv.innerHTML += `<p>${km.toFixed(2)} quilômetros (Km)</p>`
    resconv.innerHTML += `<p>${hm} hectômetros (Hm)</p>`
    resconv.innerHTML += `<p>${dam} decâmetros (Dam)</p>`
    resconv.innerHTML += `<p>${dm} decímetros (dm)</p>`
    resconv.innerHTML += `<p>${cm} (cm)</p>`
    resconv.innerHTML += `<p>${mm} milímetros (mm)</p>`
}

    // ============================================
    
function convtemp(){
    let tempc = Number(prompt('Digite uma temperatura em ºC (Celsius)'))
    let resconversor = document.getElementById('resconversor')

    let tempk = tempc + 273.15
    let tempf = (tempc * 1.8) + 32

    resconversor.innerHTML = ''
    resconversor.innerHTML += `<p><strong>A temperatura em ${tempc}ºC, corresponde a...</strong></p>`
    resconversor.innerHTML += `<p>${tempk.toFixed(2)}ºK (Kelvin)</p>`
    resconversor.innerHTML += `<p>${tempf.toFixed(2)}ºF (Fahrenheit)</p>`

}

    // ============================================

function desconto(){
    let produtodesc = prompt('Qual é o produto que você está comprando?')
    let precoprod = Number(prompt(`Qual é o preço de '${produtodesc}'`))
    let desconto = precoprod * 0.1
    let precocomdesconto = precoprod - desconto
    let resdesc = document.getElementById('resdesc')

    resdesc.innerHTML = ''
    resdesc.innerHTML += `<p><strong>Calculando desconto de 10% para ${produtodesc}</strong></p>`
    resdesc.innerHTML += `<p>O preço original era R$${precoprod.toFixed(2)}</p>`
    resdesc.innerHTML += `<p>Você acaba de ganhar R$${desconto.toFixed(2)} (-10%)</p>`
    resdesc.innerHTML += `<p>No fim, você vai pagar R$${precocomdesconto.toFixed(2)} no produto ${produtodesc}</p>`
}

    // ============================================

function reajuste(){
    let funcionario = prompt('Qual é o nome do funcionário?')
    let salario = Number(prompt(`Qual é o salário de ${funcionario}`))
    let porc_reaj = Number(prompt(`O salário de ${funcionario} vai ser reajustado em qual porcentagem?`))
    let resreaj = document.getElementById('resreaj')
    let porcsalarionovo = salario * (porc_reaj/100)
    let salarionovo = salario + porcsalarionovo

    resreaj.innerHTML = ''
    resreaj.innerHTML += `<p><strong>${funcionario} recebeu um aumento salarial!<strong></p>`
    resreaj.innerHTML += `<p>O salário atual era R$${salario.toFixed(2)}</p>`
    resreaj.innerHTML += `<p>Com um aumento de ${porc_reaj}%, o salário vai aumentar R$${porcsalarionovo.toFixed(2)} no próximo mês.</p>`
    resreaj.innerHTML += `<p>E a partir daí, ${funcionario} vai passar a ganhar R$${salarionovo.toFixed(2)}</p>`
}

    // ============================================

function bhaskara(){
    let a = Number(prompt('Qual é o valor de a?'))
    let b = Number(prompt('Qual é o valor de b?'))
    let c = Number(prompt('Qual é o valor de c?'))
    let resb = document.querySelector('p#resb')
    let delta = b*b - (4*a*c)

    resb.innerHTML = ''
    resb.innerHTML += `<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>`
    resb.innerHTML += `<p>&Delta; = ${b}² - 4x${a}x${c}</p>`
    resb.innerHTML += `<p><mark>&Delta; = ${delta}</mark></p>`
}

    // ============================================

function bissexto(){
    let ano = Number(document.getElementById('ano').value)
    let resbi = document.getElementById('resbi')

    resbi.innerHTML = 'Resposta: '
    if(ano%400 == 0){
        resbi.innerHTML += `É ano bissexto`
    } else if (ano%4==0 && ano%100!=0){
        resbi.innerHTML += `É ano bissexto`
    } else {
        resbi.innerHTML += `Não é bissexto`
    }

}

    // ============================================

function mudouPreco(){
    let precoAnterior = Number(document.getElementById('precoanterior').value)
    let precoAtual = Number(document.getElementById('precoatual').value)
    let diferencaPreco = precoAtual - precoAnterior
    let respreco = document.getElementById('respreco')
    let porc_dif = (diferencaPreco / precoAnterior) * 100

    respreco.innerHTML = ''
    if(precoAtual > precoAnterior){
        respreco.innerHTML += `<p><strong>Analisando os valores informados</strong></p>`
        respreco.innerHTML += `<p>O produto custava R$${precoAnterior.toFixed(2).replace('.',',')} e agora custa R$${precoAtual.toFixed(2).replace('.',',')}.</p>`
        respreco.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        respreco.innerHTML += `<p>O preço subiu R$${diferencaPreco.toFixed(2).replace('.',',')} em relação ao preço anterior.</p>`
        respreco.innerHTML += `<p>Uma variação de ${porc_dif.toFixed(1)}% pra cima.</p>`
    } else if (precoAtual < precoAnterior){
        respreco.innerHTML += `<p><strong>Analisando os valores informados</strong></p>`
        respreco.innerHTML += `<p>O produto custava R$${precoAnterior.toFixed(2).replace('.',',')} e agora custa R$${precoAtual.toFixed(2).replace('.',',')}.</p>`
        respreco.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        respreco.innerHTML += `<p>O preço diminuiu R$${diferencaPreco.toFixed(2).replace('.',',')} em relação ao preço anterior.</p>`
        respreco.innerHTML += `<p>Uma variação de ${porc_dif.toFixed(1)}% pra baixo.</p>`
    } else {
        respreco.innerHTML = `<strong>O produto permaneceu o mesmo valor.</strong>`
    }

}

    // ============================================

function situacaoAluno(){
    let aluno = prompt('Qual é o nome do aluno?')
    let nota1 = Number(prompt(`Primeira nota de ${aluno}`))
    let nota2 = Number(prompt(`Segunda nota de ${aluno}`))
    let media = (nota1 + nota2) / 2
    let resnota = document.getElementById('resnota')

    resnota.innerHTML = ''

    if(media < 3){
        resnota.innerHTML += `<p><strong>Analisando a situação de ${aluno}</strong></p>`
        resnota.innerHTML += `<p>Com as notas ${nota1.toFixed(2)} e ${nota2.toFixed(2)} a <strong> média é ${media.toFixed(2)}</strong></p>`
        resnota.innerHTML += `<p>Com a média abaixo de 3.0, o aluno está <mark id="reprovado">REPROVADO</mark></p>`
    } else if (media>3 && media<6){
        resnota.innerHTML += `<p><strong>Analisando a situação de ${aluno}</strong></p>`
        resnota.innerHTML += `<p>Com as notas ${nota1.toFixed(2)} e ${nota2.toFixed(2)} a <strong> média é ${media.toFixed(2)}</strong></p>`
        resnota.innerHTML += `<p>Com a média entre 3.0 e 6.0, o aluno está em <mark id="recuperacao">RECUPERAÇÃO</mark></p>`
    } else {
        resnota.innerHTML += `<p><strong>Analisando a situação de ${aluno}</strong></p>`
        resnota.innerHTML += `<p>Com as notas ${nota1.toFixed(2)} e ${nota2.toFixed(2)} a <strong> média é ${media.toFixed(2)}</strong></p>`
        resnota.innerHTML += `<p>Com a média acima de 6.0, o aluno está <mark id="aprovado">APROVADO</mark></p>`
    }

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

