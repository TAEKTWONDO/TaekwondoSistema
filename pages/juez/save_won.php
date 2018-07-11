<?php
echo "Hola";
$ID = $_GET['id_alumno'];
$PUNTUACION = $_GET['puntuacion'];
$AMONESTACIONES = $_GET['amonestaciones'];
$TORNEO = $_GET['torneo'];
$IDSEPARADO = explode(',', $ID);
$PUNTUACIONSEPARADO = explode(',', $PUNTUACION);
$AMONESTACIONESSEPARADO = explode(',', $AMONESTACIONES);

echo (count($IDSEPARADO));

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
        $sql_insert = "INSERT INTO PUNTUACIONES (id_alumno, id_torneo, puntuacion, amonestaciones)
        values (\"".$IDSEPARADO[$i]."\", \"".$TORNEO."\", \"".$PUNTUACIONSEPARADO[$i]."\",  \"".$AMONESTACIONESSEPARADO[$i]."\")";
    try {
        // echo "\nEntro";
        $gym_insert = $conexion->query($sql_insert);
        $sql_gym = "SELECT * FROM PUNTUACIONES";
        $res_gym = $conexion->query($sql_gym);
        // echo "\n" . $sql_gym;
        // header('Location: graphic-index.php?categoria=I910&categorias= + IM5 I56 I78 I910 I1112');
        
    } catch (Exception $e) {
        echo("Error al agregar gym: " . $e);
    }
}
    $conexion->close();
}
?>
