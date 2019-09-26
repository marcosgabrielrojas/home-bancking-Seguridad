class programa {
    //            <-------------Fase de estado de cuenta, extraccion, deposito y pago de Cuentas---------> 

    //                          compraracion de usuario
    static login() {
        let usuario = document.querySelector("#usuario").value;
        let clave = document.querySelector("#clave").value;
        let datoCuenta = baseDeDatos.datos();
        /*----------------------------------------------------*/
        // Se busca los datos del usuario y se lo guarda en una variable
        console.log("Funciona el login");

        // Busca El usuario



        // Comparacion y validacion de los usuario


        if (datoCuenta.user === usuario & datoCuenta.pass === clave) {
            console.log("el usuario entro");
            document.querySelector("#LoginPNL").style.display = "none";
            document.querySelector("#cuentaPNL").style.display = "block";
            document.querySelector("#SMSpass").innerHTML = "";
            localStorage.setItem("miCuenta", JSON.stringify(userBuscando))
        } else {
            console.log("no eres usuario del banco");
            document.querySelector("#SMSpass").innerHTML = "Contraceña o Usuario INCORRECTO";

        }
    }
    static loginWeb() {
        console.log("entro LoginWeb();");
        let userInput = document.querySelector("#usuario").value;
        let passInput = document.querySelector("#clave").value;
        Http.doGet("loginWeb() datos=" + " Usuario= " + userInput + "& clave= " + passInput);
    }
    //                          metodo Salir Cuenta
    static salir() {
        programa.borrar();
        programa.mostrar();


//         document.querySelector("#loginPNL").style.display = "block";
    }
    //                          funcionamiento de los botones 
    static button() {

        document.querySelector("#loginBTN").setAttribute("onclick", "programa.login();");
        document.querySelector("#loginServlent").setAttribute("onclick", "programa.loginWeb();");
        //document.querySelector("#buttonBRR").setAttribute("onclick","programa.borrar();");
        document.querySelector("#salir").setAttribute("onclick", "programa.salir();");
        document.querySelector("#consultarCuenta").setAttribute("onclick", "cuenta.consultarTpl();");
        document.querySelector("#extraer").setAttribute("onclick", "cuenta.extraerTpl()");
        document.querySelector("#extraerBTN").setAttribute("onclick", "cuenta.extraerCalculo();");
        document.querySelector("#depositar").setAttribute("onclick", "cuenta.depositarTpl();");
        document.querySelector("#depositarBTN").setAttribute("onclick", "cuenta.depocitarCalculo();");
        document.querySelector("#limite").setAttribute("onclick", "cuenta.limiteTpl();");
        document.querySelector("#limiteBTN").setAttribute("onclick", "cuenta.cambiarLimite()");
        /*<--------------------Pruebas DoPost---------------------->*/
        document.querySelector("#DepositarBTNW").setAttribute("onclick", "Http.doPost();");
    }
    // para ocultar o mostrar la cuenta Banco
    static borrar() {
        document.querySelector("#cuentaPNL").style.display = "none";

    }
    static mostrar() {
        document.querySelector("#LoginPNL").style.display = "block";

    }
}



programa.button();
programa.borrar();