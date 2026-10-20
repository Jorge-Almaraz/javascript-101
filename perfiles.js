// 1. Objeto base
const perfilInicial = {
    id: 101,
    nombre: "Jorge",
    tecnologias: ["JavaScript", "Node.js"],
    horasEstudio: 10
};

// 2. Desestructuración
const { nombre, tecnologias, horasEstudio } = perfilInicial;
console.log(`Usuario: ${nombre} | Horas iniciales: ${horasEstudio}`);

// 3. Inmutabilidad con Spread Operator (...)
const perfilActualizado = {
    ...perfilInicial,
    horasEstudio: perfilInicial.horasEstudio + 2,
    ultimaSesion: "Objetos y desestructuracion"
};

console.log("Horas original (intacto):", perfilInicial.horasEstudio);
console.log("Horas actualizado:", perfilActualizado.horasEstudio);
console.log("¿Son el mismo objeto en memoria?:", perfilInicial === perfilActualizado);

// 4. Acumulador con for...of
const usuariosBD = [
    { id: 1, usuario: "Jorge", horas: 12 },
    { id: 2, usuario: "Ana", horas: 25 },
    { id: 3, usuario: "Carlos", horas: 8 }
];

let totalHoras = 0;
for (const u of usuariosBD) {
    totalHoras += u.horas;
}
console.log(`Total acumulado: ${totalHoras}h`);