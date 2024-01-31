


function aproveitamento(){
    var nome = document.getElementById('nome').value
    var nota1 = document.getElementById('nota1')
    var n1 = Number(nota1.value)
    var nota2 = document.getElementById('nota2')
    var n2 = Number(nota2.value)
    var resapr = document.getElementById('resapr')
    var media = (n1 + n2) / 2

    resapr.innerHTML = 'Resultado: '
    if (media <= 10 && media >= 9){ 
        resapr.innerHTML += `${nome} foi APROVADO com média ${media.toFixed(2)} e APROVEITAMENTO 'A'`
    } else if (media <= 8.9 && media >= 8) {
        resapr.innerHTML += `${nome} foi APROVADO com média ${media.toFixed(2)} e APROVEITAMENTO 'B'`
    } else if (media <= 7.9 && media >= 7) {
        resapr.innerHTML += `${nome} foi APROVADO com média ${media.toFixed(2)} e APROVEITAMENTO 'C'`
    } else if (media <= 6.9 && media >= 6) {
        resapr.innerHTML += `${nome} ficou de RECUPERAÇÃO com média ${media.toFixed(2)} e APROVEITAMENTO 'D'`
    } else if (media <= 5.9 && media >= 5){
        resapr.innerHTML += `${nome} ficou de RECUPERAÇÃO com média ${media.toFixed(2)} e APROVEITAMENTO 'E'`
    } else {
        resapr.innerHTML += `${nome} foi REAPROVADO com média ${media.toFixed(2)} e APROVEITAMENTO 'F'`
    }
}

function brougringo(){
    var pais = document.getElementById('brougr').value //.value serve para pegar o que foi escrito no input
    var resbr = document.getElementById('resbr')

    console.log(pais)

    if (pais == 'brasil' || pais == 'Brasil'){ // == significa igual, = significa recebe. O mais indicado nessa situação é ==
        resbr.innerHTML = 'Você é Brasileiro'
    } else {
        resbr.innerHTML = 'Você é Estrangeiro'
    }
}

function votaounvota(){
    var agora = new Date()
    var anoatual = agora.getFullYear()
    var anonascvoto = document.getElementById('anonascvoto')
    var anonasc = Number(anonascvoto.value)
    var idade = anoatual - anonasc
    var resvoto = document.getElementById('resvoto')


    if (idade < 16) {
        resvoto.innerHTML = `Você tem ${idade} anos e não vota<br>`

    } else if (idade < 18 || idade > 65) {
        resvoto.innerHTML = `Você tem ${idade} anos, por tanto seu voto é opcional<br>`
    } else {
        resvoto.innerHTML = `Você tem ${idade} anos, por tanto seu voto é obrigatório<br>`
    }
    resvoto.innerHTML += `Idade mínima para voto opcional: 16 anos <br>`
    resvoto.innerHTML += `Idade mínima para voto obrigatório: 18 anos`

}

function imparoupar(){
    var num = document.getElementById('num')
    var n = Number(num.value)
    var resioup = document.getElementById('resioup')

    if (n % 2 == 0){
        resioup.innerHTML = `${n} é um número PAR`
    } else {
        resioup.innerHTML = `${n} é um número IMPAR`
    }
}

function contar(){
    var inicio = document.getElementById('inicio')
    var i = Number(inicio.value)

    var fim = document.getElementById('fim')
    var f = Number(fim.value)
    
    var passo = document.getElementById('passo')
    var p = Number(passo.value)

    var contando = document.getElementById('contando')
    var rescont = document.getElementById('rescont')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('Campo sem preencher, tente novamente')
        rescont.innerHTML = ''
    } else if (i < f) {
        rescont.innerHTML = ''
        for(var c = i; c <= f; c += p){
            rescont.innerHTML += `\u{1F449} ${c} `
        }
        rescont.innerHTML += ` \u{1F3C1}`
    } else if (i > f){
        rescont.innerHTML = ''
        for(var c = i; f <= c; c -= p){
            rescont.innerHTML += `\u{1F449} ${c} `
        }
        rescont.innerHTML += ` \u{1F3C1}`
    } else {
        alert('Dados incorretos')
    }


}