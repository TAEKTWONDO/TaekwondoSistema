<?php
echo "<script>console.log( 'jelooos' );</script>";
$id_alumno = $_GET["id_alumno"];
$id_torneo = $_GET["id_torneo"];
echo $id_alumno;
echo "<script>console.log( 'Debug Objects: " . $id_alumno . "' );</script>";
echo "<script>console.log( 'Debug Objects: " . $id_torneo . "' );</script>";
echo "<script>console.log( 'jelooos' );</script>";
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
    $sql_insert = "DELETE FROM CONCURSANTES WHERE ID_TORNEO=".$id_torneo." AND ID_ALUMNO=".$id_alumno .";";
     try {
        echo "\nEntro";
        $alumno_insert = $conexion->query($sql_insert);
        header('Location: ../../pages/prof-alumnos-participantes.php?id_torneo='.$id_torneo);
        
    } catch (Exception $e) {
        echo("Error al agregar alumno: " . $e);
    }
    $conexion->close();
}
?>