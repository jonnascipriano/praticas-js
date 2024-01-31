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