/* Manejo del DOM */
//VARIABLES
const user=document.getElementById("user");
const password=document.getElementById("password");
const msgFail=document.getElementById("msgFail");
const viewPokemon=document.getElementById("viewPokemon");
const viewLogin1=document.getElementById("viewLogin1");
let cont=0;


//BOTONES
const buttonLogin=document.getElementById("buttonLogin");

//FUNCIONES
buttonLogin.addEventListener ("click",(event)=>{
event.preventDefault();
console.log("hola");
const userLogin=user.value;
const passwordLogin=password.value;

    if(userLogin==="LABORATORIA" && passwordLogin==="LABORATORIA"){
        
        console.log("validando condicion");
        console.log("la clave es correcto");
        viewPokemon.classList.add("show");
        viewLogin1.classList.add("hide");
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

