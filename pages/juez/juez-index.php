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
	<link rel="stylesheet" href="../../assets/css/material.indigo-pink.min.css">
	<link rel="stylesheet" href="../../assets/scss/style.scss">

	<script src="http://code.jquery.com/jquery-1.10.2.js"></script>
	<script src="http://code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
	<script type="text/javascript" src="tournament-bracket.js"></script>
	<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
	<script src="http://code.jquery.com/jquery-1.12.1.js"></script>
	<script src="http://code.responsivevoice.org/responsivevoice.js"></script>
	<script language="javascript" type="text/javascript" src="../../assets/js/voz.js"></script>
	<script src="jquery-3.3.1.min.js"></script>
	<script src="data_concursantes.js"></script>
	<script src="data.js"></script>
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
			
				<!-- Add spacer, to align navigation to the right -->
				<div class="mdl-layout-spacer"></div>
			
				<a class="mdl__link" href="../index.html">
					<i class="material-icons md-32">input</i>
				</a>

			</div>
		</header>
		
		<!--Contains-->

       

<div class="mdl-cell mdl-cell--3-col" style="text-align: right;">

</div>

<ul>

    <h3 class="mdl-list__item-primary-content" style="text-align: center;">Torneos Autorizados</h3>

<?php foreach ($conexion->query('SELECT nombre, descripcion, fecha, id_torneo, estado, im5, i56, i78, i910, i1112, j1314, j1516, a17  FROM TORNEOS WHERE ESTADO = "A" ORDER BY FECHA DESC') as $row){ // aca puedes hacer la consulta e iterarla con each. ?>
    <li class="mdl-list__item">

<section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp mdl-cell--7-col">


<div class="mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
<div class="mdl-card__supporting-text mdl-cell--12-col">
<h3><?php echo $row['nombre'] ?></h3>
<p><?php echo $row['descripcion'] ?>
</p>
<h4><?php echo $row['fecha'] ?></h4>
<h4>Categorías:</h4>
            <?php if  ($row['im5'] == "S"){ ?>
                <p>Infantiles menor a 5 años</p>
                <?php
                    }
                ?>
                 <?php if  ($row['i56'] == "S"){ ?>
                    <p>Infantiles de 5 a 6 años</p>
                <?php
                    }
                ?>
                 <?php if  ($row['i78'] == "S"){ ?>
                    <p>Infantiles de 7 a 8 años</p>
                <?php
                    }
                ?>
                 <?php if  ($row['i910'] == "S"){ ?>
                    <p>Infantiles de 9 a 10 años</p>
                <?php
                    }
                ?>
                 <?php if  ($row['i1112'] == "S"){ ?>
                <p>Infantiles de 11 a 12 años</p>
                <?php
                    }
                ?>
                 <?php if  ($row['j1314'] == "S"){ ?>
                    <p>Juveniles de 13 a 14 años</p>
                <?php
                    }
                ?>
                 <?php if  ($row['j1516'] == "S"){ ?>
                    <p>Juveniles de 15 a 16 años</p>
                <?php
                    }
                ?>
                 <?php if  ($row['a17'] == "S"){ ?>
                    <p>Adultos mayor a 17 años</p>
                <?php
                    }
                ?>



</div>

<div class="mdl-card__actions mdl-card--border">
<div class="mdl-card__actions" style="text-align: right;">
    
   <a href="category.php?id='+<?php echo $row['id_torneo'] ?>'"> <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--coloredCyan mdl-js-ripple-effect mdl-checkbox__input aling-rights"
                                        style="left:-68%;">
                                        <i class="material-icons">visibility</i>
                                    </button></a>

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