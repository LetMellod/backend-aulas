const { calcularMediaAluno } = require('../src/calcularMediaAluno');

test("A função está definida?", function (){
    expect(calcularMediaAluno()).toBeDefined();
});

test("a1 e a2 estão indefinidos", function() {
    expect(() => calcularMediaAluno(undefined,3)).toThrow("Nota a1 ou a2 não definida.");
    expect(() => calcularMediaAluno(7, undefined)).toThrow("Nota a1 ou a2 não definida.");
});

test("validar se alguma nota for negativo", function() {
    expect(calcularMediaAluno(-7, 5, 2)).toThrow("Notas a1 ou a2 não podem ser negativas");
    expect(calcularMediaAluno(5, -9, 4)).toThrow("Notas a1 ou a2 não podem ser negativas");
});

test("a3 não informado", function(){
    expect(calcularMediaAluno(9, 6, undefined)).toBeCloseTo();
});

test("validar se a3 for negativo", function() {
    expect(calcularMediaAluno(1, 2, -3)).toThrow("Nota a3 não pode ser negativa");
});

test("combinação de a1 com a3", function(){
    expect(calcularMediaAluno(7,0,9)).toBeCloseTo(10);
    expect(calcularMediaAluno(2,8,9)).toBeCloseTo(14);
});

test("combinação de a2 com a3", function(){
    expect(calcularMediaAluno(1,7,10)).toBeCloseTo(14);
    expect(calcularMediaAluno(5,1,10)).toBeCloseTo(11);
});