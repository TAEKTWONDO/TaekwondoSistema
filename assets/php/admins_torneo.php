<?php
$NOMBRE_TORNEO = $_POST["nombre_torneo"];
$DESCRIPCION = $_POST["descripcion_torneo"];
$FECHA = $_POST["fecha_torneo"];
$HORA_TORNEO = $_POST["hora_torneo"];

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
    echo "Conexion correcta\n";
    $sql_insert = "INSERT INTO TORNEOS (nombre, descripcion, hora, fecha)
     values (\"".$NOMBRE_TORNEO."\", \"".$DESCRIPCION."\", \"".$HORA_TORNEO."\",  \"".$FECHA."\")";
    try {
        echo "\nEntro";
        $torneo_insert = $conexion->query($sql_insert);
        $sql_torneo = "SELECT * FROM TORNEOS";
        $res_torneo = $conexion->query($sql_torneo);
        echo "\n" . $sql_torneo;
        header('Location: ../../pages/admn-agregar-torneo.html');
        
    } catch (Exception $e) {
        echo("Error al agregar torneo: " . $e);
    }
    $conexion->close();
}
?>