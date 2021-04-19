function validate(){
    var user = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

    if(user == 'admin' && password == '1234'){
        location.href = "home.html";
    }else{
        alert("Usuario Inválido");
    }}