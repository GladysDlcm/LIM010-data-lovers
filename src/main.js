/* Manejo del DOM */
//VARIABLES
const user=document.getElementById("user");
const password=document.getElementById("password");
const msgFail=document.getElementById("msgFail");
const viewPokemon=document.getElementById("viewPokemon");
const viewLogin1=document.getElementById("viewLogin1");
const containerPokemon=document.getElementById("containerPokemon");
const pokemonData=POKEMON.pokemon;
let cont=0;


//BOTONES
const buttonLogin=document.getElementById("buttonLogin");

//FUNCIONES
buttonLogin.addEventListener ("click",(event)=>{
event.preventDefault();

const userLogin=user.value;
const passwordLogin=password.value;

    if(userLogin==="LABORATORIA" && passwordLogin==="LABORATORIA"){
     
        viewPokemon.classList.add("show");
        viewLogin1.classList.add("hide");
        cont=0;
         }
        else if(cont>=2){
        console.log("bloqueo");
        document.getElementById("user").value=""
        document.getElementById("password").value=""
        msgFail.classList.add("hide");
        document.getElementById('user').disabled = true;
        document.getElementById('password').disabled = true;
        document.getElementById('buttonLogin').disabled = true;
        alert("Superó los numeros de intentos, vuelva a cargar!");
        }
    else{
        cont=cont+1;
        console.log("CLAVE INCORRECTA");
        msgFail.innerHTML="Clave incorrecta";
        document.getElementById("user").value=""
        document.getElementById("password").value=""
        }
});

const mostrarPokemon=(data)=>{
    let showPokemon='';
    for(let j=0;j<data.length;j++){
        let showP=`
        <div>
            <img src="${data[j].img}"/>
            <p>Nombre:${data[j].name}</p>
        </div>`;
        showPokemon=showPokemon+showP;
    }
    return showPokemon;
};


containerPokemon.innerHTML=mostrarPokemon(pokemonData);