function insert(num){
    let numero = document.getElementById('input').value
    document.getElementById('input').value = numero + num
}
function limpar(){
    document.getElementById('input').value = ""
}
window.onload = () =>{
    document.getElementById('input').value = ""
}
function back(){
    let resultado =  document.getElementById('input').value
    document.getElementById('input').value = resultado.substring(0, resultado.length -1)
}
function calcular(){
    let resultado = document.getElementById('input').value
    if(resultado){
        document.getElementById('input').value = eval(resultado)
    }
    else {
        document.getElementById('input').value = 'Erro'
    }
}