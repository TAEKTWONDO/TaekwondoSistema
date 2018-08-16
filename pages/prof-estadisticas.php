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
        <script defer src="../assets/js/alerts.js"></script>
        <title>
            Estadísticas
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

                <div class="mdl-cell mdl-cell--2-col" style="text-align: right;">

                </div>

                <ul>

                    <h3 class="mdl-list__item-primary-content" style="text-align: center;">Estadísticas</h3>
                    <br>
                    <br>
                    <div class="valign-center">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="60" viewBox="0 0 252 252" style="fill:#ffffff;">
              <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"
                style="mix-blend-mode: normal">
                <path d="M0,252v-252h252v252z" fill="none"></path>
                <g>
                  <g id="surface1">
                    <path d="M73.5,21c11.60742,0 21,9.39258 21,21c0,11.60742 -9.39258,21 -21,21c-11.60742,0 -21,-9.39258 -21,-21c0,-11.60742 9.39258,-21 21,-21"
                      fill="#ffba57"></path>
                    <path d="M215.25,73.5c0,-5.80371 -4.69629,-10.5 -10.5,-10.5c-2.80957,0 -5.35254,1.12793 -7.23926,2.91211l-64.80469,40.1748l-15.4834,-23.23535c-0.51269,-0.77929 -1.14844,-1.41504 -1.74316,-2.11231l48.33691,-29.16211c3.83496,-2.03027 5.31152,-6.78809 3.26074,-10.64356c-2.03027,-3.83496 -6.80859,-5.31152 -10.64356,-3.26074l-89.25,47.25c-1.3125,0.69727 -2.39941,1.74317 -3.1582,3.05567l-21,36.75c-1.92774,3.36328 -1.10742,7.62891 1.92773,10.04883l26.25,21c1.45606,1.14844 3.19922,1.72266 4.92188,1.72266c2.29688,0 4.59375,-1.00488 6.15234,-2.95312c2.70703,-3.40429 2.17383,-8.34668 -1.23047,-11.07422l-21,-16.7959l20.75391,-23.31738c0.43066,0.94336 0.88184,1.88672 1.47656,2.78906l22.72266,33.18164v81.16992c0,5.80371 4.69629,10.5 10.5,10.5c5.80371,0 10.5,-4.69629 10.5,-10.5l10.5,-84l73.11035,-53.75098c3.34277,-1.74316 5.63965,-5.20899 5.63965,-9.24902z"
                      fill="#d2ccc9"></path>
                    <path d="M136.5,136.5l-10.5,84v-78.75z" fill="#d2ccc9"></path>
                    <path d="M80.49316,103.58496l24.48633,35.7041c14.84766,-10.17187 24.17871,-24.52734 28.40332,-32.17676l-17.88281,-26.61914c0,0 -16.87793,10.64356 -35.00684,23.0918z"
                      fill="#2980b9"></path>
                  </g>
                </g>
              </g>
            </svg>
                        <!-- Simple Select with arrow -->
                        <div class="mdl-textfield mdl-js-textfield getmdl-select">
                            <input type="text" value="" class="mdl-textfield__input" id="azul" name="azul" readonly>
                            <input type="hidden" value="" name="azul" id="azul">
                            <i class="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
                            <label for="sample2" class="mdl-textfield__label" for="azul">Mi competidor</label>
                            <ul for="sample2" class="mdl-menu mdl-menu--bottom-left mdl-js-menu">

                                <?php foreach ($conexion->query('SELECT nombre, id_alumno, apellidos FROM ALUMNOS WHERE ID_MAESTRO = '. $_SESSION["ID_PROFE"]) as $row){ // aca puedes hacer la consulta e iterarla con each. ?>
                                <li class="mdl-menu__item">
                                    <?php echo $row['nombre'].$row['apellidos'] ?>
                                </li>
                                <?php }  ?>
                            </ul>
                        </div>
                    </div>

                    <b style="font-size:23px; padding-right: 20px;padding-left: 20px;">VS</b>
                    <div class="valign-center">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="60" viewBox="0 0 252 252" style="fill:#ffffff;">
              <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"
                style="mix-blend-mode: normal">
                <path d="M0,252v-252h252v252z" fill="none"></path>
                <g>
                  <g id="surface1">
                    <path d="M73.5,21c11.60742,0 21,9.39258 21,21c0,11.60742 -9.39258,21 -21,21c-11.60742,0 -21,-9.39258 -21,-21c0,-11.60742 9.39258,-21 21,-21"
                      fill="#ffba57"></path>
                    <path d="M215.25,73.5c0,-5.80371 -4.69629,-10.5 -10.5,-10.5c-2.80957,0 -5.35254,1.12793 -7.23926,2.91211l-64.80469,40.1748l-15.4834,-23.23535c-0.51269,-0.77929 -1.14844,-1.41504 -1.74316,-2.11231l48.33691,-29.16211c3.83496,-2.03027 5.31152,-6.78809 3.26074,-10.64356c-2.03027,-3.83496 -6.80859,-5.31152 -10.64356,-3.26074l-89.25,47.25c-1.3125,0.69727 -2.39941,1.74317 -3.1582,3.05567l-21,36.75c-1.92774,3.36328 -1.10742,7.62891 1.92773,10.04883l26.25,21c1.45606,1.14844 3.19922,1.72266 4.92188,1.72266c2.29688,0 4.59375,-1.00488 6.15234,-2.95312c2.70703,-3.40429 2.17383,-8.34668 -1.23047,-11.07422l-21,-16.7959l20.75391,-23.31738c0.43066,0.94336 0.88184,1.88672 1.47656,2.78906l22.72266,33.18164v81.16992c0,5.80371 4.69629,10.5 10.5,10.5c5.80371,0 10.5,-4.69629 10.5,-10.5l10.5,-84l73.11035,-53.75098c3.34277,-1.74316 5.63965,-5.20899 5.63965,-9.24902z"
                      fill="#d2ccc9"></path>
                    <path d="M136.5,136.5l-10.5,84v-78.75z" fill="#d2ccc9"></path>
                    <path d="M80.49316,103.58496l24.48633,35.7041c14.84766,-10.17187 24.17871,-24.52734 28.40332,-32.17676l-17.88281,-26.61914c0,0 -16.87793,10.64356 -35.00684,23.0918z"
                      fill="#c0392b"></path>
                  </g>
                </g>
              </g>
            </svg>
                        <!-- Simple Select with arrow -->
                        <div class="mdl-textfield mdl-js-textfield getmdl-select">
                            <input type="text" value="" class="mdl-textfield__input" id="rojo" name="rojo" readonly>
                            <input type="hidden" value="" name="rojo" id="rojo">
                            <i class="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
                            <label for="sample2" class="mdl-textfield__label" for="rojo">Contrincante</label>
                            <ul for="sample2" class="mdl-menu mdl-menu--bottom-left mdl-js-menu">
                                <?php foreach ($conexion->query(' SELECT ID_ALUMNO, NOMBRE, APELLIDOS FROM ALUMNOS WHERE ID_ALUMNO NOT IN (SELECT ID_ALUMNO FROM ALUMNOS WHERE ID_MAESTRO ='. $_SESSION["ID_PROFE"].')') as $row){ // aca puedes hacer la consulta e iterarla con each. ?>

                                <li class="mdl-menu__item">
                                    <?php echo $row['NOMBRE'].$row['APELLIDOS'] ?>
                                </li>
                                <?php }  ?>
                            </ul>
                        </div>
                    </div>
                    <br>
                    <br>
                    <br>
                    <div style="text-align: center;">

                        <button class="mdl-button mdl-js-button mdl-button--raised  mdl-button--coloredBlue mdl-js-ripple-effect mdl-button--accent">
              Diagnosticar resultados
            </button>


                    </div>
                </ul>
            </div>
        </div>


    </body>

    </html>
