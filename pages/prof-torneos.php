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
        <link rel="stylesheet" href="../assets/css/material.indigo-pink.min.css">
        <link rel="stylesheet" href="../assets/scss/style.scss">

        <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
        <script defer src="../assets/js/alerts.js"></script>
        <title>
Torneos        </title>
    </head>

    <body>
        <!--Header-->
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header class="mdl-layout__header">
                <div class="mdl-layout__header-row">
                    <!-- Title -->
                    <div class="mdl-navigation mdl-layout">
                        <a class="mdl-navigation__link mdl-js-ripple-effect" href="prof-alumnos.php">
            ALUMNOS
          </a>

                        <a class="mdl-navigation__link" href="">
            TORNEOS
          </a>

                    </div>
                    <!-- Add spacer, to align navigation to the right -->
                    <div class="mdl-layout-spacer"></div>

                    <a class="mdl__link" id="logout" onclick="logOut()" href="">
                        <i class="material-icons md-32">input</i>
                    </a>

                </div>
            </header>

            <!--Contains-->

            <div class="mdl-cell--12-col mdl-grid">

                <div class="mdl-cell mdl-cell--3-col" style="text-align: right;">

                </div>

                <ul>

                    <h3 class="mdl-list__item-primary-content" style="text-align: center;">Próximos torneos</h3>
                    <?php foreach ($conexion->query('SELECT nombre, descripcion, fecha, id_torneo FROM TORNEOS ORDER BY FECHA DESC') as $row){ // aca puedes hacer la consulta e iterarla con each. ?>
                    <li class="mdl-list__item">

                        <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp mdl-cell--7-col">


                            <div class="mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
                                <div class="mdl-card__supporting-text mdl-cell--12-col">
                                    <h3>
                                        <?php echo $row['nombre'] ?>
                                    </h3>
                                    <p>
                                        <?php echo $row['descripcion'] ?>
                                    </p>
                                    <h4>
                                        <?php echo $row['fecha'] ?>
                                    </h4>
                                </div>
                                <div class="mdl-card__actions mdl-card--border">
                                    <div class="mdl-card__actions" style="text-align: right;">
                                        <a href="prof-alumnos-participantes.php?id_torneo=<?php echo $row['id_torneo']?>" class="mdl-button">Mis participantes</a>
                                    </div>
                                </div>

                            </div>



                        </section>

                    </li>


                    <?php
                    }
                ?>




                </ul>
            </div>
        </div>


    </body>

    </html>
