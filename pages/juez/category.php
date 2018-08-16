<?php
$servidor = "localhost";
$usuario = "root";
$contra = "";
$bd = "taektwondo";
$ID_TORNEO = $_GET['id'];
// echo $ID_TORNEO;

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
		Categoria
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
  
        <div class="mdl-cell--12-col mdl-grid">
  
  <div class="mdl-cell mdl-cell--3-col" style="text-align: right;">
      <br><br>	
  </div>			
<ul>
      <br>
      <h3 class="mdl-list__item-primary-content" style="text-align: center;">Categorías</h3>
      
          
          <?php foreach ($conexion->query('SELECT id_torneo, im5, i56, i78, i910, i1112, j1314, j1516, a17 FROM TORNEOS WHERE ID_TORNEO = '.$ID_TORNEO) as $row){ // aca puedes hacer la consulta e iterarla con each. ?>
               <?php if  ($row['im5'] == "S"){ ?>
            <li class="mdl-list__item">
				<span class="mdl-list__item-primary-content">
					<i class="material-icons  mdl-list__item-avatar">wc</i>
           
                <p>Infantiles menor a 5 años</p>
                
            </span>
            <span style="color:white;">...........................................</span>
          <span class="mdl-list__item-secondary-action">
              <a href="graphic-index.php?torneo=+<?php  echo $row['id_torneo']; ?>&categoria=IM5&categorias= + <?php if($row['im5'] == "S"){echo "IM5 ";} if($row['i56'] == "S"){echo "I56 ";} if($row['i78'] == "S"){echo "I78 ";} if($row['i910'] == "S"){echo "I910 ";} if($row['i1112'] == "S"){echo "I1112 ";} if($row['j1314'] == "S"){echo "J1314 ";} if($row['j1516'] == "S"){echo "J1516 ";}  if($row['a17'] == "S"){echo "A17";} ?>" ><button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" 
               style="background:rgb(42, 149, 24);">
                  <i class="material-icons">assignment_turned_in</i>
              </button></a>
          </span>
      </li>
                <?php
                    }
                ?>


 <?php if  ($row['i56'] == "S"){ ?>
                <li class="mdl-list__item">
				<span class="mdl-list__item-primary-content">
					<i class="material-icons  mdl-list__item-avatar">wc</i>
                
                    <p>Infantiles de 5 a 6 años</p>
                    </span>
            <span style="color:white;">...........................................</span>
          <span class="mdl-list__item-secondary-action">
          <a href="graphic-index.php?torneo=+<?php  echo $row['id_torneo']; ?>&categoria=I56&categorias= + <?php if($row['im5'] == "S"){echo "IM5 ";} if($row['i56'] == "S"){echo "I56 ";} if($row['i78'] == "S"){echo "I78 ";} if($row['i910'] == "S"){echo "I910 ";} if($row['i1112'] == "S"){echo "I1112 ";} if($row['j1314'] == "S"){echo "J1314 ";} if($row['j1516'] == "S"){echo "J1516 ";}  if($row['a17'] == "S"){echo "A17";} ?>"><button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" 
               style="background:rgb(42, 149, 24);">
                  <i class="material-icons">assignment_turned_in</i>
              </button></a>
          </span>
      </li>
                <?php
                    }
                ?>

<?php if  ($row['i78'] == "S"){ ?>
                <li class="mdl-list__item">
				<span class="mdl-list__item-primary-content">
					<i class="material-icons  mdl-list__item-avatar">wc</i>
                
                    <p>Infantiles de 7 a 8 años</p>
                    </span>
            <span style="color:white;">...........................................</span>
          <span class="mdl-list__item-secondary-action">
          <a href="graphic-index.php?torneo=+<?php  echo $row['id_torneo']; ?>&categoria=I56&categorias= + <?php if($row['im5'] == "S"){echo "IM5 ";} if($row['i56'] == "S"){echo "I56 ";} if($row['i78'] == "S"){echo "I78 ";} if($row['i910'] == "S"){echo "I910 ";} if($row['i1112'] == "S"){echo "I1112 ";} if($row['j1314'] == "S"){echo "J1314 ";} if($row['j1516'] == "S"){echo "J1516 ";}  if($row['a17'] == "S"){echo "A17";} ?>"><button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" 
               style="background:rgb(42, 149, 24);">
                  <i class="material-icons">assignment_turned_in</i>
              </button></a>
          </span>
      </li>
                <?php
                    }
                ?>

<?php if  ($row['i910'] == "S"){ ?>
                <li class="mdl-list__item">
				<span class="mdl-list__item-primary-content">
					<i class="material-icons  mdl-list__item-avatar">wc</i>
                 
                    <p>Infantiles de 9 a 10 años</p>
                    <span style="color:white;">...........................................</span>
          <span class="mdl-list__item-secondary-action">
          <a href="graphic-index.php?torneo=+<?php  echo $row['id_torneo']; ?>&categoria=I910&categorias= + <?php if($row['im5'] == "S"){echo "IM5 ";} if($row['i56'] == "S"){echo "I56 ";} if($row['i78'] == "S"){echo "I78 ";} if($row['i910'] == "S"){echo "I910 ";} if($row['i1112'] == "S"){echo "I1112 ";} if($row['j1314'] == "S"){echo "J1314 ";} if($row['j1516'] == "S"){echo "J1516 ";}  if($row['a17'] == "S"){echo "A17";} ?>"><button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" 
               style="background:rgb(42, 149, 24);">
                  <i class="material-icons">assignment_turned_in</i>
              </button></a>
          </span>
      </li>
                <?php
                    }
                ?>

<?php if  ($row['i1112'] == "S"){ ?>
                <li class="mdl-list__item">
				<span class="mdl-list__item-primary-content">
					<i class="material-icons  mdl-list__item-avatar">wc</i>
                 
                <p>Infantiles de 11 a 12 años</p>
                <span style="color:white;">...........................................</span>
          <span class="mdl-list__item-secondary-action">
          <a href="graphic-index.php?torneo=+<?php  echo $row['id_torneo']; ?>&categoria=I1112&categorias= + <?php if($row['im5'] == "S"){echo "IM5 ";} if($row['i56'] == "S"){echo "I56 ";} if($row['i78'] == "S"){echo "I78 ";} if($row['i910'] == "S"){echo "I910 ";} if($row['i1112'] == "S"){echo "I1112 ";} if($row['j1314'] == "S"){echo "J1314 ";} if($row['j1516'] == "S"){echo "J1516 ";}  if($row['a17'] == "S"){echo "A17";} ?>"> <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" 
               style="background:rgb(42, 149, 24);">
                  <i class="material-icons">assignment_turned_in</i>
              </button></a>
          </span>
      </li>
                <?php
                    }
                ?>

<?php if  ($row['j1314'] == "S"){ ?>
                <li class="mdl-list__item">
				<span class="mdl-list__item-primary-content">
					<i class="material-icons  mdl-list__item-avatar">wc</i>
                 
                    <p>Juveniles de 13 a 14 años</p>
                    <span style="color:white;">...........................................</span>
          <span class="mdl-list__item-secondary-action">
          <a href="graphic-index.php?torneo=+<?php  echo $row['id_torneo']; ?>&categoria=J1314&categorias= + <?php if($row['im5'] == "S"){echo "IM5 ";} if($row['i56'] == "S"){echo "I56 ";} if($row['i78'] == "S"){echo "I78 ";} if($row['i910'] == "S"){echo "I910 ";} if($row['i1112'] == "S"){echo "I1112 ";} if($row['j1314'] == "S"){echo "J1314 ";} if($row['j1516'] == "S"){echo "J1516 ";}  if($row['a17'] == "S"){echo "A17";} ?>"> <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" 
               style="background:rgb(42, 149, 24);">
                  <i class="material-icons">assignment_turned_in</i>
              </button></a>
          </span>
      </li>
                <?php
                    }
                ?>


                 <?php if  ($row['j1516'] == "S"){ ?>
                    <li class="mdl-list__item">
				<span class="mdl-list__item-primary-content">
					<i class="material-icons  mdl-list__item-avatar">wc</i>
                    <p>Juveniles de 15 a 16 años</p>
                    <span style="color:white;">...........................................</span>
          <span class="mdl-list__item-secondary-action">
          <a href="graphic-index.php?torneo=+<?php  echo $row['id_torneo']; ?>&categoria=J1516&categorias= + <?php if($row['im5'] == "S"){echo "IM5 ";} if($row['i56'] == "S"){echo "I56 ";} if($row['i78'] == "S"){echo "I78 ";} if($row['i910'] == "S"){echo "I910 ";} if($row['i1112'] == "S"){echo "I1112 ";} if($row['j1314'] == "S"){echo "J1314 ";} if($row['j1516'] == "S"){echo "J1516 ";}  if($row['a17'] == "S"){echo "A17";} ?>"> <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" 
               style="background:rgb(42, 149, 24);">
                  <i class="material-icons">assignment_turned_in</i>
              </button></a>
          </span>
      </li>
                <?php
                    }
                ?>


                 <?php if  ($row['a17'] == "S"){ ?>
                    <li class="mdl-list__item">
				<span class="mdl-list__item-primary-content">
					<i class="material-icons  mdl-list__item-avatar">wc</i>
                    <p>Adultos mayor a 17 años</p>
                    <span class="mdl-list__item-secondary-action">
                    <a href="graphic-index.php?torneo=+<?php  echo $row['id_torneo']; ?>&categoria=A17&categorias= + <?php if($row['im5'] == "S"){echo "IM5 ";} if($row['i56'] == "S"){echo "I56 ";} if($row['i78'] == "S"){echo "I78 ";} if($row['i910'] == "S"){echo "I910 ";} if($row['i1112'] == "S"){echo "I1112 ";} if($row['j1314'] == "S"){echo "J1314 ";} if($row['j1516'] == "S"){echo "J1516 ";}  if($row['a17'] == "S"){echo "A17";} ?>"><button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" 
               style="background:rgb(42, 149, 24);">
                  <i class="material-icons">assignment_turned_in</i>
              </button></a>
          </span>
      </li>
                <?php
                    }
                ?>



        
          

              <?php
                  }
              ?>
      
  

      

          
          
          
  </ul>
  

  
</div>
</div>  
</body>

</html>