// Nuestra lista inicial de horas diarias
const horasSemana = [1, 2, 1, 0, 2, 1];
// 1. Agregamos las horas del domingo al final de la lista
horasSemana.push(3);
// 2. Filtramos: queremos solo los días de estudio intenso (más de 1 hora)
const diasIntensos = horasSemana.filter(horas => horas > 1);
// 3. Transformación: convertir cada día de horas a minutos
const minutosPorDia = horasSemana.map(horas => horas * 60);
// 4. Transformación de texto: crear etiquetas para una interfaz
const etiquetas = horasSemana.map(horas => `Sesión de ${horas}h`);

console.log("Etiquetas para la interfaz:", etiquetas);
console.log("Horas antes del domingo:", horasSemana);
console.log("Horas con domingo incluido:", horasSemana);
console.log("Días con estudio intenso (> 1 hr):", diasIntensos);
console.log("Cantidad de días intensos:", diasIntensos.length);
console.log("Horas por día:", horasSemana);
console.log("Equivalente en minutos por día:", minutosPorDia);