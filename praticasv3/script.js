let agora = new Date()
let hora = agora.getHours()
let minutos = agora.getMinutes()
let ano = agora.getFullYear()
let mes = agora.getMonth()
let semana = agora.getDay()
let dia = agora.getDate()

let screen_bv = document.querySelector('h1#screen-bv')
let screen_hr = document.querySelector('p#screen-hr')

if(hora < 5){
    screen_bv.innerHTML = `<h1>Boa madrugada</h1>`
} else if (hora < 13){
    screen_bv.innerHTML = `<h1>Bom dia</h1>`
} else if (hora < 18){
    screen_bv.innerHTML = `<h1>Boa tarde</h1>`
} else {
    screen_bv.innerHTML = `<h1>Boa noite</h1>`
}

switch(mes){
    case 0:
        screen_hr.innerHTML += `${dia} de Janeiro de ${ano}`
        break

    case 1:
        screen_hr.innerHTML += `${dia} de Fevereiro de ${ano}`
        break

    case 2:
        screen_hr.innerHTML += `${dia} de Março de ${ano}`
        break
    
    case 3:
        screen_hr.innerHTML += `${dia} de Abril de ${ano}`
        break

    case 4: 
        screen_hr.innerHTML += `${dia} de Maio de ${ano}`
        break
    
    case 5:
        screen_hr.innerHTML += `${dia} de Junho de ${ano}`
        break

    case 6:
        screen_hr.innerHTML += `${dia} de Julho de ${ano}`
        break

    case 7:
        screen_hr.innerHTML += `${dia} de Agosto de ${ano}`
        break
    
    case 8:
        screen_hr.innerHTML += `${dia} de Setembro de ${ano}`
        break

    case 9:
        screen_hr.innerHTML += `${dia} de Outubro de ${ano}`
        break
    
    case 10:
        screen_hr.innerHTML += `${dia} de Novembro de ${ano}`
        break

    case 11:
        screen_hr.innerHTML += `${dia} de Dezembro de ${ano}`
        break
}


function noturno(){
    document.body.style.background = 'var(--cor1)'
    document.querySelector('nav').style.color = 'var(--cor3)'
    document.querySelectorAll('nav ul li a.links').style.color = 'var(--cor3)'
}

function diurno(){
    document.body.style.background = 'var(--cor7)'
    document.querySelector('nav').style.color = 'var(--cor1)'

}