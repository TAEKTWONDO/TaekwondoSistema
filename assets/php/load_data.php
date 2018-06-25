<?php
$servidor = "localhost";
$usuario = "root";
$contra = "";
$bd = "taektwondo";

// Creando la conexion a la bd
$conexion = new mysqli($servidor, $usuario, $contra, $bd);
$conexion->set_charset("utf8");
// Checando la conexion
if ($conexion->connect_error) {
    die("Conexion Fallida: " . $conexion->connect_error);
}else{
    //Competidores
    $sql_preparacion = "SELECT * FROM RESULTADOSPREPARACION";
    $res_preparacion = $conexion->query($sql_preparacion);
    $preparacion = mysqli_fetch_array($res_preparacion);
    print_r($preparacion);
    $conexion->close();
}
?>