<?php
$CATEGORIA = $_GET["categoria"];
// echo $CATEGORIA;
session_start();
$_SESSION["CATEGORIA"] = $CATEGORIA;
?>
	<!DOCTYPE html>
	<html lang="en">

	<head>
		<meta charset="utf-8" />

		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
		<link rel="stylesheet" href="../../assets/css/material.indigo-pink.min.css">
		<link rel="stylesheet" href="../../assets/scss/style.scss">

		<script src="http://code.jquery.com/jquery-1.10.2.js"></script>
		<script src="http://code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
		<script type="text/javascript" src="tournament-bracket.js"></script>
		<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
		<script src="http://code.jquery.com/jquery-1.12.1.js"></script>
		<script src="http://code.responsivevoice.org/responsivevoice.js"></script>
		<script src="jquery-3.3.1.min.js" type="text/javascript"></script>
		<script src="data_concursantes.js" type="text/javascript"></script>
		<!-- Esta libreria no se debe borrar -->
		<script src="synaptic.js"></script>

		<script src="https://storage.googleapis.com/code.getmdl.io/1.0.5/material.min.js"></script>
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
		<script src="//code.jquery.com/jquery-2.1.4.min.js"></script>
		<link rel="stylesheet" href="mdl-jquery-modal-dialog.css">
		<script src="mdl-jquery-modal-dialog.js"></script>

		<title>
			Grafica de Combates
		</title>
	</head>

	<body>
		<!--Header-->
		<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
			<header class="mdl-layout__header">
				<div class="mdl-layout__header-row">
					<!-- Title -->
					<div class="mdl-navigation mdl-layout">

						<a class="mdl-navigation__link mdl-js-ripple-effect" onclick="enviarGanadores()">
							ANUNCIAR GANADORES
						</a>
						<a class="mdl-navigation__link mdl-js-ripple-effect" onclick="score()">
							GUARDAR VALORES
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
			<br>

			<br>
			<br>
			<br>


			<main class="mdl-layout__content">
				<div class=" mdl-grid">
					<div class="mdl-cell mdl-cell--12-col">
						<br>

						<div style="text-align:center;">
							

							<p><input type="button" id="btn1" value="Iniciar Graficación" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onclick="graphic(this)"</p>

							<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
							
							<div class="tournament">
								<script src="tournament-bracket.js"></script>
							</div>
						</div>
					</div>
				</div>
		</div>


		</div>
	</body>

	</html>