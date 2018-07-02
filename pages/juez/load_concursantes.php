<?php
    session_start();

    $servidor = "localhost";
    $usuario = "root";
    $contra = "";
    $bd = "taektwondo";
    // $CATEGORIA = $_GET['categoria'];
    // // // // echo $CATEGORIA;
    // $EDAD1 = 0; $EDAD2 = 0;

    // if ($CATEGORIA == "IM5") {$EDAD1 = 0; $EDAD2 = 4;}
    // if ($CATEGORIA == "I56") {$EDAD1 = 5; $EDAD2 = 6;}
    // if ($CATEGORIA == "I78") {$EDAD1 = 7; $EDAD2 = 8;}
    // if ($CATEGORIA == "I910") {$EDAD1 = 9; $EDAD2 = 10;}
    // if ($CATEGORIA == "I1112") {$EDAD1 = 11; $EDAD2 = 12;}
    // if ($CATEGORIA == "J1314") {$EDAD1 = 13; $EDAD2 = 14;}
    // if ($CATEGORIA == "J1516") {$EDAD1 = 15; $EDAD2 = 16;}
    // if ($CATEGORIA == "A17") {$EDAD1 = 17; $EDAD2 = 80;}




    //Creando conexion
    $conexion = new mysqli($servidor, $usuario, $contra, $bd);
    $conexion->set_charset("utf8");
    //Conectando...
    if ($conexion->connect_error) {
        die("Conexion Fallida: " . $conexion->connect_error);
        echo "¡ERROR! <br>Base de Datos No Disponible";
    } else {
        //Parametros de consulta
        // $sql_alumno = "SELECT AL.ID_ALUMNO, AL.NOMBRE, AL.CINTA, AL.EDAD, AL.SEXO, AL.ALTURA FROM CONCURSANTES as CO, ALUMNOS AS AL WHERE CO.ID_ALUMNO = AL.ID_ALUMNO AND EDAD BETWEEN \"".$EDAD1."\" AND \"".$EDAD2."\"";
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