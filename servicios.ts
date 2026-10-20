// Definimos el contrato (interfaz)
interface Desarrollador {
    nombre: string;
    metaHoras: number;
    activo: boolean;
}

// Creamos el objeto siguiendo esa interfaz
const perfil: Desarrollador = {
    nombre: "Jorge",
    metaHoras: 10,
    activo: true
};

console.log(`¡Hola, ${perfil.nombre}! Tu entorno TypeScript está funcionando al 100%.`);