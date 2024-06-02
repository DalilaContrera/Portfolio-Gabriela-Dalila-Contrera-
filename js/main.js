import esUnNombre from "./validar-nombre.js";

const campoDeFormulario= document.querySelectorAll("[required]");

campoDeFormulario.forEach((campo)=>{
    campo.addEventListener("blur", ()=> verificarCampo(campo))

});

function verificarCampo(campo){
    if(nombre)
        {
            esUnNombre(campo);
            console.log(nombre);
        }
        else{
            alert("El formato ingresado no es valido");
            nombre.focus();
            verificar==false;
   
        }

}

