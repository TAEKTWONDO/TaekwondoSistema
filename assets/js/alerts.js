    //Mensaje de Confirmación
    function eraseItem(elemento, id) {
        if (confirm("¿Seguro que deseas eliminar a este " + elemento + "?")) {
            switch(elemento){
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
                case "":
                    // ¿ ?
                    break;
                default:
                break;
            }
        }
    }

    //Mensaje de Confirmación
    function activeTournament(accion, id) {
        if (confirm("¿Seguro que deseas " + accion + " este torneo?")) {
            switch(accion){
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
    function logOut() {
        if (confirm("¿Seguro que deseas cerrar sesión")) {
                document.getElementById("logout").href = "index.html";
        }
    }

    //Mensaje de Alerta
    function alertBadSession() {
        window.alert("El correo y/o contraseña son inválidos.\nCorregir por favor.");
    }
