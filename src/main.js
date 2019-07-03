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
        document.getElementById('user').disabled = true;
        document.getElementById('password').disabled = true;
        document.getElementById('buttonLogin').disabled = true;
        msgFail.innerHTML="Ya utilizaste todos tus intentos, en este momento no podrás ingresar.";
        }
    else{
        cont=cont+1;
        console.log("CLAVE INCORRECTA");
        msgFail.innerHTML="Los datos ingresados son incorrectos";
        document.getElementById("user").value=""
        document.getElementById("password").value=""
        }
});

const mostrarPokemon=(data)=>{
    let showPokemon='';
    for(let j=0;j<data.length;j++){
        let showP=`
        <div class="pokemons-item">
            <img src="${data[j].img}"/>
            <figcaption >${data[j].num}</figcaption >
            <figcaption >${data[j].name}</figcaption >
            <figcaption >${data[j].type}</figcaption >
        </div>`;
        showPokemon=showPokemon+showP;
    }
    return showPokemon;
};


containerPokemon.innerHTML=mostrarPokemon(pokemonData);