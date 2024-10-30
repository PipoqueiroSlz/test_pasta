const CalculadoraIMC = require('./calculadoraIMC')

const calcIMC = new CalculadoraIMC()

it('Deve acusar o resultado Obesidade', ()=>{
    expect(calcIMC.calcular(92, 1.72)).toBe("Obesidade")
})
it('Deve acusar o resultado Normal', ()=>{
    expect(calcIMC.calcular(68, 1.72)).toBe("Normal")
})
it('Deve acusar o resultado Magreza', ()=>{
    expect(calcIMC.calcular(48, 1.72)).toBe("Magreza")
})
it('Deve acusar o resultado Sobrepeso', ()=>{
    expect(calcIMC.calcular(85, 1.72)).toBe("Sobrepeso")
})

