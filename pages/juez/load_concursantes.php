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
        $sql_alumno = "SELECT AL.ID_ALUMNO, AL.NOMBRE, AL.CINTA, AL.EDAD, AL.SEXO, AL.ALTURA FROM CONCURSANTES as CO, ALUMNOS AS AL WHERE CO.ID_ALUMNO = AL.ID_ALUMNO" ;
        $res_alumno = $conexion->query($sql_alumno);
        //Adjuntando en un Arreglo
        $resultados = array();
        while($fila = mysqli_fetch_array($res_alumno, MYSQLI_ASSOC)){
            $resultados[] = $fila;
            
        }
        //Conviertiendo de Arreglo PHP a Arreglo JSON
        $arreglo_json = json_encode($resultados);

        echo $arreglo_json;


        
        $conexion->close();

       
    }

?>