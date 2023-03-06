var operacionA;
var operacionB;
var operacion;

function init (){
    var resultado = document.getElementById("resultado");
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

    cero.onclick = function(e){
        resultado.textContent = resultado.textContent +"0";
    }
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent +"1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent +"2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent +"3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent +"4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent +"5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent +"6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent +"7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent +"8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent +"9";
    }

    borrar.onclick = function(e){
        borrar();
    }
    suma.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multi.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    divi.onclick = function(e){
        operacionA = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operacionB = resultado.textContent;
        resolver();
    }

}

function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    operacion="";
    operacionA=0;
    operacionB=0;
}
function resolver() {
    var resultado = 0;
    switch (operacion) {
        case "+":
            resultado = parseFloat(operacionA)+parseFloat(operacionB)
            
            break;
    
        default:
            break;
    }   
}