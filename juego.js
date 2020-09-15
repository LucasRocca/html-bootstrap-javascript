
var intentos = 0 ;

document.getElementById("btnEnviarAdivinanza").addEventListener("click",function validarFormulario(){
    var entrada = document.getElementById("txtCantJugadores").value;
  
    intentos++;
        switch(intentos){
            case 1: {
                if (entrada == 10){
                    alert("Has acertado");
                    document.getElementById("btnEnviarAdivinanza").setAttribute('hidden',"");
                }else{
                    alert("has errado el primer intento"); 
                }
            }
            break;
            case 2:{
                if (entrada == 10){
                    alert("Has acertado en el segundo intento"); 
                    document.getElementById("btnEnviarAdivinanza").setAttribute('hidden',"");
                }else{
                    alert("has errado el segundo intento, el numero es mayor a 5 y menor a 15"); 
                } 
            } 
            break;
            case 3: {
                if (entrada == 10){
                    alert("Has acertado en el tercer intento");
                    document.getElementById("btnEnviarAdivinanza").setAttribute('hidden',"");
                }else{
                    alert("has errado el tercer intento, el numero tiene dos digitos y termina con cero");
                } 
            } 
            break;
            case 4: {
                if (entrada == 10){
                    alert("Has acertado en el ultimo intento");
                    document.getElementById("btnEnviarAdivinanza").setAttribute('hidden',"");
                }else{
                    alert("no te quedan mas intentos"); 
                    document.getElementById("btnEnviarAdivinanza").setAttribute('hidden',"");
                    
                } 
            }
            break;
            default: break;
        }
      console.log(intentos);
    });

