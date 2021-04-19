function cargarDatos() {
    var url = "http://demo2595335.mockable.io/cartas";
    fetch(url)
        .then(response => response.json())
        .then(data => generarTabla(data))
        .catch(error => console.log("Error: " + error.message));
}


function generarTabla(data) {
    var contenido = document.querySelector("#tabla");
    for (var i=0; i<data.length; i++) {
        var dato = document.createElement("tr");
        dato.innerHTML = `
        <tr>
            <td>${data[i].numero}</td>
            <td>${data[i].carta}</td>
            <td>${data[i].cantidad}</td>
        `;
        contenido.appendChild(dato);
    }
}
cargarDatos();