//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from"./component/SecondsCounter.jsx";


// main function
const counterClock =() => {
    
    //stop function
    const stop=()=>{
        clearInterval(refreshIntervalId);
        console.log(refreshIntervalId);
    }
    //play function
    const play=()=>{
        console.log(refreshIntervalId);
        refreshIntervalId = setInterval(function(){
            counter += 1;
            ReactDOM.render(<SecondsCounter seconds={counter} paro={stop} reanuda = {play} reiniciar = {reinicio}/>, document.getElementById('app'));
        },
        1000);
    }
    //resume function
    const reinicio = ()=>{
        counter = 0;
    }

    //Función alarma
    let alarma =prompt("Escribe un número y te avisaré cuando el contador llegue: ",0)
    let numeroAlarma = parseInt(alarma);

    //Recibe un numero Si > 0 la cuenta atras empieza
    let cuentaAtras = prompt("Escribe la cuenta atras: ",0);
    let number = parseInt(cuentaAtras);                     //Paso a int el dato recibido
    let counter = 0;
    if(number == 0){                                        //Si la entrada es igual a 0, comienza el contador.
        var refreshIntervalId = setInterval(function(){
            counter += 1;
           if(counter != numeroAlarma){                     //Si el contador no es igual al numero de la alarma
                ReactDOM.render(<SecondsCounter seconds={counter} paro={stop} reanuda = {play} reiniciar = {reinicio}/>, document.getElementById('app'));
           } else{
                alert("He llegado a tu número");
           }
        },
        1000);
    }
    if(number > 0){                                         //Si la entrada del usuario es mayor que 0, empieza la cuenta atrás.
        counter = number;
        var refreshIntervalId = setInterval(function(){
            counter -= 1;
           if(counter >=0){
            ReactDOM.render(<SecondsCounter seconds={counter}/>, document.getElementById('app'));
           } else{
            alert("Fin de la cuenta atras");
           }
        },
        1000);
    }
}
counterClock();


    


