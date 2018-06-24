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
    $sql_compe = "SELECT CO.ID_ALUMNO, AL.NOMBRE FROM CONCURSANTES AS CO, ALUMNOS AS AL WHERE CO.ID_ALUMNO = AL.ID_ALUMNO";
    $res_compe = $conexion->query($sql_compe);
    $competidores = mysqli_fetch_array($res_compe);
    print_r($competidores);
    $conexion->close();
}
?>