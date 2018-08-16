 //Mensaje de Alerta
 function alertBadSession() {
     window.alert("El correo y/o contraseña son inválidos.\nCorregir por favor.");
 }

 //Mensaje de Confirmación
 function logOut() {
     if (confirm("¿Seguro que deseas cerrar sesión?")) {
         document.getElementById("logout").href = "index.html";
     }
 }

 //Mensaje de Confirmación
 function cancelOp(elemento) {
    if (confirm("¿Seguro que cancelar el registro del " + elemento + "?")) {
        switch (elemento) {
            case "maestro":
                location.href = 'admn-profesores.php';
                break;
            case "gimnasio":
                location.href = 'admn-gimnasios.php';
                break;
            case "juez":
                location.href = 'admn-jueces.php';
                break;
            case "torneo":
                location.href = 'admn-torneos.php';
                break;
            case "alumno":
                location.href = 'prof-alumnos.php';
                break;
            default:
                break;
        }
    }
}

 //Mensaje de Confirmación
 function eraseItem(elemento, id) {
     if (confirm("¿Seguro que deseas eliminar a este " + elemento + "?")) {
         switch (elemento) {
             case "maestro":
                 location.href = '../assets/php/admn-delete-prof.php?id=' + id;
                 break;
             case "gimnasio":
                 location.href = '../assets/php/admn-delete-gym.php?id=' + id;
                 break;
             case "juez":
                 location.href = '../assets/php/admn-delete-juez.php?id=' + id;
                 break;
             case "torneo":
                 location.href = '../assets/php/admn-delete-torneo.php?id=' + id;
                 break;
             case "alumno":
                 location.href = '../assets/php/prof-delete.php?id=' + id;
                 break;
             default:
                 break;
         }
     }
 }

 //Mensaje de Confirmación
 function activeTournament(accion, id) {
     if (confirm("¿Seguro que deseas " + accion + " este torneo?")) {
         switch (accion) {
             case "activar":
                 location.href = '../assets/php/admn-change-torneo.php?id=' + id + '&categoria=A';
                 break;
             case "desactivar":
                 location.href = '../assets/php/admn-change-torneo.php?id=' + id + '&categoria=I';
                 break;
             default:
                 break;
         }
     }
 }

 //Mensaje de Confirmación
 function getContestant(accion, id, torneo) {
    if (confirm("¿Seguro que deseas " + accion + " a este participante?")) {
        switch (accion) {
            case "registrar":
                location.href = '../assets/php/prof-agregar.php?id_alumno=' + id + '&id_torneo=' + torneo;
                break;
            case "retirar":
                location.href = '../assets/php/prof-quitar-participante.php?id_alumno=' + id + '&id_torneo=' + torneo;
                break;
            default:
                break;
        }
    }
}
