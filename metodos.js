// Nuestra lista inicial de horas diarias
const horasSemana = [1, 2, 1, 0, 2, 1];

console.log("Horas antes del domingo:", horasSemana);

// 1. Agregamos las horas del domingo al final de la lista
horasSemana.push(3);
console.log("Horas con domingo incluido:", horasSemana);

// 2. Filtramos: queremos solo los días de estudio intenso (más de 1 hora)
const diasIntensos = horasSemana.filter(horas => horas > 1);

console.log("Días con estudio intenso (> 1 hr):", diasIntensos);
console.log("Cantidad de días intensos:", diasIntensos.length);