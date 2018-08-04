<?php
$servidor = "localhost";
$usuario = "root";
$contra = "";
$bd = "taektwondo";
$TORNEO = $_GET['torneo'];
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
            Resultados
        </title>
    </head>

    <body>
        <!--Header-->
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header class="mdl-layout__header">
                <div class="mdl-layout__header-row">
                    <!-- Title -->
                    <div class="mdl-navigation mdl-layout">
                        <a class="mdl-navigation__link" href="juez-index.php">
                    TORNEOS
                    </a>
                    </div>
                    <!-- Add spacer, to align navigation to the right -->
                    <div class="mdl-layout-spacer"></div>
                    <a class="mdl__link" href="../index.html">
                        <i class="material-icons md-32">input</i>
                    </a>

                </div>
            </header>

            <!--Contains-->

            <div class="mdl-cell--15-col mdl-grid">


                <ul>
                    <br>
                    <h3 class="mdl-list__item-primary-content" style="text-align: center;">Resultado del Torneo </h3>


                    <?php foreach ($conexion->query('SELECT p.id_alumno, p.id_torneo, p.puntuacion, p.amonestaciones, a.nombre, a.edad FROM puntuaciones as P, alumnos as A WHERE p.id_alumno = a.id_alumno') as $row){ // aca puedes hacer la consulta e iterarla con each. ?>

                    <li class="mdl-list__item">
                        <span class="mdl-list__item-primary-content">
				<i class="material-icons  mdl-list__item-avatar">person</i>
				<?php echo $row['nombre'] ?> 
			</span>
                        <span style="color:white;">...........................................</span>
                        <span class="mdl-list__item-secondary-action">
				
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--coloredGreen mdl-js-ripple-effect mdl-checkbox__input aling-rights">
					Puntuación: <?php echo $row['puntuacion'] ?>
				</button>
			</span>
                        <span style="color:white;">...........................................</span>
                        <span class="mdl-list__item-secondary-action">
				<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--coloredRed mdl-js-ripple-effect mdl-checkbox__input aling-rights">
					Amonestaciones: <?php echo $row['amonestaciones'] ?>
				</button>
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
