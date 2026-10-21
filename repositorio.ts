//1. interfaz base que exige un identificador obligatorio 
interface RegistroBase {
    readonly id: number;
}

//2.Entidad especifica de usuario para nuestro sistema
interface UsuarioSistema extends RegistroBase {
    nombre: string;
    email: string;
    activo: boolean;
}
//3.Clase generica con restriccion (T debe cumpli con ResistroBase)
class RepositorioEnMemoria<T extends RegistroBase> {
    //El arreglo es privado : no puede ser modificado desde fuera de la clase 
    private elementos: T[] = [];

    //agregar elemento
    agregar(item: T): void {
        this.elementos.push(item);
        console.log(
            `[Repositorio] Elemento guardado con ID:${item.id}`
        );
    }

    //Buscar por ID
    buscarPorId(id: number): T | undefined {
        return this.elementos.find(elem => elem.id === id);
    }

    //Retomar copia de todos los registros
    listar(): T[] {
        return [...this.elementos];
    }
}   //4. Instaciacion y prueba del repositorio
const repoUsuarios = new RepositorioEnMemoria<UsuarioSistema>();
repoUsuarios.agregar({
    id: 1, nombre: "Jorge Almaraz", email: "almarazlarajorge@gmail.com", activo: true
});
repoUsuarios.agregar({
    id: 2, nombre: "Nazareth Garcia", email: "nazareth.garcia@example.com", activo: false
});

//5. Busqueda y validacion 
const encontrado = repoUsuarios.buscarPorId(1);
if (encontrado) {
    console.log(`Usuario encontrado: ${encontrado.nombre} - ${encontrado.email}`);
} else {
    console.log("Usuario no encontrado");
}
console.log("Total de usuarios almacenados:", repoUsuarios.listar().length);