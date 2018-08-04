<?php
$servidor = "localhost";
$usuario = "root";
$contra = "";
$bd = "taektwondo";


$conexion = new mysqli($servidor, $usuario, $contra, $bd);
$conexion->set_charset("utf8");

if ($conexion->connect_error) {
    die("Conexion Fallida: " . $conexion->connect_error);
    echo "Error";
}
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="../../assets/css/material.indigo-pink.min.css">
        <link rel="stylesheet" href="../../assets/scss/style.scss">

        <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
        <title>
            Minería de datos
        </title>
    </head>

    <body>
        <!--Header-->
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header class="mdl-layout__header">
                <div class="mdl-layout__header-row">
                    <!-- Title -->
                    <div class="mdl-navigation mdl-layout">


                    </div>
                    <!-- Add spacer, to align navigation to the right -->
                    <div class="mdl-layout-spacer"></div>
                    <a class="mdl__link" href="../index.html">
                        <i class="material-icons md-32">input</i>
                    </a>

                </div>
            </header>

            <!--Contains-->

            <div class="mdl-cell--12-col mdl-grid">



                <?php foreach ($conexion->query('SELECT WK.ID_ALUMNO, WK.PUNTAJE_TOTAL, WK.PUNTAJE_CONTRINCANTE, WK.COMBATES_CONTRINCANTES, WK.COMBATES_ALUMNO, WK.RESULTADO, AL.NOMBRE FROM WEKA_DATOS2 as WK, ALUMNOS AS AL WHERE WK.ID_ALUMNO = AL.ID_ALUMNO') as $row){ // aca puedes hacer la consulta e iterarla con each. ?>

                <li class="mdl-list__item">
                    <span class="mdl-list__item-primary-content">
				<i class="material-icons  mdl-list__item-avatar">person</i>
				<?php echo $row['NOMBRE'] ?>
			</span>
                    <span style="color:white;">.......................................</span>
                    <span class="mdl-list__item-secondary-action">
                    <?php echo $row['PUNTAJE_TOTAL'] ?>
            </span>

                    <span style="color:white;">.......................................</span>
                    <span class="mdl-list__item-secondary-action">
                    <?php echo $row['PUNTAJE_CONTRINCANTE'] ?>
            </span>
                    <span style="color:white;">.......................................</span>
                    <span class="mdl-list__item-secondary-action">
                    <?php echo $row['COMBATES_CONTRINCANTES'] ?>
            </span>
                    <span style="color:white;">.......................................</span>
                    <span class="mdl-list__item-secondary-action">
                    <?php echo $row['COMBATES_ALUMNO'] ?>
            </span>
                    <span style="color:white;">.......................................</span>
                    <span class="mdl-list__item-secondary-action">
                    <?php echo $row['RESULTADO'] ?>
			</span>
                </li>
                <?php
                    }
                ?>



                    </ul>







            </div>
        </div>


    </body>

    </html>
