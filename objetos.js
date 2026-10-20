// 1. Objeto individual
const desarrollador = {
    nombre: "Jorge",
    metaSemanal: 7,
    lenguajes: ["JavaScript", "TypeScript"],
    activo: true
};

console.log(`Desarrollador: ${desarrollador.nombre}`);
console.log(`Meta semanal: ${desarrollador.metaSemanal} horas`);

// 2. Colección de objetos (simulando respuesta de una API)
const modulos = [
    { id: 1, titulo: "Fundamentos JS", completado: true, horasDedicadas: 6 },
    { id: 2, titulo: "Objetos y Estructuras", completado: false, horasDedicadas: 2 },
    { id: 3, titulo: "TypeScript 101", completado: false, horasDedicadas: 0 }
];

// 3. Filtrar pendientes
const pendientes = modulos.filter(m => m.completado === false);
console.log("Módulos pendientes:", pendientes);

// 4. Transformar (.map) con operador ternario
const resumenModulos = modulos.map(m => {
    const estado = m.completado ? "Listo" : "En progreso";
    return `[${estado}] ${m.titulo} (${m.horasDedicadas}h)`;
});

console.log("Resumen del plan:", resumenModulos);