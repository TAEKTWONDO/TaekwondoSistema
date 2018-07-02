var DatosFuera;

// console.log("Consultando..."); 
var consultaAjax = $.ajax( "load_concursantes.php" )
            .done(function(data) { 
                // console.log("Datos Recibidos");
                // console.log(data);
                // console.log("Datos Formateados");
                var arreglo = JSON.parse(data);
                // console.table(arreglo);
                DatosFuera = arreglo;
                // console.table(DatosFuera);
            })
            .fail(function() { 
                // console.log("error"); 
            })
            .always(function() {
                //  console.log("Consulta Finalizada"); 
            });
// console.log("Petición realizada");
