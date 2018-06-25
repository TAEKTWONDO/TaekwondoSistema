<?php
$ID = $_GET["id"];
echo $ID;

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
    echo "Conexion correcta\n\r";
    $sql_insert = "DELETE FROM ALUMNOS WHERE ID_ALUMNO =".$ID;
     try {
        echo "\nEntro";
        $alumno_insert = $conexion->query($sql_insert);
        header('Location: ../../pages/prof-alumnos.php');
        
    } catch (Exception $e) {
        echo("Error al agregar alumno: " . $e);
    }
    $conexion->close();
}
?>