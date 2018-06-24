<?php
$NOMBRE = $_POST["nombre"];
$APELLIDOS = $_POST["apellidos"];
$NACIMIENTO = $_POST["fecha_nacimiento"];
$GENERO = $_POST["genero"];
$CINTA = $_POST["cinta"];
$PESO = $_POST["peso"];
$ALTURA = $_POST["altura"];
echo "\n".$NOMBRE;
echo "\n".$APELLIDOS;
echo "\n".$NACIMIENTO;
echo "\n".$GENERO;
echo "\n".$CINTA;
echo "\n".$PESO;
echo "\n".$ALTURA;

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
    $sql_insert = "INSERT INTO participantes (nombre)
     values (\"".$NOMBRE."\"";
    try {
        echo "\nEntro";
        $alumno_insert = $conexion->query($sql_insert);
        $sql_alumno = "SELECT * FROM participantes";
        $res_alumno = $conexion->query($sql_alumno);
        echo "\n" . $sql_alumno;
        //header('Location: ../../pages/prof-alumnos.php');
        
    } catch (Exception $e) {
        echo("Error al agregar alumno: " . $e);
    }
    $conexion->close();
}
?>