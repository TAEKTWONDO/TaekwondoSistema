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
    $sql_insert = "DELETE FROM GYMS WHERE ID_GYM =".$ID;
     try {
        echo "\nEntro";
        $gym_insert = $conexion->query($sql_insert);
        header('Location: ../../pages/admn-gimnasios.php');
        
    } catch (Exception $e) {
        echo("Error al agregar gym: " . $e);
    }
    $conexion->close();
}
?>
