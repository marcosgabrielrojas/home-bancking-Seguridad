class baseDeDatos {
    //                          Base de Datos EN JS.
    static datos() {
        //base de dato que simula venir del SERVER
        let cuentas = [{
                nombre: "MarcosRojas",
                user: "marcos",
                pass: "123",
                limite: 2000,
                saldo: 5000
            }, {
                nombre: "Roberto Ramires",
                user: "roberto",
                pass: 123,
                limite: 2000,
                saldo: 100000
            }
        ];

        //usamops el localStorage como base de dato 
        localStorage.setItem("miBaseDeDatos", JSON.stringify(cuentas));
        return cuentas;
    }
}