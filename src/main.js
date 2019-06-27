/* Manejo del DOM */

//VARIABLES
const user=document.getElementById("user");
const password=document.getElementById("password");
const msgFail=document.getElementById("msgFail");
let cont=0;


//BOTONES
const buttonLogin=document.getElementById("buttonLogin");

//FUNCIONES
buttonLogin.addEventListener ("click",()=>{

const userLogin=user.value;
const passwordLogin=password.value;

    if(userLogin==="LABORATORIA" && passwordLogin==="LABORATORIA"){
        
        console.log("validando condicion");
        console.log("la clave es correcto");
        cont=0;
         }
        else if(cont>=2){
        console.log("bloqueo");
        document.getElementById('user').disabled = true;
        document.getElementById('password').disabled = true;
        document.getElementById('buttonLogin').disabled = true;
        }
    else{
        cont=cont+1;
        console.log("ERROR");
        msgFail.innerHTML="Clave incorrecta";
        }
});

