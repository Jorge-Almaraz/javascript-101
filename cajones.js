// Nuestro estante: horas de estudio de lunes a domingo
const horasSemana = [1, 2, 1, 0, 2, 1, 2];

// Una bolsa vacía para ir juntando las horas
let totalHoras = 0;

// El inspector visita cada cajón de la lista
for (let horas of horasSemana) {
    totalHoras = totalHoras + horas;
}

console.log("Horas registradas en la semana:", horasSemana);
console.log("Total de horas estudiadas:", totalHoras);

// Tomamos una decisión con el total acumulado
if (totalHoras >= 7) {
    console.log("¡Meta semanal cumplida! Gran trabajo.");
} else {
    console.log("Faltaron horas esta semana. ¡A recuperar el ritmo!");
}