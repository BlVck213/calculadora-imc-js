const nome = document.getElementById("nome")
const altura = document.getElementById("altura")
const peso = document.getElementById("peso")
const resultado = document.getElementById("resultado")


function calculadora(){
        if(nome.value !== '' && altura.value !== '' && peso.value !== ''){
            const imc = parseFloat(peso.value) / parseFloat(altura.value ** 2)
            resultado.textContent = nome + "seu IMC é " + imc + " e você está"
            

        }else{
            alert("Preencha todos os campos")

        }
}

calcular.addEventListener("click", calculadora)