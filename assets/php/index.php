<?php
$CLAVE = $_POST["password"];
$EMAIL = $_POST["email"];
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
    //Maestros
    $sql_profe = "SELECT * FROM MAESTROS WHERE correo = \"".$EMAIL."\"";
    $res_profe = $conexion->query($sql_profe);
    $maestros = mysqli_fetch_array($res_profe);
    //Jueces
    $sql_juez = "SELECT * FROM JUECES WHERE correo = \"".$EMAIL."\"";
    $res_juez = $conexion->query($sql_juez);
    $jueces = mysqli_fetch_array($res_juez);
    //Administradores
    $sql_admins = "SELECT * FROM ADMINISTRADORES WHERE correo = \"".$EMAIL."\"";
    $res_admins = $conexion->query($sql_admins);
    $administrador = mysqli_fetch_array($res_admins);
    session_start();
    if ($res_admins->num_rows > 0){
        if ($administrador[3] == $EMAIL && $administrador[2] == $CLAVE){
            header('Location: ../../pages/admn-profesores.php');
        }
    }
    else if ($res_profe->num_rows > 0){
        if ($maestros[7] == $EMAIL && $maestros[6] == $CLAVE){
            header('Location: ../../pages/prof-alumnos.html');
        }
    }
    else if ($res_juez->num_rows > 0){
        if ($jueces[5] == $EMAIL && $jueces[4] == $CLAVE){
            header('Location: ../../pages/juez-index.html');
        }
    }
    else {
            header('Location: ../../pages/index.html');
        }
    $conexion->close();
}
?>