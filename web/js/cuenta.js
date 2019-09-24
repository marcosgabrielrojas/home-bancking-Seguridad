class cuenta {
    static consultarTpl() {
        console.log("funcionaCuenta y consultarTpl()");
        document.querySelector("#masterTpl").innerHTML = document.querySelector("#consultarTpl").innerHTML;
        // document.querySelector("#consultarTpl").style.display = "block";
        let  misDatos = JSON.parse(localStorage.getItem("miBaseDeDatos")); // que hace en Realidad Duda Profe

        document.querySelector("#nombreUser").innerHTML = misDatos.nombre;
        document.querySelector("#saldo").innerHTML = "$" + misDatos.saldo;
        document.querySelector("#limite-extraccion").innerHTML = "$" + misDatos.limite;
    }
    static extraerTpl() {
        document.querySelector("#masterTpl").innerHTML = document.querySelector("#extraerTpl").innerHTML;


    }
    static extraerCalculo() {
        console.log("Funciona boton Extraer Calculo");
        if (document.querySelector("#extraerInput").value <= 0) {
            document.querySelector("#pnlMensajeExtraer").innerHTML = "No se puede hacer la extraccion tiene que ser Mayor a 0.";
        } else {
            let misDatos = JSON.parse(localStorage.getItem("miBaseDeDatos"));
            if (document.querySelector("#extraerInput").value >= misDatos.limite) {
                document.querySelector("#pnlMensajeExtraer").innerHTML = "NO se Puede hacer la Extaccion ingrese un numero menor.";
            } else {
                console.log("face de calculo+ Cuenta");
                console.log("Saldo antes de el calculo " + misDatos.saldo);
                misDatos.saldo = misDatos.saldo - document.querySelector("#extraerInput").value;
                localStorage.setItem("miBaseDeDatos", JSON.stringify(misDatos));
                console.log("Saldo Despues de la Extraccion");
                document.querySelector("#pnlMensajeExtraer").innerHTML = "Extraccion Realizado por $" + document.querySelector("#extraerInput").value;
            }
            
        }
    }

    static depositarTpl() {
        console.log("hola Depocito");
        document.querySelector("#masterTpl").innerHTML = document.querySelector("#depositarTpl").innerHTML;
    }
    static depocitarCalculo() {
        if (document.querySelector("#depositarInput").value <= 0) {
            document.querySelector("#pmlMensajeDepositar").innerHTML = "Debe ingresar un valor :D";
        } else {
            let misDatos = JSON.parse(localStorage.getItem("miBaseDeDatos"));
            misDatos.saldo = parseInt(document.querySelector("#depositarInput").value) + misDatos.saldo;
            localStorage.setItem("miBaseDeDatos", JSON.stringify(misDatos));
            document.querySelector("#pmlMensajeDepositar").innerHTML = "Se a efectuado su ingreso Monetario Saldo actual $" + misDatos.saldo;
        }
    }
    static limiteTpl() {
        document.querySelector("#masterTpl").innerHTML = document.querySelector("#limiteTpl").innerHTML;
    }
    static cambiarLimite() {
        console.log("entro cambiarLimite();");
        let misDatos =JSON.parse(localStorage.getItem("miBaseDeDatos"));
        if (document.querySelector("#limiteInput").value <= 0) {
            console.log("entro fase 1 de if rebote");
            document.querySelector("#pnlLimite").innerHTML = "tiene que ingresar un numero";
        } else {
            console.log("else");
            document.querySelector("#pnlLimite").innerHTML = "";
            if (document.querySelector("#limiteInput").value <= 10001 ) {
                misDatos.limite =document.querySelector("#limiteInput").value;
                localStorage.setItem("miBaseDeDatos",JSON.stringify(misDatos));
                document.querySelector("#pnlLimite").innerHTML = "Limite de Extraccion Actualizado Verifique para confirmar :D";
            } else{
                document.querySelector("#pnlLimite").innerHTML="El Limite es muy Grande tiene que ser menor que $10000";
            }
            
        }
    }
}