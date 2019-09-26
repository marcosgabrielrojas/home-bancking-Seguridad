class Http{
    static doGet(servlet){
        fetch(servlet,{method :"GET"});
    }
    static doPost(){
        let miDepocito={};
        
        miDepocito.enPesos =document.querySelector("#depositarInput").value;
        let DepocitoJSON =JSON.stringify(miDepocito);
        fetch("Web",{
           method: "POST",
           body: DepocitoJSON
        });
    }
}

