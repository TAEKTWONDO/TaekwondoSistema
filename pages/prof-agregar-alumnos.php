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
		Karem
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
					<a class="mdl-navigation__link" href="prof-estadisticas.php">
						ESTADÍSTICAS
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
					<br>

					<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" style="background: rgb(63,81,181); font-size: 20px;">3
					</button>
				</div>

				<div class="mdl-cell mdl-cell--6-col">
					<ul>
						<br>
						<h3 class="mdl-list__item-primary-content" style="text-align: center;">Agregar Alumno</h3>

						<br>
						<form method="POST" name="add_gym" id="add_gym" action="../assets/php/prof_alumno.php" autocomplete="off">
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
										<input class="mdl-textfield__input" type="text" id="nombre" name="nombre" pattern="[A-Z,a-z, , áéíóúÁÉÍÓÚÜü]*">
										<label class="mdl-textfield__label" for="nombre"> Nombre(s)</label>
										<span class="mdl-textfield__error">Ingresar unicamente letras</span>
									</div>

								</div>
								<div class="valign-center" style="padding-left: 39px;">

									<div class="mdl-textfield mdl-js-textfield">
										<input class="mdl-textfield__input" type="text" id="apellidos" name="apellidos" pattern="[A-Z,a-z, , áéíóúÁÉÍÓÚÜü]*">
										<label class="mdl-textfield__label" for="apellidos">Apellidos</label>
										<span class="mdl-textfield__error">Ingresar unicamente letras</span>
									</div>

								</div>


								<div class="valign-center">

									<i class="material-icons" style="padding-right: 10px; font-size: 34px">cake</i>
									<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label 	">
										<input class="mdl-textfield__input" type="number" id="fecha_nacimiento" name="fecha_nacimiento">
										<label class="mdl-textfield__label" for="fecha_nacimiento">Edad</label>
										<span class="mdl-textfield__error">Ingresar unicamente letras</span>
									</div>
								</div>

								<div class="valign-center">

									<img src="https://png.icons8.com/material/38/000000/transgender.png" style="padding-right: 10px;">
									<!-- Simple Select with arrow -->
									<div class="mdl-textfield mdl-js-textfield getmdl-select">
										<input type="text" value="" class="mdl-textfield__input" id="genero" name="genero" readonly>
										<input type="hidden" value="" name="genero" id="genero" >
										<i class="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
										<label for="sample2" class="mdl-textfield__label" for="genero">Sexo</label>
										<ul for="sample2" class="mdl-menu mdl-menu--bottom-left mdl-js-menu">
											<li class="mdl-menu__item" data-val="F">Femenino</li>
											<li class="mdl-menu__item" data-val="H">Masculino</li>
										</ul>
									</div>
								</div>
							</div>
							<br>
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
									<img src="https://png.icons8.com/ios/34/000000/kimono-filled.png" style="padding-right: 10px;">

									<!-- Simple Select with arrow -->
									<div class="mdl-textfield mdl-js-textfield getmdl-select">
										<input type="text" value="" class="mdl-textfield__input" id="cinta" name="cinta" >
										<input type="hidden" value="" name="cinta">
										<i class="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
										<label for="sample2" class="mdl-textfield__label">Cinta</label>
										<ul for="sample2" class="mdl-menu mdl-menu--bottom-left mdl-js-menu">
											<li class="mdl-menu__item" data-val="blanca">Blanca</li>
											<li class="mdl-menu__item" data-val="amarilla">Amarrilla</li>
											<li class="mdl-menu__item" data-val="verde">Verde</li>
											<li class="mdl-menu__item" data-val="azul">Azul</li>
											<li class="mdl-menu__item" data-val="rojo">Rojo</li>
											<li class="mdl-menu__item" data-val="negra">Negra</li>
										</ul>
									</div>
								</div>
								</div>
							<br>
							<!--Información médica-->
							<div>
								<h4 style="color: black;">
									<b>Información médica</b>
								</h4>
							</div>
							<div class="aSeparator"></div>
							<br>
							<div class="paddingForm">
								<div class="valign-center">
									<img src="https://png.icons8.com/material/38/000000/kitchen-scales.png">
									<div class="mdl-textfield mdl-js-textfield">
										<input class="mdl-textfield__input" type="text" id="peso"  name="peso" pattern="[0-9.]*">
										<label class="mdl-textfield__label" for="peso"> Peso en kilogramos</label>
										<span class="mdl-textfield__error">Ingresar unicamente números</span>
									</div>
								</div>
								<div class="valign-center">
									<img src="https://png.icons8.com/ios/38/000000/height-filled.png">
									<div class="mdl-textfield mdl-js-textfield">
										<input class="mdl-textfield__input" type="text" id="altura" name="altura" pattern="[0-9.]*">
										<label class="mdl-textfield__label" for="altura">Altura en metros</label>
										<span class="mdl-textfield__error">Ingresar unicamente números</span>
									</div>
								</div>
								<div class="mdl-card__actions mdl-card--border">
										<div class="mdl-card__actions" style="text-align: right;">
											<button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--coloredGreen mdl-js-ripple-effect mdl-checkbox__input aling-rights"> 
							<i class="material-icons">send</i>
						</button>
		
											<a href="prof-alumnos.php"><button type="button"  class="mdl-button mdl-js-button mdl-button--raised mdl-button--coloredRed mdl-js-ripple-effect mdl-checkbox__input aling-rights"> 
							<i class="material-icons" >cancel</i>
							  </button></a>
										</div>
									</div>
							</div>
						</form>
					</ul>
				</div>
			</div>
		</main>
</body>

</html>