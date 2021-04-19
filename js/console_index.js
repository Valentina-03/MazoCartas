function validar(){
    var usuario = document.getElementById("user").value;
    var contraseña = document.getElementById("pass").value;
    if(usuario =='admin' && contraseña == '1234') location.href = "home.html";
    else alert("Datos erróneos.");
}