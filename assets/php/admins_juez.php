<?php
$NOMBRE_JUEZ = $_POST["nombre_juez"];
$APELLIDOS_JUEZ = $_POST["apellidos_juez"];
$TELEFONO = $_POST["telefono_juez"];
$CORREO_MAESTRO = $_POST["correo_maestro"];
$CONTRASENA = $_POST["pass_maestro"];

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
    $sql_insert = "INSERT INTO JUECES (nombre, apellidos, telefono, contrasena, correo)
     values (\"".$NOMBRE_JUEZ."\", \"".$APELLIDOS_JUEZ."\", \"".$TELEFONO."\", \"".$CONTRASENA."\", \"".$CORREO_MAESTRO."\")";
    try {
        echo "\nEntro";
        $juez_insert = $conexion->query($sql_insert);
        $sql_juez = "SELECT * FROM JUECES";
        $res_juez = $conexion->query($sql_juez);
        echo "\n" . $sql_juez;
        header('Location: ../../pages/admn-agregar-jueces.html');
        
    } catch (Exception $e) {
        echo("Error al agregar juez: " . $e);
    }
    $conexion->close();
}
?>