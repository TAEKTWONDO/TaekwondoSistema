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
        <title>
            ADM GIMNASIOS
        </title>
    </head>

    <body>
        <!--Header-->
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header class="mdl-layout__header">
                <div class="mdl-layout__header-row">
                    <!-- Title -->
                    <div class="mdl-navigation mdl-layout">
                        <a class="mdl-navigation__link mdl-js-ripple-effect" href="admn-profesores.php">
            MAESTROS
          </a>

                        <a class="mdl-navigation__link" href="">
                    GIMNASIOS
                    </a>
                        <a class="mdl-navigation__link" href="admn-torneos.php">
                    TORNEOS
                    </a>
                        <a class="mdl-navigation__link" href="admn-jueces.php">
           JUECES
          </a>
                    </div>
                    <!-- Add spacer, to align navigation to the right -->
                    <div class="mdl-layout-spacer"></div>
                    <a class="mdl__link" href="index.html">
                        <i class="material-icons md-32">input</i>
                    </a>

                </div>
            </header>

            <!--Contains-->

            <div class="mdl-cell--12-col mdl-grid">

                <div class="mdl-cell mdl-cell--3-col" style="text-align: right;">
                    <br><br>


                    <button id="tt3" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" onclick="location='admn-agregar-gimnasio.html'">
			<i class="material-icons">add</i>
		</button>
                    <div class="mdl-tooltip mdl-tooltip--large  " data-mdl-for="tt3">
                        Agregar Gimnasio Nuevo
                    </div>
                </div>

                <ul>
                    <br>
                    <h3 class="mdl-list__item-primary-content" style="text-align: center;">Gimnasios</h3>



                    <?php foreach ($conexion->query('SELECT nombre, id_gym FROM gyms') as $row){ // aca puedes hacer la consulta e iterarla con each. ?>

                    <li class="mdl-list__item">
                        <span class="mdl-list__item-primary-content">
				<i class="material-icons  mdl-list__item-avatar">person</i>
				<?php echo $row['nombre'] ?>
			</span>
                        <span style="color:white;">...........................................</span>
                        <span class="mdl-list__item-secondary-action">
				
                    <a href="../assets/php/admn-delete-gym.php?id='+<?php echo $row['id_gym'] ?>'" ><button class="mdl-button mdl-js-button mdl-button--raised mdl-button--coloredRed mdl-js-ripple-effect mdl-checkbox__input aling-rights">
					<i class="material-icons">delete</i>
				</button></a>
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
