// 1. Texto (String)
const nombre = "Jorge";
const rol = "Desarrollador en entrenamiento";

// 2. Números (Number)
let edad = 25;
let horasEstudioDiarias = 1;
let diasEnElAno = 365;

// 3. Operaciones matemáticas
let totalHorasAno = horasEstudioDiarias * diasEnElAno;
let diasPorSemana = 7;
let horasPorSemana = horasEstudioDiarias * diasPorSemana;

// 4. Mostrar en pantalla
console.log("Perfil del estudiante:");
console.log("Nombre:", nombre);
console.log("Meta:", rol);
console.log("Horas que acumularás en un año:", totalHorasAno);
console.log("Horas que acumularás por semana:", horasPorSemana);

// Decisión: Comprobar si cumples con tu meta semanal de estudio
let metaSemanal = 5; // Tu meta mínima: 5 horas por semana

if (horasPorSemana >= metaSemanal) {
    console.log("¡Excelente ritmo! Estás cumpliendo tu meta de estudio.");
} else {
    console.log("Te falta un poco para alcanzar tu meta semanal. ¡A meterle ganas!");
}