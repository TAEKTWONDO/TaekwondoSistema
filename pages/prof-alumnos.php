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
$results_num =0;


?>
    <!DOCTYPE html>
    <html lang="es">

    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="../assets/css/material.indigo-pink.min.css">
        <link rel="stylesheet" href="../assets/scss/style.scss">

        <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
        <script defer src="../assets/js/alerts.js"></script>
        <title>
            Mis Alumnos
        </title>
    </head>

    <body>

        <script> window.onload = function() {
                res = document.URL.search("op=0");
                res = document.URL.substr(res);
                //console.log(res);
                if (res == "op=0"){
                    alert("Lo sentimos. La operación no pudo ser completada\nIntente de nuevo más tarde");
                }
            };
        </script>

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


                    <button id="tt3" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" onclick="location='prof-agregar-alumnos.php'">
						<i class="material-icons">add</i>
					</button>
                    <div class="mdl-tooltip mdl-tooltip--large  " data-mdl-for="tt3">
                        Agregar Nuevo Alumno
                    </div>
                </div>

                <ul>
                    <br>
                    <h3 class="mdl-list__item-primary-content" style="text-align: center;">Alumnos</h3>

                    <form action="" method="GET">
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">

                            <div class="mdl-textfield__expandable-holder">
                                <input class="mdl-textfield__input" type="text" id="sample6" name="query">
                                <label class="mdl-textfield__label" for="sample-expandable" style="color: black;">Buscar</label>
                            </div>
                            <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--coloredBlue mdl-js-ripple-effect mdl-checkbox__input" name="submit">
								<i class="material-icons">search</i>
							</button>
                            </a>

                        </div>
                    </form>
                    <?php 
					if(isset($_GET['submit'])){	
							$query=$_GET['query'];	
											
					foreach ($conexion->query('SELECT nombre, id_alumno, apellidos FROM ALUMNOS WHERE (nombre LIKE "%'.$query.'%" OR apellidos LIKE "%'.$query.'%") AND ID_MAESTRO = '. $_SESSION["ID_PROFE"]) as $row){ // aca puedes hacer la consulta e iterarla con each. 
						
						$results_num =+1;
						if(sizeof($row) == 0){
							echo "No hay alumnos";
					}else{
					?>
                    <li class="mdl-list__item">
                        <span class="mdl-list__item-primary-content">
							<i class="material-icons  mdl-list__item-avatar">person</i>
							<?php echo $row['nombre'] . " " . $row['apellidos']  ?>
						</span>

                        <span style="color:white;">...........................................</span>

                        <span class="mdl-list__item-secondary-action">
                                <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--coloredRed mdl-js-ripple-effect mdl-checkbox__input aling-rights"
                                    onclick="eraseItem('alumno', <?php echo $row['id_alumno'] ?> )" >
									<i class="material-icons">delete</i>
								</button>
						</span>

                        <?php
				
				
			}		
			}
			
			echo "<script>console.log( 'Debug Objects2: " . $results_num. "' );</script>";
			if( $results_num=0){
				echo "<h1>None</h1>";
		}	?>
                    </li>
                    <?php
					}
                		
					else{
					foreach ($conexion->query('SELECT nombre, id_alumno, apellidos FROM ALUMNOS WHERE ID_MAESTRO = '. $_SESSION["ID_PROFE"]) as $row){ // aca puedes hacer la consulta e iterarla con each. ?>

                        <li class="mdl-list__item">
                            <span class="mdl-list__item-primary-content">
							<i class="material-icons  mdl-list__item-avatar">person</i>
							<?php echo $row['nombre']." ".$row['apellidos']  ?>
						</span>

                            <span style="color:white;">...........................................</span>

                            <span class="mdl-list__item-secondary-action">
                                <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--coloredRed mdl-js-ripple-effect mdl-checkbox__input aling-rights"
                                    onclick="eraseItem('alumno', <?php echo $row['id_alumno'] ?> )" >
									    <i class="material-icons">delete</i>
								</button>
						</span>
                        </li>
                        <?php
                    }}
                ?>



                </ul>
            </div>
        </div>


    </body>

    </html>
