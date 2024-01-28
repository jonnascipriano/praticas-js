var valor = document.getElementById('valor')
var v = Number(valor.value)

var qndparc = document.getElementById(qndparc)

var f10x = document.getElementById('f10x')

if (f10x.checked){
    var c = 1
    while (c <= 10){
        var item = document.createElement('option')
        item.text = `${c}x`
        item.value = `${c} parc`
        qndparc.appendChild(item)
        c++
        item.innerHTML = 'teste'
    }
}