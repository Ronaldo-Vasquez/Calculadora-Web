const numeroBotones = document.querySelectorAll('[data-number');
var operacionA;
var operacionB;
var operacion;
let opDisplay = [];
let start = false;//para indicar que se esta iniciando una nueva operacion matematica.

function init (){
    var display = document.getElementById("dispaly");//
    var cero = document.getElementById("cero");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var igual = document.getElementById("igual");
    var decimal = document.getElementById("decimal");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multi = document.getElementById("multi");
    var divi = document.getElementById("divi");
    var potencia = document.getElementById("potencia");
    var limpiar = document.getElementById("limpiar");
    var borrar = document.getElementById("borrar");

    cero.onclick = function(){
        opDisplay.push("0");
       updateDisplay();
    }
    uno.onclick = function(){
        opDisplay.push("1");
       updateDisplay();
    }
    dos.onclick = function(){
        opDisplay.push("2");
       updateDisplay();
    }
    tres.onclick = function(){
        opDisplay.push("3");
       updateDisplay();
    }
    cuatro.onclick = function(){
        opDisplay.push("4");
       updateDisplay();
    }
    cinco.onclick = function(){
        opDisplay.push("5");
       updateDisplay();
    }
    seis.onclick = function(){
        opDisplay.push("6");
       updateDisplay();
    }
    siete.onclick = function(){
        opDisplay.push("7");
       updateDisplay();
    }
    ocho.onclick = function(){
        opDisplay.push("8");
       updateDisplay();
    }
    nueve.onclick = function(){
        opDisplay.push("9");
       updateDisplay();
    }
    suma.onclick = function(){
        opDisplay.push("+");
       updateDisplay();
    }
    resta.onclick = function(){
        opDisplay.push("-");
       updateDisplay();
    }
    multi.onclick = function(){
        opDisplay.push("*");
       updateDisplay();
    }
    divi.onclick = function(){
        opDisplay.push("/");
       updateDisplay();
    }
    limpiar.onclick = function(){
        opDisplay = [""];
        start = true;
        updateDisplay();
        
        
    }
    
    



}

function updateDisplay(){//actualiza el la vista del ususario
    display.textContent = opDisplay.join("");
    
    
    if (start === true) {//para controlar el cero al borrar la info
        display.textContent = "0";
        start = false;
    }
}

function opMatematicas(){

}

