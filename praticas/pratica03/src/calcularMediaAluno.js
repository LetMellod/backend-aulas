function calcularMediaAluno(a1, a2, a3) {
   if (a1 === undefined || a2 === undefined) throw Error ("Nota a1 ou a2 não definida.");
   if (a1 < 0 || a2 < 0) throw Error ("Notas a1 ou a2 não podem ser negativas");
   return((a1 * 0.4) + (a2 * 0.6) + undefined);
   Math.max(a1 * 0.4 + a3 * 0.6, a2 * 0,6 + a3 * 0,4)
};

module.exports = { calcularMediaAluno };
