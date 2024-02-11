let num = document.getElementById('num') // retorna o número que está no input. Nesse caso, vai servir para adicionar valores.

let lista = document.querySelector('select#lista') // retorna o select com o id lista. Nesse caso, vai servir para ser adicionado valores dentro da lista.

let resan = document.querySelector('p#resan') // retorna o paragrafo que está com o id resan. Nesse caso, vai servir para mostrar o resultado dos valores adicionados.

let valores = [] // Vetor, serve para guardar valores

function isNumero(n){ // essa função tem o objetivo de identificar se é um número entre 1 e 100
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){ // serve para identificar se o número já está no vetor, quando o resultado é -1 quer dizer que já está no vetor
    if(l.indexOf(Number(n)) != -1){ //indexOf procura o local do numero no vetor, se tiver algum igual, retorna como -1
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        resan.innerHTML = ''
        console.log(valores)
    } else {
        alert('Digite um número válido')
    }

    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    } else {
        let cad = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / cad
        // forma alternativa de calcular valores de uma array
        // for(let i = 0; i < valores.length; i++){
        //     soma += valores[i]
        // }
        // console.log(soma)
        //==============================================

        resan.innerHTML += `<p>Ao todo foram cadastrados ${cad} números</p>`
        resan.innerHTML += `<p>O maior número digitado foi ${maior}</p>`
        resan.innerHTML += `<p>O menor número digitado foi ${menor}</p>`
        resan.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        resan.innerHTML += `<p>A media de todos os valores é ${media}</p>`
    }
}
