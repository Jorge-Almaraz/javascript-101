const monitorEstudio = {
    desarrollador: "Jorge",
    metaSemanal: 10,
    horasRegistradas: [2, 1, 2],

    registrarSesion(horas) {
        if (horas <= 0) return;
        this.horasRegistradas.push(horas);
        console.log(`Sesión de ${horas}h agregada.`);
    },

    calcularTotalHoras() {
        let total = 0;
        for (const h of this.horasRegistradas) {
            total += h;
        }
        return total;
    },

    obtenerDiagnostico() {
        const total = this.calcularTotalHoras();
        const porcentaje = (total / this.metaSemanal) * 100;
        return {
            desarrollador: this.desarrollador,
            totalHoras: total,
            metaCumplida: total >= this.metaSemanal,
            porcentaje: `${porcentaje.toFixed(1)}%`
        };
    }
};

monitorEstudio.registrarSesion(3);
monitorEstudio.registrarSesion(3);
console.log(monitorEstudio.obtenerDiagnostico());