//Solicitud al servidor
var xmlhttp = new XMLHttpRequest();
//Si la solicitud fue exitosa...
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var misResultados = JSON.parse(this.responseText);
        //document.getElementById("resultados").innerHTML = misResultados;
        console.table(misResultados);
    }
};
//Parametros de la solicitud (Metodo, URL, async)
xmlhttp.open("GET", "consulta.php", true);
//Solicita el archivo al servidor
xmlhttp.send();
