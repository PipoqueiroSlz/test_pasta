class CalculadoraIMC{
    calcular(peso, altura){
       const imc = peso / (altura ^2)

        if(imc < 19){
            return "Magreza"
        }
        else if(imc >= 19 && imc < 24){
            return "Normal"
        }

        else if(imc >= 24 && imc < 29){
            return "Sobrepeso"
        }

        else if (imc > 29){
            return "Obesidade"
        }

        
    }
}

module.exports = CalculadoraIMC