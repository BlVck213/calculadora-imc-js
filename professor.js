function calcularImc(peso , altura){
return imc = peso / (altura ** 2).toFixed(1)
}
function classificarImc(imc){
    if(imc <= 18.5){
         classificacao = "você está abaixo do peso"
    }else if (imc >= 18.5 && imc <= 24.9){
        classificacao = "você está no peso ideal"
    }else if (imc >= 25 && imc <= 29.9){
        classificacao = "você está acima do peso"
    
    }else if(imc >= 30 && imc <= 34.9){
        classificacao = "você está com obesidade grau I"
    }else if(imc >= 35 && imc <= 39.9){
        classificacao = "você está com obesidade grau II"
        
    }else if(imc >= 40){
        classificacao = "você está com obesidade grau III"
        
    }  
    return classificacao
}



    function exibirImc(){
    const nome = document.getElementById("nome").value
    const altura = parseFloat(document.getElementById("altura").value)
    const peso = parseFloat(document.getElementById("peso").value)

    const resultado = document.getElementById("resultado")


    if(nome.trim() !== '' && !isNaN(altura) && !isNaN(peso)){  

    
        const imc = calcularImc(peso, altura)

        const classificacao = classificarImc(imc)

        resultado.textContent = nome + " seu IMC é " + imc.toFixed(1) + " e você está " + classificacao
        

    }else{  
        resultado.textContent = "Preencha todos os campos!!!"                                                       
    }
}

document.getElementById("calcular")
    .addEventListener("click", exibirImc)

