<?php
    session_start();

    $servidor = "localhost";
    $usuario = "root";
    $contra = "";
    $bd = "taektwondo";
    //Creando conexion
    $conexion = new mysqli($servidor, $usuario, $contra, $bd);
    $conexion->set_charset("utf8");
    //Conectando...
    if ($conexion->connect_error) {
        die("Conexion Fallida: " . $conexion->connect_error);
        echo "¡ERROR! <br>Base de Datos No Disponible";
    } else {
        //Parametros de consulta
        $sql_aprendizaje = "SELECT * FROM RESULTADOSPREPARACION;";
        $res_aprendizaje = $conexion->query($sql_aprendizaje);
        //Adjuntando en un Arreglo
        $resultados = array();
        while($fila = mysqli_fetch_array($res_aprendizaje, MYSQLI_ASSOC)){
            $resultados[] = $fila;
            
        }
        //Conviertiendo de Arreglo PHP a Arreglo JSON
        $arreglo_json = json_encode($resultados);

        echo $arreglo_json;

        $conexion->close();
    }

?>