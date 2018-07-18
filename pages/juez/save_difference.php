<?php
echo "Hola";
$ID = $_GET['id_alumno'];
$PUNTUACION = $_GET['puntuacion'];
$PUNTUACIONOP = $_GET['puntuacionOP'];
$STATUS = $_GET['status'];
$IDSEPARADO = explode(',', $ID);
$PUNTUACIONSEPARADO = explode(',', $PUNTUACION);
$PUNTUACIONOPSEPARADO = explode(',', $PUNTUACIONOP);
$STATUSSEPARADO = explode(',', $STATUS);

// echo (count($IDSEPARADO));

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
   
    for ($i = 0; $i < count($IDSEPARADO); $i++){
        $sql_insert = "INSERT INTO difeenfrentamientos (id_alumno, al_puntuaje, co_puntuaje, estatus)
        values (\"".$IDSEPARADO[$i]."\", \"".$PUNTUACIONSEPARADO[$i]."\",  \"".$PUNTUACIONOPSEPARADO[$i]."\",  \"".$STATUSSEPARADO[$i]."\")";
    try {
        // echo "\nEntro";
        $gym_insert = $conexion->query($sql_insert);
        $sql_gym = "SELECT * FROM difeenfrentamientos";
        $res_gym = $conexion->query($sql_gym);
        // echo "\n" . $sql_gym;
        header('Location:' .$_SERVER['HTTP_REFERER']);
        
    } catch (Exception $e) {
        echo("Error al agregar enfrentamientos: " . $e);
    }
}
    $conexion->close();
}
?>
