<?php
$NOMBRE_TORNEO = $_POST["nombre_torneo"];
$DESCRIPCION = $_POST["descripcion_torneo"];
$FECHA = $_POST["fecha_torneo"];
$HORA_TORNEO = $_POST["hora_torneo"];
$ESTADO = $_POST["estado"];
$CATEGORIA = $_POST['CATEGORIA'];
$CATEGORIAS = array();

if (isset($_POST['CATEGORIA'])){
    foreach ($_POST['CATEGORIA'] as $sel){
    // echo $sel."</br>";
    array_push($CATEGORIAS, $sel);
    }
}
$IM5N = "";
$I56N= "";
$I78N= "";
$I910N= "";
$I1112N= "";
$J1314N= "";
$J1516N= "";
$A17N= "";
foreach ($CATEGORIAS as $vector){
    echo $vector."</br>";
    if ($vector == "IM5") {$IM5N = "S";}
    else if ($vector == "I56") {$I56N = "S";}
    else if ($vector == "I78") {$I78N = "S"; }
    else if ($vector == "I910") {$I910N = "S";}
    else if ($vector == "I1112") {$I1112N = "S";}
    else if ($vector == "J1314") {$J1314N = "S";}
    else if ($vector == "J1516") {$J1516N = "S";}
    else if ($vector == "A17") {$A17N = "S";}    
    }

    if ($IM5N != "S") {$IM5N = "N";}
    if ($I56N != "S") {$I56N = "N";}
    if ($I78N != "S") {$I78N = "N";}
    if ($I910N != "S") {$I910N = "N";}
    if ($I1112N != "S") {$I1112N = "N";}
    if ($J1314N != "S") {$J1314N = "N";}
    if ($J1516N != "S") {$J1516N = "N";}
    if ($A17N != "S") {$A17N = "N";}



$servidor = "localhost";
$usuario = "root";
$contra = "";
$bd = "taektwondo";


$conexion = new mysqli($servidor, $usuario, $contra, $bd);
$conexion->set_charset("utf8");

if ($conexion->connect_error) {
    die("Conexion Fallida: " . $conexion->connect_error);
    // echo "Error";
} else {
    // echo "Conexion correcta\n";
    $sql_insert = "INSERT INTO TORNEOS (nombre, descripcion, hora, fecha, estado, im5, i56, i78, i910, i1112, j1314, j1516, a17)
     values (\"".$NOMBRE_TORNEO."\", \"".$DESCRIPCION."\", \"".$HORA_TORNEO."\",  \"".$FECHA."\" ,  \"".$ESTADO."\",  \"".$IM5N."\",  \"".$I56N."\",  \"".$I78N."\",  \"".$I910N."\",  \"".$I1112N."\",  \"".$J1314N."\",  \"".$J1516N."\",  \"".$A17N."\")";
    try {
        echo "<br>Entro";

        if ($NOMBRE_TORNEO == null || $DESCRIPCION == null || $HORA_TORNEO == null || $FECHA == null || $ESTADO == null ||
        $IM5N == "N" && $I56N == "N" && $I78N == "N" && $I910N == "N" && $I1112N == "N" && $J1314N == "N" && $J1516N == "N" && $A17N == "N"){
            echo("<br>Registro Incompleto");
            header('Location: ../../pages/admn-torneos.php?op=0');
        } else {
            $torneo_insert = $conexion->query($sql_insert);
            $sql_torneo = "SELECT * FROM TORNEOS";
            $res_torneo = $conexion->query($sql_torneo);
            echo "\n" . $sql_torneo;
            header('Location: ../../pages/admn-torneos.php');
        }
        
    } catch (Exception $e) {
        echo("Error al agregar torneo: " . $e);
    }
    $conexion->close();
}
?>
