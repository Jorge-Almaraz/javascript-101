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

// Decisión: Comprobar si cumples con tu meta semanal de estudio
let metaSemanal = 5; // Tu meta mínima: 5 horas por semana
if (horasPorSemana >= metaSemanal) {
    console.log("¡Excelente ritmo! Estás cumpliendo tu meta de estudio.");
} else {
    console.log("Te falta un poco para alcanzar tu meta semanal. ¡A meterle ganas!");
}

// Definimos la máquina (la función)
function calcularHorasTotales(horasDiarias, diasTotales) {
    let resultado = horasDiarias * diasTotales;
    return resultado; // return significa: "devuelve este valor"
}

// Ahora usamos la máquina con distintos datos
let horasEnUnMes = calcularHorasTotales(1, 30);
let horasEnMedioAno = calcularHorasTotales(1, 180);
// La función recibe: días, horas que estudias al día y tu meta requerida
function evaluarProgreso(dias, horasDiarias, metaRequerida) {
    let totalHoras = dias * horasDiarias;

    if (totalHoras >= metaRequerida) {
        return "¡Meta superada! Lograste " + totalHoras + " horas.";
    } else {
        let faltante = metaRequerida - totalHoras;
        return "Te faltaron " + faltante + " horas para la meta. ¡A meterle ganas!";
    }
}
// Probamos la misma función con dos situaciones distintas:
let reporteSemanal = evaluarProgreso(7, 1, 5);   // 7 días, 1 hora diaria, meta de 5
let reporteMensual = evaluarProgreso(30, 1, 40); // 30 días, 1 hora diaria, meta de 40

// 4. Mostrar en pantalla
console.log("Perfil del estudiante:");
console.log("Nombre:", nombre);
console.log("Meta:", rol);
console.log("Horas que acumularás en un año:", totalHorasAno);
console.log("Horas que acumularás por semana:", horasPorSemana);
console.log("Horas de estudio en un mes (30 días):", horasEnUnMes);
console.log("Horas de estudio en medio año (180 días):", horasEnMedioAno);
console.log("--- REPORTE 1 ---");
console.log(reporteSemanal);
console.log("--- REPORTE 2 ---");
console.log(reporteMensual);