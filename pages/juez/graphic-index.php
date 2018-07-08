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
					<a class="mdl-navigation__link mdl-js-ripple-effect"  onclick="graphic()">
						INICIAR
					</a>
					<a class="mdl-navigation__link mdl-js-ripple-effect"  onclick="enviarGanadores()">
						ANUNCIAR GANADORES
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
		<div class="tournament">
			<script src="tournament-bracket.js">
			</script>

		</div>


	</div>
</body>

</html>