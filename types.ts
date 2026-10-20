// 1. Tipo literal: solo permite estos tres valores exactos
type Prioridad = "Baja" | "Media" | "Alta";

// 2. Interfaz para una tarea técnica
interface Tarea {
    id: number;
    titulo: string;
    prioridad: Prioridad;
    horas: number;
    completada: boolean;
}

// 3. Arreglo fuertemente tipado: Tarea[]
const tareas: Tarea[] = [
    { id: 1, titulo: "Configurar TypeScript", prioridad: "Alta", horas: 1, completada: true },
    { id: 2, titulo: "Aprender tipos y arreglos", prioridad: "Alta", horas: 2, completada: false },
    { id: 3, titulo: "Crear servidor básico en Node", prioridad: "Media", horas: 3, completada: false }
];

// 4. Función con parámetro y retorno tipados
function filtrarPendientes(lista: Tarea[]): Tarea[] {
    return lista.filter(item => !item.completada);
}

// 5. Ejecución
console.log("--- Tareas Pendientes ---");
const pendientes = filtrarPendientes(tareas);
console.log(pendientes);
