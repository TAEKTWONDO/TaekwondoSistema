<?php
$NOMBRE_PROFE = $_POST["nombre_maestro"];
$APELLIDOS_PROFE = $_POST["apellidos_maestro"];
$GYM = $_POST["gimnasio"];
$DIRECCION_PROFE = $_POST["direccion_maestro"];
$TELEFONO_PROFE = $_POST["telefono_maestro"];
$CORREO_PROFE = $_POST["correo_maestro"];
$CONTRASENA = $_POST["pass_maestro"];
echo $GYM;

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
    $sql_insert = "INSERT INTO MAESTROS (nombre, apellidos, direccion, telefono, id_gym,  contrasena, correo)
     values (\"".$NOMBRE_PROFE."\", \"".$APELLIDOS_PROFE."\", \"".$DIRECCION_PROFE."\", \"".$TELEFONO_PROFE."\",  \"".$GYM."\",\"".$CONTRASENA."\",  \"".$CORREO_PROFE."\")";
    try {
        echo "\nEntro";
        $maestro_insert = $conexion->query($sql_insert);
        $sql_maestro = "SELECT * FROM MAESTROS";
        $res_maestro = $conexion->query($sql_maestro);
        echo "\n" . $sql_maestro;
        header('Location: ../../pages/admn-profesores.php');
        
    } catch (Exception $e) {
        echo("Error al agregar maestro: " . $e);
    }
    $conexion->close();
}
?>