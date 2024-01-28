var agora = new Date()
var dia = agora.getDate()
var mes = agora.getMonth()
var ano = agora.getFullYear()
var diasem = agora.getDay()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var boas_vindas = document.getElementById('hrs')
var bv = document.getElementById('bv')



boas_vindas.innerHTML = `São ${hora}h${minuto}m  `

switch(diasem){
    case 0:
        boas_vindas.innerHTML += 'Domingo'
        break
    case 1:
        boas_vindas.innerHTML += 'Segunda-Feira'
        break
    case 2:
        boas_vindas.innerHTML += 'Terça-Feira'
        break
    case 3:
        boas_vindas.innerHTML += 'Quarta-Feira'
        break
    case 4:
        boas_vindas.innerHTML += 'Quinta-Feira'
        break
    case 5:
        boas_vindas.innerHTML += 'Sexta-Feira'
        break
    case 6:
        boas_vindas.innerHTML += 'Sábado'
}

boas_vindas.innerHTML += ` dia ${dia} `


switch(mes){
    case 0:
        boas_vindas.innerHTML += 'Janeiro'
        break
    
    case 1:
        boas_vindas.innerHTML += 'Fevereiro'
        break
    
    case 2:
        boas_vindas.innerHTML += 'Março'
        break

    case 3:
        boas_vindas.innerHTML += 'Abril'
        break
    
    case 4:
        boas_vindas.innerHTML += 'Maio'
        break

    case 5:
        boas_vindas.innerHTML += 'Junho'
        break
    
    case 6:
        boas_vindas.innerHTML += 'Julho'
        break
        
    case 7:
        boas_vindas.innerHTML += 'Agosto'
        break

    case 8:
        boas_vindas.innerHTML += 'Setembro'
        break
    
    case 9:
        boas_vindas.innerHTML += 'Outubro'
        break
    
    case 10:
        boas_vindas.innerHTML += 'Novembro'
        break
    
    case 11:
        boas_vindas.innerHTML += 'Dezembro'
}


    boas_vindas.innerHTML += ` de ${ano}`

    if(hora < 12){
        bv.innerHTML = 'Bom dia'
        document.body.style.background = '#523'
    } else if (hora < 18){
        bv.innerHTML = 'Boa tarde'
        document.body.style.background = '#777'
    } else {
        bv.innerHTML = 'Boa noite'
    }
