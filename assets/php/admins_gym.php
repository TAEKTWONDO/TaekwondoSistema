<?php
$NOMBRE_GYM = $_POST["nombre_gym"];
$DIRECCION = $_POST["direccion_gym"];
$TELEFONO = $_POST["telefono_gym"];

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
    $sql_insert = "INSERT INTO GYMS (nombre, direccion, telefono)
     values (\"".$NOMBRE_GYM."\", \"".$DIRECCION."\", \"".$TELEFONO."\")";
    try {
        echo "\nEntro";
        $gym_insert = $conexion->query($sql_insert);
        $sql_gym = "SELECT * FROM GYMS";
        $res_gym = $conexion->query($sql_gym);
        echo "\n" . $sql_gym;
        header('Location: ../../pages/admn-gimnasios.php');
        
    } catch (Exception $e) {
        echo("Error al agregar gym: " . $e);
    }
    $conexion->close();
}
?>
