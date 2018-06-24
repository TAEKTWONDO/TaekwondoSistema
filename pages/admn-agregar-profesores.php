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
    <link rel="stylesheet" href="./node_modules/mdl-selectfield/dist/mdl-selectfield.min.css">
    <!-- getmdl -->

    <script defer src="../assets/js/material.min.js"></script>
    <!--getmdl-select-->
    <link rel="stylesheet" href="../assets/css/getmdl-select.min.css">
    <script defer src="../assets/js/getmdl-select.min.js"></script>

    <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
    <title>
        ADMN AGREGAR MAESTRO
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

                    <a class="mdl-navigation__link" href="admn-gimnasios.php">
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
        <main class="mdl-layout__content">
            <div class=" mdl-grid">
                <div class="mdl-cell mdl-cell--3-col" style="text-align: right;">
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" style="background: rgb(63,81,181); font-size: 20px;">1
					</button>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" style="background: rgb(63,81,181); font-size: 20px;">2
					</button>

                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>

                    <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" style="background: rgb(63,81,181); font-size: 20px;">3
					</button>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>


                    <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" style="background: rgb(63,81,181); font-size: 20px;">4
					</button>

                </div>

                <div class="mdl-cell mdl-cell--6-col">
                    <ul>
                        <br>
                        <h3 class="mdl-list__item-primary-content" style="text-align: center;">Agregar Maestro</h3>

                        <br>
                        <form method="POST" name="add_gym" id="add_gym" action="../assets/php/admins_profesor.php" autocomplete="off">
                            <!--Información personal-->
                            <div>
                                <h4 style="color: black;">
                                    <b>Datos personales</b>
                                </h4>
                            </div>
                            <div class="aSeparator"></div>
                            <br>
                            <div class="paddingForm">
                                <div class="valign-center">

                                    <img src="https://png.icons8.com/android/30/000000/user.png" style="padding-right: 10px;">
                                    <div class="mdl-textfield mdl-js-textfield">
                                        <input class="mdl-textfield__input" type="text" id="nombre_maestro" name="nombre_maestro" pattern="[A-Z,a-z, , áéíóúÁÉÍÓÚÜü]*">
                                        <label class="mdl-textfield__label" for="nombre_maestro"> Nombre(s)</label>
                                        <span class="mdl-textfield__error">Ingresar unicamente letras</span>
                                    </div>

                                </div>
                                <div class="valign-center" style="padding-left: 39px;">

                                    <div class="mdl-textfield mdl-js-textfield">
                                        <input class="mdl-textfield__input" type="text" id="apellidos_maestro" name="apellidos_maestro" pattern="[A-Z,a-z, , áéíóúÁÉÍÓÚÜü]*">
                                        <label class="mdl-textfield__label" for="apellidos_maestro">Apellidos</label>
                                        <span class="mdl-textfield__error">Ingresar unicamente letras</span>
                                    </div>

                                </div>
                            </div>




                            <!--Información deportiva-->
                            <div>
                                <h4 style="color: black;">
                                    <b>Información deportiva</b>
                                </h4>
                            </div>
                            <div class="aSeparator"></div>
                            <br>
                            <div class="paddingForm">
                                <div class="valign-center">
                                    <img src="https://png.icons8.com/ios/50/000000/rod-barbells.png" style="padding-right: 20px;" width="10%">

                                    <!-- Simple Select with arrow -->
                                    <div class="mdl-textfield mdl-js-textfield getmdl-select">
                                        <input type="text" value="" class="mdl-textfield__input" id="gimnasio" name="gimnasio" readonly>
                                        <input type="hidden" value="" name="gimnasio" id="gimnasio">
                                        <i class="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
                                        <label for="sample3" class="mdl-textfield__label">Gimnasio</label>
                                        <ul for="sample3" class="mdl-menu mdl-menu--bottom-left mdl-js-menu">
                                        <?php foreach ($conexion->query('SELECT nombre, id FROM GYMS') as $row){ // aca puedes hacer la consulta e iterarla con each. ?>
                
                                            <li class="mdl-menu__item" data-val=><?php echo $row['nombre'] ?> 1</li>
                                            
                                       
                                        <?php
                    }
                ?> </ul>
                                    </div>
                                </div>
                            </div>

                            <br>
                            <!--Información de contacto-->
                            <div>
                                <h4 style="color: black;">
                                    <b>Información de contacto</b>
                                </h4>
                            </div>
                            <div class="aSeparator"></div>
                            <br>
                            <div class="paddingForm">
                                <div class="valign-center">
                                    <img src="https://png.icons8.com/ios/50/000000/order-delivered-filled.png" style="padding-right: 20px;" width="10%">
                                    <div class="mdl-textfield mdl-js-textfield">

                                        <textarea class="mdl-textfield__input" data-length="120" id="direccion_maestro" name="direccion_maestro"></textarea>
                                        <label class="mdl-textfield__label" for="direccion_maestro"> Dirección </label>
                                    </div>
                                </div>
                                <div class="valign-center">
                                    <img src="https://png.icons8.com/ios/50/000000/phonelink-ring-filled.png" style="padding-right: 20px;" width="10%">
                                    <div class="mdl-textfield mdl-js-textfield">
                                        <input class="mdl-textfield__input" type="tel" id="telefono_maestro"  name="telefono_maestro" pattern="[0-9.]*">
                                        <label class="mdl-textfield__label" for="telefono_maestro">Telefono</label>
                                        <span class="mdl-textfield__error">Ingresar unicamente números</span>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <!--Información de la cuenta-->
                            <div>
                                <h4 style="color: black;">
                                    <b>Información de la cuenta</b>
                                </h4>
                            </div>
                            <div class="aSeparator"></div>
                            <br>
                            <div class="paddingForm">
                                <div class="valign-center">
                                    <img src="https://png.icons8.com/ios/50/000000/secured-letter-filled.png" style="padding-right: 20px;" width="10%">
                                    <div class="mdl-textfield mdl-js-textfield">
                                        <input class="mdl-textfield__input" type="email" id="correo_maestro" name="correo_maestro"  class="validate">
                                        <label class="mdl-textfield__label" for="correo_maestro">Correo Electronico</label>
                                    </div>
                                </div>
                                <div class="valign-center">
                                    <img src="https://png.icons8.com/ios/50/000000/password-filled.png" style="padding-right: 20px;" width="10%">
                                    <div class="mdl-textfield mdl-js-textfield">
                                        <input class="mdl-textfield__input" type="password" id="pass_maestro" name="pass_maestro" class="validate">
                                        <label class="mdl-textfield__label" for="pass_maestro">Contraseña</label>

                                    </div>
                                </div>
                                <div class="mdl-textfield mdl-js-textfield" style="left:13%;">
                                    <input class="mdl-textfield__input" class="validate" type="password">
                                    <label class="mdl-textfield__label">Confirmar Contraseña</label>

                                </div>
                            </div>


                            <div class="mdl-card__actions mdl-card--border">
                                <div class="mdl-card__actions" style="text-align: right;">
                                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--coloredGreen mdl-js-ripple-effect mdl-checkbox__input aling-rights"> 
					<i class="material-icons">send</i>
				</button>

                <a href="admn-profesores.php"><button type="button"  class="mdl-button mdl-js-button mdl-button--raised mdl-button--coloredRed mdl-js-ripple-effect mdl-checkbox__input aling-rights"> 
                        <i class="material-icons" >cancel</i>
                          </button></a>
                                </div>
                            </div>
                        </form>
                    </ul>
                </div>
            </div>
        </main>
</body>

</html>
