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
    $sql_insert = "DELETE FROM JUECES WHERE ID_JUEZ =".$ID;
     try {
        echo "\nEntro";
        $juez_insert = $conexion->query($sql_insert);
        header('Location: ../../pages/admn-jueces.php');
        
    } catch (Exception $e) {
        echo("Error al agregar juez: " . $e);
    }
    $conexion->close();
}
?>
