<?php
$ID = $_GET["id"];
$ESTADO = $_GET["categoria"];
echo $ID;
echo $ESTADO;

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
    $sql_insert = "UPDATE TORNEOS SET ESTADO= '".$ESTADO."' WHERE ID_TORNEO =".$ID;
     try {
        echo "\nEntro";
        $torneo_insert = $conexion->query($sql_insert);
        header('Location: ../../pages/admn-torneos.php');
        
    } catch (Exception $e) {
        echo("Error al agregar torneo: " . $e);
    }
    $conexion->close();
}
?>
