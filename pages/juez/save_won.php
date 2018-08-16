<?php
$TORNEO = $_GET['torneo'];
$ID = $_GET['idAlumnoPun'];
$PUNTUACION = $_GET['puntuacionPun'];
$AMONESTACIONESP = $_GET['amonestacionesPun'];

$IDALUMNOSEPARADOPUN = explode(',', $ID);
$PUNTUACIONSEPARADOPUN = explode(',', $PUNTUACION);
$AMONESTACIONESPSEPARADOPUN = explode(',', $AMONESTACIONESP);

// $PUNTUACIONOP = $_GET['puntuacionOP'];
// $STATUS = $_GET['status'];
// $IDP = $_GET['id_alumnoP'];
// $PUNTUACIONP = $_GET['puntuacionP'];

// $IDALUMNOID = $_GET['id_alumnoPun'];
// $IDCONTRICANTEID = $_GET['idContricante'];



// $IDALUMNOSEPARADOPUN = explode(',', $IDALUMNOID);
// $IDCONTRICANTESEPARADOID = explode(',', $IDCONTRICANTEID);
// $IDSEPARADO = explode(',', $ID);
// $PUNTUACIONSEPARADO = explode(',', $PUNTUACION);
// $PUNTUACIONOPSEPARADO = explode(',', $PUNTUACIONOP);
// $STATUSSEPARADO = explode(',', $STATUS);
// $IDSEPARADOP = explode(',', $ID);
// $PUNTUACIONSEPARADOP = explode(',', $PUNTUACIONP);
// $AMONESTACIONESSEPARADOP = explode(',', $AMONESTACIONESP);

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
   
//     for ($i = 0; $i < count($IDALUMNOSEPARADOID); $i++){
//         $sql_insert = "INSERT INTO PELEADORES (ID_ALUMNO, ID_CONTRICANTE)
//         values (\"".$IDALUMNOSEPARADOID[$i]."\", \"".$IDCONTRICANTESEPARADOID[$i]."\")";
//     try {
//         $gym_insert = $conexion->query($sql_insert);
//         $sql_gym = "SELECT * FROM PELEADORES";
//         $res_gym = $conexion->query($sql_gym);
//     } catch (Exception $e) {
//         echo("Error al agregar enfrentamientos: " . $e);
//     }
    
// }

//     for ($i = 0; $i < count($IDSEPARADO); $i++){
//         $sql_insert = "INSERT INTO difeenfrentamientos (id_alumno, al_puntuaje, co_puntuaje, estatus)
//         values (\"".$IDSEPARADO[$i]."\", \"".$PUNTUACIONSEPARADO[$i]."\",  \"".$PUNTUACIONOPSEPARADO[$i]."\",  \"".$STATUSSEPARADO[$i]."\")";
//     try {
//         $gym_insert = $conexion->query($sql_insert);
//         $sql_gym = "SELECT * FROM difeenfrentamientos";
//         $res_gym = $conexion->query($sql_gym);
        
//     } catch (Exception $e) {
//         echo("Error al agregar enfrentamientos: " . $e);
//     }
//     }

//     $sql_tor = "UPDATE TORNEOS SET ESTADO = 'I' WHERE ID_TORNEO = \"".$TORNEO."\"";
//     try {
//         // echo "\nEntro";
//         $tor_insert = $conexion->query($sql_tor);
//         $sql_tor = "SELECT * FROM TORNEOS";
//         $res_tor = $conexion->query($sql_tor);
//         echo "Torneo";
        
//     } catch (Exception $e) {
//         echo("Error al modificar el torneo: " . $e);
    
// }

    for ($i = 0; $i < count($IDALUMNOSEPARADOPUN); $i++){
        $sql_insert = "INSERT INTO PUNTUACIONES (id_alumno, id_torneo, puntuacion, amonestaciones)
        values (\"".$IDALUMNOSEPARADOPUN[$i]."\", \"".$TORNEO."\", \"".$PUNTUACIONSEPARADOPUN[$i]."\",  \"".$AMONESTACIONESPSEPARADOPUN[$i]."\")";
    try {
        // echo "\nEntro";
        $gym_insert = $conexion->query($sql_insert);
        $sql_gym = "SELECT * FROM PUNTUACIONES";
        $res_gym = $conexion->query($sql_gym);
        // echo "\n" . $sql_gym;
        // header('Location: show-score.php?torneo='. $TORNEO);
        
    } catch (Exception $e) {
        echo("Error al agregar gym: " . $e);
    }


    
}


    // header('Location: show-score.php?torneo='. $TORNEO);
    $conexion->close();
}
?>
