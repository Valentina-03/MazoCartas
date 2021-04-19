var act = ["###", "###", "###", "###", "###", "###", "###", "###", "###", "###", "###", "###", "###"];
var names = ["As","Dos","Tres","Cuatro","Cinco","Seis","Siete","Ocho", "Nueve","Diez","J","Q","K"];

function limpiarTabla(){
    for(var i in localStorage){
        localStorage.removeItem(i);
    }
}

function actualizarTabla(){    
    var cuerpo = document.getElementById("tabla");
    var upd= document.createElement("tbody");
    
    for(var i in localStorage){
        if(!localStorage.getItem(i))break;
        const fila = document.createElement("tr");
        var datos = JSON.parse(localStorage.getItem(i));
        fila.innerHTML =` 
            <tr>
                <td>${datos.numero}</td>
                <td>${names[datos.numero-1] + " de " + datos.carta}</td>
                <td>${datos.cantidad}</td>
            </tr>
        `;
        upd.appendChild(fila);
    }
    cuerpo.innerHTML=upd.innerHTML;
}

function registrarCarta(){
    let numero = parseInt(document.getElementById("fnum").value);
    let carta = (document.getElementById("fcarta").value).toLowerCase();
    if((numero <1 || numero > 13) || !(carta=="diamante" || carta=="pica" || carta=="corazon" || carta=="trebol"))
        alert("Datos invalidos");
    
    document.getElementById(numero).src = "img/"+carta[0]+"/"+numero+".png";
    if(act[numero-1] == "###")
        localStorage.setItem(numero+" "+carta,JSON.stringify({"numero":numero,"carta":carta,"cantidad":0}));
    if(act[numero-1] == carta)
        localStorage.setItem(numero+" "+carta,JSON.stringify({"numero":numero,"carta":carta,"cantidad":JSON.parse(localStorage.getItem(numero+" "+carta)).cantidad+1}));
    else{
        localStorage.removeItem(numero+" "+act[numero-1]);
        localStorage.setItem(numero+" "+carta, JSON.stringify({"numero":numero,"carta":carta,"cantidad":0}));        
    }
    act[numero-1] = carta;
    actualizarTabla();
}

function aumentarCarta(numero){
    let carta = act[numero-1];
    if(localStorage.getItem(numero+" "+carta))
        localStorage.setItem(numero+" "+carta, JSON.stringify({"numero":numero,"carta":carta,"cantidad":JSON.parse(localStorage.getItem(numero+" "+carta)).cantidad+1}));
    else
        alert("Carta no registrada");
    actualizarTabla();  
}

limpiarTabla();
