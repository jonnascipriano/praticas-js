let agora = new Date()
let hora = agora.getHours()
let minutos = agora.getMinutes()
let ano = agora.getFullYear()
let mes = agora.getMonth()
let semana = agora.getDay()
let dia = agora.getDate()

let comp = document.querySelector('legend#comp')
let p = document.querySelector('p#teste')

if(hora < 5){
    comp.innerHTML = `<h1>Boa madrugada</h1>`
} else if (hora < 13){
    comp.innerHTML = `<h1>Bom dia</h1>`
} else if (hora < 18){
    comp.innerHTML = `<h1>Boa tarde</h1>`
} else {
    comp.innerHTML = `<h1>Boa noite</h1>`
}

switch(mes){
    case 0:
        comp.innerHTML += `${dia} de Janeiro de ${ano}`
        break

    case 1:
        comp.innerHTML += `${dia} de Fevereiro de ${ano}`
        break

    case 2:
        comp.innerHTML += `${dia} de Março de ${ano}`
        break
    
    case 3:
        comp.innerHTML += `${dia} de Abril de ${ano}`
        break

    case 4: 
        comp.innerHTML += `${dia} de Maio de ${ano}`
        break
    
    case 5:
        comp.innerHTML += `${dia} de Junho de ${ano}`
        break

    case 6:
        comp.innerHTML += `${dia} de Julho de ${ano}`
        break

    case 7:
        comp.innerHTML += `${dia} de Agosto de ${ano}`
        break
    
    case 8:
        comp.innerHTML += `${dia} de Setembro de ${ano}`
        break

    case 9:
        comp.innerHTML += `${dia} de Outubro de ${ano}`
        break
    
    case 10:
        comp.innerHTML += `${dia} de Novembro de ${ano}`
        break

    case 11:
        comp.innerHTML += `${dia} de Dezembro de ${ano}`
        break
}
