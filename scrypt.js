const nome = document.getElementById("nome")
const altura = document.getElementById("altura")
const peso = document.getElementById("peso")
const resultado = document.getElementById("resultado")



function calculadora(){
    
        if(nome.value !== '' && altura.value !== '' && peso.value !== '' ){
        
            const imc = parseFloat(peso.value) / parseFloat(altura.value ** 2)
         

            if(imc <= 18.5){
                const mensagem = "você está abaixo do peso"
                resultado.textContent = nome.value + " seu IMC é " + imc.toFixed(1) + " e " + mensagem
            }else if (imc >= 18.5 && imc <= 24.9){
                const mensagem = "você está no peso ideal"
                resultado.textContent = nome.value + " seu IMC é " + imc.toFixed(1) + " e " + mensagem
            }else if (imc >= 25 && imc <= 29.9){
                const mensagem = "você está acima do peso"
                resultado.textContent = nome.value + " seu IMC é " + imc.toFixed(1)  + " e " + mensagem
            }else if(imc >= 30 && imc <= 34.9){
                const mensagem = "você está com obesidade grau I"
                resultado.textContent = nome.value + " seu IMC é " + imc.toFixed(1) + " e " + mensagem
            }else if(imc >= 35 && imc <= 39.9){
                const mensagem = "você está com obesidade grau II"
                resultado.textContent = nome.value + " seu IMC é " + imc.toFixed(1)  + " e " + mensagem
            }else if(imc >= 40){
                const mensagem = "você está com obesidade grau III"
                resultado.textContent = nome.value + " seu IMC é " + imc.toFixed(1)  + " e " + mensagem
            }  

            
            
        }else{
            alert("Preencha todos os campos")

        }

     

    }

calcular.addEventListener("click", calculadora)

