const Calculadora = require('./calculadora')

const calc = new Calculadora()

it('Deve somar os dois números', ()=>{
    expect(calc.soma(10, 10)).toBe(20)
})

it('Deve subtrair os dois números', ()=>{
    expect(calc.subtracao(10, 6)).toBe(4)
})

it('Deve multiplicar os dois números', ()=>{
    expect(calc.multi(10, 6)).toBe(60)
})

it('Deve dividir os dois números', ()=>{
    expect(calc.divisao(10, 2)).toBe(5)
})