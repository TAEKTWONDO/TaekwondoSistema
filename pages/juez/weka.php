<?php
$servidor = "localhost";
$usuario = "root";
$contra = "";
$bd = "taektwondo";


$conexion = new mysqli($servidor, $usuario, $contra, $bd);
$conexion->set_charset("utf8");

if ($conexion->connect_error) {
    die("Conexion Fallida: " . $conexion->connect_error);
    echo "Error";
} else {
    $sql_alumno = "SELECT ID_ALUMNO, NOMBRE, CINTA, EDAD, ALTURA FROM ALUMNOS" ;
    $res_alumno = $conexion->query($sql_alumno);
    //Adjuntando en un Arreglo
    $resultadosAlumnos = array();
    while($fila = mysqli_fetch_array($res_alumno, MYSQLI_ASSOC)){
        $resultadosAlumnos[] = $fila;
    }
    $idAlumnoAl = array_column($resultadosAlumnos, 'ID_ALUMNO');
    $NombreAl = array_column($resultadosAlumnos, 'NOMBRE');
    $CintaAl = array_column($resultadosAlumnos, 'CINTA');
    $EdadAl = array_column($resultadosAlumnos, 'EDAD');
    $AlturaAl = array_column($resultadosAlumnos, 'ALTURA');
    /////////////////////////////////////////////////////////////
    $sql_dif = "SELECT ID_ALUMNO, AL_PUNTUAJE, CO_PUNTUAJE FROM DIFEENFRENTAMIENTOS" ;
    $res_dif = $conexion->query($sql_dif);
    //Adjuntando en un Arreglo
    $resultadosDif = array();
    while($fila = mysqli_fetch_array($res_dif, MYSQLI_ASSOC)){
        $resultadosDif[] = $fila;
    }
    $idAlumnoDif = array_column($resultadosDif, 'ID_ALUMNO');
    $AlPuntuajeDif = array_column($resultadosDif, 'AL_PUNTUAJE');
    $CoPuntuajeDif = array_column($resultadosDif, 'CO_PUNTUAJE');
    /////////////////////////////////////////////////////////////
    $sql_pelea = "SELECT ID_ALUMNO, ID_CONTRICANTE FROM PELEADORES" ;
    $res_pelea = $conexion->query($sql_pelea);
    //Adjuntando en un Arreglo
    $resultadosPelea = array();
    while($fila = mysqli_fetch_array($res_pelea, MYSQLI_ASSOC)){
        $resultadosPelea[] = $fila;
    }
    $idAlumnoPelea = array_column($resultadosPelea, 'ID_ALUMNO');
    $idContricantePelea = array_column($resultadosPelea, 'ID_CONTRICANTE');
    ///////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////
    //Guardamos el id y puntuaje que usuaremos
    $weka_array_id = array();
    $weka_array_puntuaje = array();
    $weka_array_combates = array();
    $weka_array_combates_contri = array();
    $weka_array_nombres = array();
    $weka_array_cinta = array();
    $weka_array_edad = array();
    $weka_array_altura = array();
    $weka_array_nombres_contri = array();
    $weka_array_cinta_contri  = array();
    $weka_array_edad_contri  = array();
    $weka_array_altura_contri  = array();
     ///////////////////////////////////////////////////////////////////////////////////
    //Filtramos solo aquellos datos que vamos a usar
    $idAlumnoAlAux = array();
    $NombreAlAux = array();
    $CintaAlAux = array();
    $EdadAlAux = array();
    $AlturaAlAux = array();
    for ($g = 0; $g < count($idAlumnoAl); $g++){
        if (in_array($idAlumnoAl[$g], $idAlumnoPelea)){
            array_push($idAlumnoAlAux, $idAlumnoAl[$g]);
            array_push($NombreAlAux, $NombreAl[$g]);
            array_push($CintaAlAux, $CintaAl[$g]);
            array_push($EdadAlAux, $EdadAl[$g]);
            array_push($AlturaAlAux, $AlturaAl[$g]);
        }
    }
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    for ($g = 0; $g < count($idAlumnoPelea); $g++){
        for ($n = 0; $n < count($idAlumnoAlAux); $n++){
           if ($idAlumnoAlAux[$n] == $idAlumnoPelea[$g]){    
            array_push($weka_array_nombres, $NombreAlAux[$n]);
            array_push($weka_array_cinta, $CintaAlAux[$n]);
            array_push($weka_array_edad, $EdadAlAux[$n]);
            array_push($weka_array_altura, $AlturaAlAux[$n]);
            }
        }  
    }
    for ($g = 0; $g < count($idContricantePelea); $g++){
        for ($n = 0; $n < count($idAlumnoAlAux); $n++){
            if ($idAlumnoAlAux[$n] == $idAlumnoPelea[$g]){    
             array_push($weka_array_nombres_contri, $NombreAlAux[$n]);
             array_push($weka_array_cinta_contri, $CintaAlAux[$n]);
             array_push($weka_array_edad_contri, $EdadAlAux[$n]);
             array_push($weka_array_altura_contri, $AlturaAlAux[$n]);
             }
         }  
    }
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    $combatesTotal = array_count_values($idAlumnoPelea);
    $combates = array();
    $combates_alumno = array();
    for ($a = 0; $a < count($idAlumnoPelea); $a++){
        $posicion = $idAlumnoPelea[$a];
        array_push($combates, $combatesTotal[$posicion]);
        if (!in_array($posicion, $combates_alumno)){
            array_push($combates_alumno, $posicion);
        }
    }
    
    for ($g = 0; $g < count($idAlumnoPelea); $g++){
        for ($n = 0; $n < count($combates_alumno); $n++){
            if ($combates_alumno[$n] == $idAlumnoPelea[$g]){   
             array_push($weka_array_combates, $combates[$n]);
             }
         }  
    }////////////////////////////////////////////////////////////////
    $combatesTotal_contri = array_count_values($idContricantePelea);
    $combates_contri = array();
    $combates_alumno_contri = array();
    for ($a = 0; $a < count($idContricantePelea); $a++){
        $posicion = $idContricantePelea[$a];
        array_push($combates_contri, $combatesTotal_contri[$posicion]);
        if (!in_array($posicion, $combates_alumno_contri)){
            array_push($combates_alumno_contri, $posicion);
        }
    }
    
    for ($g = 0; $g < count($idContricantePelea); $g++){
        for ($n = 0; $n < count($combates_alumno_contri); $n++){
            if ($combates_alumno_contri[$n] == $idContricantePelea[$g]){   
             array_push($weka_array_combates_contri, $combates_contri[$n]);
             }
         }  
    }
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    $aux_puntaje = array();
    $aux_puntaje_contri = array();
    $weka_array_puntuaje = array();
    $weka_array_puntuaje_contri = array();
    for ($g = 0; $g < count($idAlumnoPelea); $g++){
        for ($n = 0; $n < count($idAlumnoDif); $n++){
            if ($idAlumnoDif[$n] == $idAlumnoPelea[$g]){
                array_push($aux_puntaje, $AlPuntuajeDif[$n]);
                array_push($aux_puntaje_contri, $CoPuntuajeDif[$n]);
             }
         }  
    }
    for ($a = 0; $a < count($idAlumnoPelea); $a++){
        array_push($weka_array_puntuaje, $aux_puntaje[$a]);
        array_push($weka_array_puntuaje_contri, $aux_puntaje_contri[$a]);
    }
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    $combates_resultado = array();
    for ($g = 0; $g < count($idAlumnoPelea); $g++){
        $alumno = $weka_array_puntuaje[$g];
        $contricante = $weka_array_puntuaje_contri[$g];
        $resultado = $alumno - $contricante;
        if ($resultado > 0){
            array_push($combates_resultado, "Gano");
        }
        if ($resultado <= 0){
            array_push($combates_resultado, "Perdio");
        }
    
    }
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    $weka_array_diferencia = array();
    for ($a = 0; $a < count($weka_array_puntuaje); $a++){
        $resul = $weka_array_puntuaje[$a] - $weka_array_puntuaje_contri[$a];
        array_push($weka_array_diferencia, $resul);
    }
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    for ($i = 0; $i < count($idAlumnoPelea); $i++){
        $sql_insert = "INSERT INTO WEKA_DATOS2 (id_alumno, edad_alumno, cinta_alumno, altura_alumno, puntaje_total, puntaje_contrincante, diferencia_puntaje, edad_contrincante, altura_contrincante, cinta_contrincante, combates_contrincantes, combates_alumno, resultado )
        values (\"".$idAlumnoPelea[$i]."\", \"".$weka_array_edad[$i]."\", \"".$weka_array_cinta[$i]."\", \"".$weka_array_altura[$i]."\", \"".$weka_array_puntuaje[$i]."\", \"".$weka_array_puntuaje_contri[$i]."\", \"".$weka_array_diferencia[$i]."\", \"".$weka_array_edad_contri[$i]."\", \"".$weka_array_altura_contri[$i]."\", \"".$weka_array_cinta_contri[$i]."\", \"".$weka_array_combates_contri[$i]."\", \"".$weka_array_combates[$i]."\", \"".$combates_resultado[$i]."\")";
    try {
        $weka_insert = $conexion->query($sql_insert);
        $sql_weka = "SELECT * FROM WEKA_DATOS2";
        $res_weka = $conexion->query($sql_weka);
        header('Location: mining.php');
    } catch (Exception $e) {
        echo("Error al agregar los datos de weka: " . $e);
    }
}
}




?>
