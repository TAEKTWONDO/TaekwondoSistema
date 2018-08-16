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

session_start();
//echo $_SESSION["ID_PROFE"]; 

$subject = $_GET['id_torneo'];

?>
    <!DOCTYPE html>
    <html lang="es">

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="../assets/css/material.indigo-pink.min.css">
        <link rel="stylesheet" href="../assets/scss/style.scss">

        <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
        <script defer src="../assets/js/alerts.js"></script>
        <title>
            Mis Participantes
        </title>
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

                        <a class="mdl-navigation__link" href="prof-torneos.php">
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
                    <br>
                    <br>
                </div>
                <ul>
                    <br>
                    <?php foreach ($conexion->query('SELECT NOMBRE FROM TORNEOS WHERE TORNEOS.ID_TORNEO = '.$subject) as $row){ // aca puedes hacer la consulta e iterarla con each. ?>
                    <h3 class="mdl-list__item-primary-content" style="text-align: center;">
                        <?php echo $row['NOMBRE']?> </h3>
                    <?php }?>

                    <BR>
                    <h4 class="mdl-list__item-primary-content" style="text-align: center;">Alumnos Participantes</h4>

                    <!--form action="#">
						<div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
						
							<div class="mdl-textfield__expandable-holder">
								<input class="mdl-textfield__input" type="text" id="sample6">
								<label class="mdl-textfield__label" for="sample-expandable" style="color: black;">Buscar</label>
							</div>
								<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--coloredBlue mdl-js-ripple-effect mdl-checkbox__input"
							    name="submit">
								<i class="material-icons">search</i>
							</button>
						</div>
					</form-->
                    <form action="" method="GET">
                        <?php foreach ($conexion->query('SELECT ALUMNOS.NOMBRE, ALUMNOS.APELLIDOS, ALUMNOS.ID_ALUMNO FROM ALUMNOS, CONCURSANTES WHERE CONCURSANTES.ID_ALUMNO = ALUMNOS.ID_ALUMNO AND CONCURSANTES.ID_TORNEO = '.$subject.' AND ALUMNOS.ID_MAESTRO = '. $_SESSION["ID_PROFE"]) as $row){ // aca puedes hacer la consulta e iterarla con each. ?>
                        <li class="mdl-list__item">
                            <span class="mdl-list__item-primary-content">
								<i class="material-icons  mdl-list__item-avatar">person</i>
								<?php echo $row['NOMBRE'] . " " . $row['APELLIDOS']  ?>
							</span>
                            <span style="color:white;">...........................................</span>
                            <span class="mdl-list__item-secondary-action">							

								<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" style="background:rgb(241, 0, 0);"
                                    onclick="getContestant('retirar', <?php echo $row['ID_ALUMNO'] ?>, <?php echo $subject ?> )" type="button">
									<i class="material-icons">clear</i>
								</button>
							</span>
                        </li>
                        <?php
    }
    ?>
                    </form>
                    <br>
                    <h4 class="mdl-list__item-primary-content" style="text-align: center;">No Participantes</h4>

                    <!--form action="#">
						<div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
							<label class="mdl-button mdl-js-button mdl-button--icon" for="sample6">
								<i class="material-icons">search</i>
							</label>
							<div class="mdl-textfield__expandable-holder">
								<input class="mdl-textfield__input" type="text" id="sample6">
								<label class="mdl-textfield__label" for="sample-expandable" style="color: black;">Buscar</label>
							</div>
						</div>
					</form-->

                    <form action="" method="GET">
                        <?php foreach ($conexion->query('SELECT NOMBRE, APELLIDOS, ID_ALUMNO FROM ALUMNOS WHERE ID_MAESTRO = '. $_SESSION["ID_PROFE"].' AND ID_ALUMNO NOT IN (SELECT ALUMNOS.ID_ALUMNO FROM ALUMNOS, CONCURSANTES WHERE CONCURSANTES.ID_ALUMNO = ALUMNOS.ID_ALUMNO AND CONCURSANTES.ID_TORNEO = '.$subject.' AND ALUMNOS.ID_MAESTRO = '. $_SESSION["ID_PROFE"].')') as $row){ // aca puedes hacer la consulta e iterarla con each. ?>
                        <li class="mdl-list__item">
                            <span class="mdl-list__item-primary-content">
								<i class="material-icons  mdl-list__item-avatar">person</i>
								<?php echo $row['NOMBRE'] . " " . $row['APELLIDOS']  ?>
							</span>
                            <span style="color:white;">...........................................</span>
                            <span class="mdl-list__item-secondary-action">
								<!--a href="../assets/php/prof-agregar-participante.php?id_alumno='+<?php// echo $row['ID_ALUMNO'] ?>+'?id_torneo='+<?php //echo $subject ?>'"-->
								<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" style="background:rgb(42, 149, 24);"
                                    onclick="getContestant('registrar', <?php echo $row['ID_ALUMNO'] ?>, <?php echo $subject ?> )" type="button">
									<i class="material-icons">add</i>
								</button>
								

							</span>
                        </li>
                        <?php
		}
	
    ?>
                    </form>

                    <!--li class="mdl-list__item">
				<span class="mdl-list__item-primary-content">
					<i class="material-icons  mdl-list__item-avatar">person</i>
					Bryan Cranstond
				</span>
			
				<span style="color:white;">...........................................</span>
			
				<span class="mdl-list__item-secondary-action">
					<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored"
					 style="background:rgb(42, 149, 24);">
						<i class="material-icons">add</i>
					</button>
				</span>
			</li-->


                </ul>



            </div>
        </div>

    </body>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    </html>
