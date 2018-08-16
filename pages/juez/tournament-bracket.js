var misResultados;
var names = new Array();
var id = new Array();
var belt = new Array();
var age = new Array();
var height = new Array();
var gender = new Array();
var sizeArray = 0;
var participants = new Array();
var cola = new Array();
var colaGanadores = new Array();
var $tournament, $winner;
var xmlhttp;
var gender, age, height, colorBelt, score;
var entriesFinal = new Array;
var scoreFinal = new Array;
///////////////
var namesGet = new Array();
var beltGet = new Array();
var ageGet = new Array();
var heightGet = new Array();
var genderGet = new Array();
//////////////
var learningRate = 0.30;
//////////////
var idScoreFinal = new Array();
var nameScoreFinal = new Array();
var genderScoreFinal = new Array();
var beltScoreFinal = new Array();
var heightScoreFinal = new Array();
var ageScoreFinal = new Array();
//////////////////////////////////////////
/////////////////////////////////////////
var outputsNetwork1 = new Array();
var outputsNetwork2 = new Array();
var outputsNetwork3 = new Array();
var outputsNetwork4 = new Array();
//////////////////////////////////////////
/////////////////////////////////////////
var positionDelete = new Array();
//////////////////////////////////////////
/////////////////////////////////////////
var categoryIM5 = new Array();
var categoryI56 = new Array();
var categoryI78 = new Array();
var categoryI910 = new Array();
var categoryI1112 = new Array();
var categoryJ1314 = new Array();
var categoryJ1516 = new Array();
var categoryA17 = new Array();
var tournamentCategory;
var Category;
//////////////////////////////////////////
/////////////////////////////////////////
var categoryNetworkIM5 = new Array();
var categoryNetworkI56 = new Array();
var categoryNetworkI78 = new Array();
var categoryNetworkI910 = new Array();
var categoryNetworkI1112 = new Array();
var categoryNetworkJ1314 = new Array();
var categoryNetworkJ1516 = new Array();
var categoryNetworkA17 = new Array();
var categoryEntriesIM5 = new Array();
var categoryEntriesI56 = new Array();
var categoryEntriesI78 = new Array();
var categoryEntriesI910 = new Array();
var categoryEntriesI1112 = new Array();
var categoryEntriesJ1314 = new Array();
var categoryEntriesJ1516 = new Array();
var categoryEntriesA17 = new Array();
var auxResults = new Array();
//////////////////////////////////////////
/////////////////////////////////////////
var outputsNetwork1Up = new Array();
var outputsNetwork2Up = new Array();
var outputsNetwork3Up = new Array();
var outputsNetwork4Up = new Array();
//////////////////////////////////////////
/////////////////////////////////////////
var participantes = new Array();
var auxId = new Array();
var auxIdNext = new Array();
////////////////////////////////////////
var scoreWonSend = new Array();
var scoreWonClean = new Array();
var dataWon = new Array();
////////////////////////////////////////
var idWon = new Array();
var nameWon = new Array();
var People = new Array();
var PeopleScore = new Array();
var PuntuacionAmonestaciones = new Array();
var auxiliarScore, auxiliarScore2;
var PeopleWon = new Array();
var socrePeople = new Array();
/////////////////////////////////////
var auxNombre = "";
///////////////////////////////////


function graphic() {

    $(document).ready(function () {
        $('#remove').on('click', function () {
            console.log('removed');
        });
    });
    //////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////BD////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    //Para obtener la variable que pasamos en la URL
    var loc = document.location.href;
    var getString = loc.split('?')[1];
    var GET = getString.split('&');
    var get = {};
    for (var i = 0, l = GET.length; i < l; i++) {
        var tmp = GET[i].split('=');
        get[tmp[0]] = unescape(decodeURI(tmp[1]));
        Category = get[tmp[0]];
    }
    Category = get.categoria;
    Torneo = get.torneo;
    Torneo = Torneo.replace('+', '');
    //Agu dividimos  las categorias que tiene un torneo
    tournamentCategory = get.categorias.split(" ");
    delete tournamentCategory[1];

    var EDAD1 = 0;
    EDAD2 = 0;
    if (get.categoria == "IM5") {
        EDAD1 = 0;
        EDAD2 = 4;
    }
    if (get.categoria == "I56") {
        EDAD1 = 5;
        EDAD2 = 6;
    }
    if (get.categoria == "I78") {
        EDAD1 = 7;
        EDAD2 = 8;
    }
    if (get.categoria == "I910") {
        EDAD1 = 9;
        EDAD2 = 10;
    }
    if (get.categoria == "I1112") {
        EDAD1 = 11;
        EDAD2 = 12;
    }
    if (get.categoria == "J1314") {
        EDAD1 = 13;
        EDAD2 = 14;
    }
    if (get.categoria == "J1516") {
        EDAD1 = 15;
        EDAD2 = 16;
    }
    if (get.categoria == "A17") {
        EDAD1 = 17;
        EDAD2 = 80;
    }
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    $tournament = $(".tournament"),
        $bracket = $('<ul class="bracket"><li></li><li></li></ul>');
    //////////////////////////////////////////////////////////////////////////
    /////////////////////////Participantes////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    // A continuacion se crean los participantes
    consultaAjax.done(function (data) {
        for (var i = 0; i <= DatosFuera.length - 1; i++) {
            // Del objeto lo pasa a un array pero sin la clave
            //El objeto de compone de: {Clave: valor}
            var values = $.map(DatosFuera[i], function (value, index) {
                return [value];
            });
            //Para filtrar la informacion de la categoria que se ha seleccionado
            if (values[3] >= EDAD1 & values[3] <= EDAD2) {
                id.push(values[0]);
                names.push(values[1]);
                belt.push(values[2]);
                age.push(values[3]);
                height.push(values[4]);
                gender.push(values[5]);
            }
            //A continuacion filtra todos los concursantes que no esten en la categoria seleccionada
            //Esto ya que si alguien queda solo se busca en una categoria superior o inferior
            if (tournamentCategory[2] == "IM5") {
                if (values[3] <= 5) {
                    categoryIM5[i] = new Array(values[0], values[1], values[2], values[3], values[4], values[5]);
                }
            }
            if (tournamentCategory[3] == "I56") {
                if (values[3] >= 5 && values[3] <= 6) {
                    categoryI56[i] = new Array(values[0], values[1], values[2], values[3], values[4], values[5]);
                }
            }
            if (tournamentCategory[4] == "I78") {
                if (values[3] >= 7 && values[3] <= 8) {
                    categoryI78[i] = new Array(values[0], values[1], values[2], values[3], values[4], values[5]);
                }
            }
            if (tournamentCategory[5] == "I910") {
                if (values[3] >= 9 && values[3] <= 10) {
                    categoryI910[i] = new Array(values[0], values[1], values[2], values[3], values[4], values[5]);
                }
            }
            if (tournamentCategory[6] == "I1112") {
                if (values[3] >= 11 && values[3] <= 12) {
                    categoryI1112[i] = new Array(values[0], values[1], values[2], values[3], values[4], values[5]);
                }
            }
            if (tournamentCategory[7] == "J1314") {
                if (values[3] >= 13 && values[3] <= 14) {
                    categoryJ1314[i] = new Array(values[0], values[1], values[2], values[3], values[4], values[5]);
                }
            }
            if (tournamentCategory[8] == "J1516") {
                if (values[3] >= 15 && values[3] <= 16) {
                    categoryI1516[i] = new Array(values[0], values[1], values[2], values[3], values[4], values[5]);
                }
            }
            if (tournamentCategory[9] == "A17") {
                if (values[3] >= 17) {
                    categoryA17[i] = new Array(values[0], values[1], values[2], values[3], values[4], values[5]);
                }
            }
        }
        //Para eliminar elementos vacios o espacios vacios del array
        categoryI1112 = categoryI1112.filter(Boolean);
        categoryA17 = categoryA17.filter(Boolean);
        categoryI56 = categoryI56.filter(Boolean);
        categoryI78 = categoryI78.filter(Boolean);
        categoryI910 = categoryI910.filter(Boolean);
        categoryIM5 = categoryIM5.filter(Boolean);
        categoryJ1314 = categoryJ1314.filter(Boolean);
        categoryJ1516 = categoryJ1516.filter(Boolean);
        // console.log(names);
        ////////////////////////////////////////////////////////////////////////////
        ////////////////////////Obtener pesos///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////
        //Aqui se envian los datos a una funcion para que los almacene en otros vectores
        //Ya que si se hace con los vectores originales no sale bien
        for (var t = 0; t < names.length; t++) {
            //console.log(names[t], gender[t], age[t], height[t], belt[t]);
            sendValues(names[t], gender[t], age[t], height[t], belt[t]);
        }
        //Por ultimo llamamos a esta funcion para que de estos nuevos vectores los envie a la funcion que 
        //calcule los valores
        calculateHeights();
    });
    //////////////////////////////////////////////////////////////////////////
    //////////////////////Percetron///////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    perceptronMethod();
    ////////////////////////////////////////////////////////////////////////////
    //////////////////////Checar participantes///////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    checkParticipants();
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////

    function buildBracket($el, p1, p2) {
        if (!p1 && !p2) {
            $el.append($bracket.clone());
        }
    }

    buildBracket($tournament);

    var level = 0,
        section = 0,
        $brackets,
        $previousBrackets;

    while (level < 4) {
        $brackets = $(".bracket");

        $brackets = $brackets.filter(function (i, el) {
            if ($previousBrackets) {
                if ($.inArray(el, $previousBrackets) >= 0) {
                    return false;
                }
            }
            return true;
        });

        if (!$previousBrackets) {
            $previousBrackets = $brackets;
        } else {
            $previousBrackets = $.merge($previousBrackets, $brackets);
        }

        $brackets.each(function () {
            $(this)
                .find("li:empty")
                .each(function () {
                    buildBracket($(this));
                });
        });

        level++;

    }

    function getRivals() {
        var p1i = Math.floor(participants.length * Math.random()),
            p1 = participants[p1i];
        participants.splice(p1i, 1);
        var p2i = Math.floor(participants.length * Math.random()),
            p2 = participants[p2i];
        participants.splice(p2i, 1);
        return [p1, p2];
    }

    function cleanUp() {
        var $brackets = $(".bracket"),
            removed = false;
        for (var i = 0; i < $brackets.length; i++) {
            // break before there aren't enough spots
            if ($("li:empty").length === participants.length) break;

            var empty = true;
            $brackets
                .eq(i)
                .find("li")
                .each(function () {
                    if (!$(this).is(":empty")) {
                        empty = false;
                    }
                });
            if (empty) {
                $brackets.eq(i).remove();
                removed = true;
            }
        }
        return removed;
    }

    // just do it over and over
    while (cleanUp()) {}

    var $empty = $("li:empty");
    for (var i = 0; i < participants.length; i++) {
        if (i % 2 > 0) {
            $empty.eq(i).html("<button id='t" + [i] + "' class= 'mdl-button mdl-js-button mdl-button--raised mdl-button--coloredBlue mdl-js-ripple-effect' style='margin-top: 2px; padding-left: 1px;padding-right: 1px;'>" + participants[i] + "</button> <div class='mdl-tooltip mdl-tooltip--large' data-mdl-for='t" + [i] + "'>" + participants[i] + "</div>");
        } else {
            $empty.eq(i).html("<button id='t" + [i] + "' class= 'mdl-button mdl-js-button mdl-button--raised mdl-button--coloredRed mdl-js-ripple-effect' style='margin-top: 2px; padding-left: 1px;padding-right: 1px;'>" + participants[i] + "</button> <div class='mdl-tooltip mdl-tooltip--large' data-mdl-for='t" + [i] + "'>" + participants[i] + "</div>");
        }
        changeToButtons();
    }

    function changeToButtons() {
        $(".bracket").each(function () {
            $winner = $(this).children(".winner");
            if ($winner.length === 0) {
                var $winners = $(this)
                    .children("li")
                    .children("ul")
                    .children(".winner");
                if ($winners.length === 2) {
                    $winners.each(function () {
                        $(this).html(
                            '<button class="winner mdl-button mdl-js-button mdl-button--raised mdl-button--coloredGreen mdl-js-ripple-effect" style="margin-top: -10px; padding-left: 1px;padding-right: 1px;"> ' + $(this).text() + "</button>"
                        );
                    });
                }
            }
        });

    }

    $(document).on("click", "button", function () {

        var cont = 0;
        var com_1_nombre, com_2_nombre;
        var com_1_puntaje, com_2_puntaje;
        var com_1_amones, com_2_amones;

        $('.mdl-tooltip.is-active').removeClass('is-active');
        var $ul;
        if (!$(this).hasClass("winner")) {
            $ul = $(this)
                .parent()
                .parent();

        } else {
            $ul = $(this)
                .parent()
                .parent()
                .parent()
                .parent();
            console.log($ul);
        }

        $ul.find("button").each(function () {
            //primer competidor
            if (cont == 0) {
                cont++;

                var puntos = prompt("Ingrese el puntaje del primer competidor " + $(this).text());
                com_1_nombre = $(this).text();
                if (puntos == null || puntos == "") {

                } else {
                    // console.log("Puntaje de " + $(this).text() + ": " + puntos);
                    /*  scoreWonSend.push($(this).text());
                      scoreWonSend.push(puntos);
                      socrePeople.push($(this).text());
                      socrePeople.push(puntos);*/
                    com_1_puntaje = puntos;

                }
                var amonestacion = prompt("Ingrese las amonestaciones de " + $(this).text());

                if (amonestacion == null || amonestacion == "") {
                    // console.log("Cancelado");
                } else {
                    // console.log("Amonestaciones de " + $(this).text() + ": " + amonestacion);
                    /*scoreWonSend.push($(this).text());
                    scoreWonSend.push(puntos);*/
                    com_1_amones = amonestacion;
                }

            }
            //segundo competidor
            else {
                var puntos = prompt("Ingrese el puntaje del segundo competidor " + $(this).text());
                com_2_nombre = $(this).text();
                if (puntos == null || puntos == "") {

                } else {
                    // console.log("Puntaje de " + $(this).text() + ": " + puntos);
                    /*  scoreWonSend.push($(this).text());
                      scoreWonSend.push(puntos);
                      socrePeople.push($(this).text());
                      socrePeople.push(puntos);*/
                    com_2_puntaje = puntos;

                }
                var amonestacion = prompt("Ingrese las amonestaciones de " + $(this).text());

                if (amonestacion == null || amonestacion == "") {
                    // console.log("Cancelado");
                } else {
                    // console.log("Amonestaciones de " + $(this).text() + ": " + amonestacion);
                    /*scoreWonSend.push($(this).text());
                    scoreWonSend.push(puntos);*/
                    com_2_amones = amonestacion;
                }

            }

        });

        console.log("Ganador " + $(this).text());
        //Uno mayor 
        var i_com_1_puntaje = Number(com_1_puntaje);
        var i_com_2_puntaje = Number(com_2_puntaje);
        var i_com_1_amones = Number(com_1_amones);
        var i_com_2_amones = Number(com_2_amones);

        if (i_com_1_amones >> i_com_2_puntaje || i_com_2_amones >> i_com_1_puntaje) {
            if (com_2_nombre != "" && com_1_nombre !="") {
                alert("Las amonestaciones no pueden ser mayor al puntaje del contrincante");
            }else{
                alert("El alumno no tuvo comperidores");
            } 
        } else if (i_com_1_amones == null || i_com_2_puntaje == null || i_com_2_amones == null || i_com_1_puntaje == null) {
            alert("Todos los datos deber ser ingresados");
        } else {
            if (i_com_1_puntaje > i_com_2_puntaje) {
                //y uno ganador
                if (com_1_nombre == $(this).text()) {

                    if (confirm("¿Ganó " + com_1_nombre + " " + i_com_1_puntaje + "-" + i_com_2_puntaje + " contra " + com_2_nombre + "?")) {
                        console.log("Sí");
                        console.log("Guardar al ganador sin problemas");
                        $ul.append($('<li class="winner"> <div style="margin-top: 0px; font-size: 13px; color:red"> <b>' + $(this).text() + " </b></div></li > "));
                        $ul.find("button").each(function () {
                            $(this).replaceWith($('<div style="margin-top: 0px;font-size: 13px">' + $(this).text() + "</div>"));
                        });
                        changeToButtons();
                    } else {
                        console.log("a weno, ño >:c");
                    }

                }
                //y dos ganador
                else {
                    console.log("Gano por abandono de combate el dos?");
                    if (confirm("¿Ganó " + $(this).text() + " a causa de abandono de combate?")) {
                        console.log("Sí");
                        $ul.append($('<li class="winner"> <div style="margin-top: 0px; font-size: 13px; color:red"> <b>' + $(this).text() + " </b></div></li > "));
                        $ul.find("button").each(function () {
                            $(this).replaceWith($('<div style="margin-top: 0px;font-size: 13px">' + $(this).text() + "</div>"));
                        });
                        changeToButtons();
                    } else {
                        console.log("ño >:c");
                    }
                }
            } //dos mayor y dos ganador
            else if (i_com_1_puntaje < i_com_2_puntaje) {
                if (com_2_nombre == $(this).text()) {
                    if (confirm("¿Ganó " + com_2_nombre + " " + i_com_2_puntaje + "-" + i_com_1_puntaje + " contra " + com_1_nombre + "?")) {
                        console.log("Sí");
                        console.log("Guardar al ganador sin problemas");
                        $ul.append($('<li class="winner"> <div style="margin-top: 0px; font-size: 13px; color:red"> <b>' + $(this).text() + " </b></div></li > "));
                        $ul.find("button").each(function () {
                            $(this).replaceWith($('<div style="margin-top: 0px;font-size: 13px">' + $(this).text() + "</div>"));
                        });
                        changeToButtons();
                    } else {
                        console.log("a weno, ño >:c");
                    }
                }
                //y dos ganador
                else {
                    console.log("Gano por abandono de combate el uno?");
                    if (confirm("¿Ganó " + $(this).text() + " a causa de abandono de combate?")) {
                        console.log("Sí");
                        $ul.append($('<li class="winner"> <div style="margin-top: 0px; font-size: 13px; color:red"> <b>' + $(this).text() + " </b></div></li > "));
                        $ul.find("button").each(function () {
                            $(this).replaceWith($('<div style="margin-top: 0px;font-size: 13px">' + $(this).text() + "</div>"));
                        });
                        changeToButtons();
                    } else {
                        console.log("ño >:c");
                    }
                }
            } else if (i_com_1_puntaje == i_com_2_puntaje) {
                alert("No puede existir empate entre los competidores");
            }
        }
        //uno mayor y dos ganador


        cola.unshift($(this).text().replace(/^\s+|\s+$/gm, ''));
        //console.log(cola);


        //Eliminar datos repetidos
        colaGanadores = cola.filter(function (elem, index, self) {
            return index == self.indexOf(elem);
            console.log(index);
        });

        colaGanadores = colaGanadores.filter(function (str) {
            return /\S/.test(str);
        });
    });
}

function enviarGanadores() {
    score();
    auxNombre2 = PeopleWon[3];
    auxNombre = auxNombre2[1];
    soundWon(colaGanadores);
    console.log("Ganadores: " + colaGanadores);
}

function guardarGanadores() {
    //Guardamos amonestaciones y esas cosas
    saveWon(PeopleWon);
}

function score() {
    //Combina el nombre con el id
    for (var y = 0; y < idWon.length; y++) {
        People[y] = new Array(idWon[y], nameWon[y]);
    }

    //Combina el nombre, la puntuacion y las amonestaciones
    for (var y = 0; y < scoreWonSend.length; y += 4) {
        PuntuacionAmonestaciones[y] = new Array(scoreWonSend[y], scoreWonSend[y + 1], scoreWonSend[y + 3]);
    }

    //Suma todos los puntuajes y las amonestaciones
    PuntuacionAmonestaciones = PuntuacionAmonestaciones.filter(Boolean);
    for (var y = 0; y < PuntuacionAmonestaciones.length; y++) {
        for (var c = 0; c < PuntuacionAmonestaciones.length; c++) {
            auxiliarScore = PuntuacionAmonestaciones[y];
            auxiliarScore2 = PuntuacionAmonestaciones[c];
            if (auxiliarScore[0] == auxiliarScore2[0]) {
                conta = parseInt(auxiliarScore[1]) + parseInt(auxiliarScore2[1]);
                conta2 = parseInt(auxiliarScore[1]) + parseInt(auxiliarScore2[1]);
                conta = conta / 2;
                conta2 = conta2 / 2;
                PeopleScore[y] = new Array(auxiliarScore[0], conta, conta2);
            }
        }
    }

    PeopleScore = PeopleScore.filter(Boolean);
    //Para de nuestro vector anterior ponerle el id a las personas
    for (var y = 0; y < PeopleScore.length; y++) {
        for (var c = 0; c < People.length; c++) {
            auxiliarScore = PeopleScore[y];
            auxiliarScore2 = People[c];
            nombre = auxiliarScore[0];
            nombre2 = auxiliarScore2[1];
            //El trim es para eliminar espacios en blanco
            nombre = $.trim(nombre);
            nombre2 = $.trim(nombre2);
            if (nombre == nombre2) {
                PeopleWon[y] = new Array(auxiliarScore2[0], auxiliarScore[0], auxiliarScore[1], auxiliarScore[2]);
            }
        }
    }

    PeopleWon = PeopleWon.filter(Boolean);
}

function saveWon(wonPeople) {
    var scorePeople = new Array();
    var scorePeopleId = new Array();
    var status = "";
    for (var k = 0; k < socrePeople.length; k++) {
        if (socrePeople[k + 1] > socrePeople[k + 3]) status = "G";
        if (socrePeople[k + 1] < socrePeople[k + 3]) status = "P";
        if (socrePeople[k + 1] == socrePeople[k + 3]) status = "E";
        scorePeople[k] = new Array(socrePeople[k], socrePeople[k + 1], socrePeople[k + 3], status);
        k += 3;
    }
    scorePeople = scorePeople.filter(Boolean);
    for (var k = 0; k < PeopleWon.length; k++) {
        for (var r = 0; r < scorePeople.length; r++) {
            aux1 = PeopleWon[k];
            aux2 = scorePeople[r];
            if (aux1[1] == aux2[0]) {
                scorePeopleId[k] = new Array(aux1[0], aux2[0], aux2[1], aux2[2], aux2[3]);
            }

        }
    }
    scorePeopleId = scorePeopleId.filter(Boolean);
    console.table(scorePeopleId);
    id = new Array();
    puntuacion = new Array();
    puntuacionOP = new Array();
    status = new Array();
    for (var y = 0; y < scorePeopleId.length; y++) {
        aux = scorePeopleId[y];
        id.push(aux[0]);
        puntuacion.push(aux[2]);
        puntuacionOP.push(aux[3]);
        status.push(aux[4]);
    }

    ////////////////////////////////
    var idAlumno = new Array();
    var idContricante = new Array();
    for (var u = 0; u < idWon.length; u++) {
        if (u + 1) {
            idAlumno.push(idWon[u]);
            idContricante.push(idWon[u + 1]);
            u++;
        }
    }
    ////////////////////////////////////////////////////////////////
    idP = new Array();
    puntuacionP = new Array();
    amonestacionesP = new Array();
    for (var y = 0; y < wonPeople.length; y++) {
        aux = wonPeople[y];
        idP.push(aux[0]);
        puntuacionP.push(aux[2]);
        amonestacionesP.push(aux[3]);
    }

    document.location.href = "save_won.php?idAlumno=" + idAlumno + "&idContricante=" + idContricante + "&id_alumno=" + id + "&puntuacion=" + puntuacion + "&puntuacionOP=" + puntuacionOP + "&status=" + status + "&id_alumnoP=" + idP + "&puntuacionP=" + puntuacionP + "&amonestacionesP=" + amonestacionesP + "&torneo=" + Torneo;
}

function soundWon(resultadoName) {
    //var categoriaTorneo = "A continuación nombraremos los ganadores de la categoría: "; //Agregar categoria
    var primer = "El ganador del primer lugar es: " + resultadoName[0] + ". Felicitaciones.";
    var segundo = "El ganador del segundo lugar es: " + resultadoName[1] + ". Felicitaciones.";
    var tercer = "El ganador del tercer lugar es: : " + resultadoName[2] + ". Felicitaciones.";
    var tercer2 = "El ganador del tercer lugar es: : " + auxNombre + ". Felicitaciones.";

    if (Category == "IM5") categoriaTorneo = "Los ganadores de la categoría Infantiles menor a 5 años son";
    if (Category == "I56") categoriaTorneo = "Los ganadores de la categoría Infantiles de 5 a 6 años son";
    if (Category == "I78") categoriaTorneo = "Los ganadores de la categoría Infantiles de 7 a 8 años son";
    if (Category == "I910") categoriaTorneo = "Los ganadores de la categoría Infantiles de 9 a 10 años son";
    if (Category == "I1112") categoriaTorneo = "Los ganadores de la categoría Infantiles de 11 a 12 años son";
    if (Category == "J1314") categoriaTorneo = "Los ganadores de la categoría Juveniles de 13 a 14 años son";
    if (Category == "J1516") categoriaTorneo = "Los ganadores de la categoría Juveniles de 15 a 16 años son";
    if (Category == "A17") categoriaTorneo = "Los ganadores de la categoría Adultos mayor a 17 años son";

    responsiveVoice.speak(categoriaTorneo, "Spanish Female");
    text = encodeURIComponent(categoriaTorneo);
    var url = "http://";
    responsiveVoice.speak(tercer, "Spanish Female");
    text = encodeURIComponent(tercer);
    var url = "http://";
    responsiveVoice.speak(tercer2, "Spanish Female");
    text = encodeURIComponent(tercer2);
    var url = "http://";
    responsiveVoice.speak(segundo, "Spanish Female");
    text = encodeURIComponent(segundo);
    var url = "http://";
    responsiveVoice.speak(primer, "Spanish Female");
    text = encodeURIComponent(primer);
    var url = "http://";
}

function getValues(idStudent, nameStudent, genderStudent, ageStudent, heightStudent, beltStudent) {
    var values = [nameStudent, genderStudent, ageStudent, heightStudent, beltStudent];
    gender = values[3];
    age = values[2];
    colorBelt = values[4];
    height = values[1];

    idScoreFinal.push(idStudent);
    nameScoreFinal.push(nameStudent);
    // console.log(gender, age, height, colorBelt);
    var aux;

    if (gender == "M") {
        gender = 1;
    } else {
        gender = 0;
    }
    //Add the value
    genderScoreFinal.push(gender);

    if (age >= 17) {
        age = 1;
    } else if (age == 4) {
        age = 0;
    } else {
        aux = age - 4;
        age = aux * 0.07692;
    }
    //Add the value
    ageScoreFinal.push(age);

    switch (colorBelt) {
        case "Blanca":
            colorBelt = 0;
            break;
        case "Amarilla":
            colorBelt = 0.2;
            break;
        case "Verde":
            colorBelt = 0.4;
            break;
        case "Azul":
            colorBelt = 0.6;
            break;
        case "Rojo":
            colorBelt = 0.8;
            break;
        case "Negra":
            colorBelt = 1;
            break;
    }
    //Add the value
    beltScoreFinal.push(colorBelt);

    if (height >= 2.00) {
        height = 1;
    } else if (height == 0.8) {
        height = 0;
    } else {
        aux = height - 0.8;
        height = (aux * 100) * 0.0083;
    }
    //Add the value
    heightScoreFinal.push(height);
    // console.table(scoreFinal);
}

function cleanAll() {
    gender = "";
    age = "";
    height = "";
    colorBelt = "";
    score = "";
    entriesFinal = [];
    scoreFinal = [];
    nameGet = "";
    genderGet = "";
    ageGet = "";
    heightGet = "";
    beltGet = "";
    name = "";
    genderStudent = "";
    ageStudent = "";
    heightStudent = "";
    belt = "";
}

function sendValues(names2, gender2, age2, height2, belt2) {
    namesGet.push(names2);
    genderGet.push(gender2);
    ageGet.push(age2);
    heightGet.push(height2);
    beltGet.push(belt2);
    // console.log(names2, gender2, age2, height2, belt2);
}

function calculateHeights() {
    for (var u = 0; u < namesGet.length; u++) {
        getValues(id[u], namesGet[u], genderGet[u], ageGet[u], heightGet[u], beltGet[u]);
    }
}

function checkParticipants() {
    //Aqui se compara si un participante esta solo, en caso de que sea asi
    //Luchara contra Gasper
    if (participants.length % 2) participants.push(" ");
}

function Perceptron(input, hidden, output) {
    //Need this constants for work
    const {
        Layer
    } = window.synaptic;
    // create the layers
    var inputLayer = new Layer(input);
    var hiddenLayer = new Layer(hidden);
    var outputLayer = new Layer(output);

    // connect the layers
    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    // set the layers
    this.set({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });
}

function perceptronMethod() {
    //Need this constants for work
    const {
        Network
    } = window.synaptic;
    // extend the prototype chain
    Perceptron.prototype = new Network();
    Perceptron.prototype.constructor = Perceptron;
    // Here we definete the perceptron, that values 
    var myPerceptronNeuron1 = new Perceptron(1, 1, 1);
    // Later pass for trainer
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    ///////////////////Entrenamiento/////////////////////
    for (var i = 0; i < 90000; i++) {
        myPerceptronNeuron1.activate([0]);
        myPerceptronNeuron1.propagate(learningRate, [0.337078653]);
        myPerceptronNeuron1.activate([0]);
        myPerceptronNeuron1.propagate(learningRate, [0]);
        myPerceptronNeuron1.activate([0]);
        myPerceptronNeuron1.propagate(learningRate, [0.127689597]);
        myPerceptronNeuron1.activate([0]);
        myPerceptronNeuron1.propagate(learningRate, [0]);
        myPerceptronNeuron1.activate([0]);
        myPerceptronNeuron1.propagate(learningRate, [0.13483146121]);
        /////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron1.activate([0.8]);
        myPerceptronNeuron1.propagate(learningRate, [0.58426966561]);
        myPerceptronNeuron1.activate([0.8]);
        myPerceptronNeuron1.propagate(learningRate, [0.24719101231]);
        myPerceptronNeuron1.activate([0.4]);
        myPerceptronNeuron1.propagate(learningRate, [0.35955056341]);
        myPerceptronNeuron1.activate([0.2]);
        myPerceptronNeuron1.propagate(learningRate, [0.21348314698]);
        myPerceptronNeuron1.activate([0.2]);
        myPerceptronNeuron1.propagate(learningRate, [0.348314083]);
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron1.activate([0.2]);
        myPerceptronNeuron1.propagate(learningRate, [0.41573033896]);
        myPerceptronNeuron1.activate([0]);
        myPerceptronNeuron1.propagate(learningRate, [0.53932584517]);
        myPerceptronNeuron1.activate([0]);
        myPerceptronNeuron1.propagate(learningRate, [0.53932584517]);
        myPerceptronNeuron1.activate([0]);
        myPerceptronNeuron1.propagate(learningRate, [0.53932584517]);
        myPerceptronNeuron1.activate([0]);
        myPerceptronNeuron1.propagate(learningRate, [0.53932584517]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron1.activate([0.6]);
        myPerceptronNeuron1.propagate(learningRate, [0.77528090248]);
        myPerceptronNeuron1.activate([0.6]);
        myPerceptronNeuron1.propagate(learningRate, [0.43820224918]);
        myPerceptronNeuron1.activate([0.2]);
        myPerceptronNeuron1.propagate(learningRate, [0.75280899226]);
        myPerceptronNeuron1.activate([0.8]);
        myPerceptronNeuron1.propagate(learningRate, [0.24719101231]);
        myPerceptronNeuron1.activate([0.8]);
        myPerceptronNeuron1.propagate(learningRate, [0.31460674297]);
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron1.activate([0]);
        myPerceptronNeuron1.propagate(learningRate, [0.40449438385]);
        myPerceptronNeuron1.activate([0]);
        myPerceptronNeuron1.propagate(learningRate, [0.26966292253]);
        myPerceptronNeuron1.activate([1]);
        myPerceptronNeuron1.propagate(learningRate, [0.93258427402]);
        myPerceptronNeuron1.activate([1]);
        myPerceptronNeuron1.propagate(learningRate, [0.93258427402]);
        myPerceptronNeuron1.activate([0.6]);
        myPerceptronNeuron1.propagate(learningRate, [0.97752809446]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron1.activate([0.4]);
        myPerceptronNeuron1.propagate(learningRate, [0.56179775539]);
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var myPerceptronNeuron2 = new Perceptron(1, 1, 1);
    // Later pass for trainer
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    ///////////////////Entrenamiento/////////////////////
    for (var i = 0; i < 90000; i++) {
        myPerceptronNeuron2.activate([0]);
        myPerceptronNeuron2.propagate(learningRate, [0.2553192054]);
        myPerceptronNeuron2.activate([0]);
        myPerceptronNeuron2.activate([1]);
        myPerceptronNeuron2.activate([0]);
        myPerceptronNeuron2.activate([1]);
        myPerceptronNeuron2.propagate(learningRate, [0.127659597]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron2.activate([1]);
        myPerceptronNeuron2.propagate(learningRate, [0.7234044362]);
        myPerceptronNeuron2.activate([0]);
        myPerceptronNeuron2.propagate(learningRate, [0.340425611]);
        myPerceptronNeuron2.activate([0]);
        myPerceptronNeuron2.propagate(learningRate, [0.2978724082]);
        myPerceptronNeuron2.activate([0]);
        myPerceptronNeuron2.propagate(learningRate, [0.2765958068]);
        myPerceptronNeuron2.activate([0]);
        myPerceptronNeuron2.propagate(learningRate, [0.2765958068]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron2.activate([1]);
        myPerceptronNeuron2.propagate(learningRate, [0.4042554152]);
        myPerceptronNeuron2.activate([1]);
        myPerceptronNeuron2.propagate(learningRate, [0.6382980306]);
        myPerceptronNeuron2.activate([1]);
        myPerceptronNeuron2.propagate(learningRate, [0.6382980306]);
        myPerceptronNeuron2.activate([1]);
        myPerceptronNeuron2.propagate(learningRate, [0.6382980306]);
        myPerceptronNeuron2.activate([1]);
        myPerceptronNeuron2.propagate(learningRate, [0.6382980306]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron2.activate([0]);
        myPerceptronNeuron2.propagate(learningRate, [0.8297874432]);
        myPerceptronNeuron2.activate([1]);
        myPerceptronNeuron2.propagate(learningRate, [0.7021278348]);
        myPerceptronNeuron2.activate([0]);
        myPerceptronNeuron2.propagate(learningRate, [0.7872342404]);
        myPerceptronNeuron2.activate([0]);
        myPerceptronNeuron2.propagate(learningRate, [0.340425611]);
        myPerceptronNeuron2.activate([1]);
        myPerceptronNeuron2.propagate(learningRate, [0.4680852194]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron2.activate([1]);
        myPerceptronNeuron2.propagate(learningRate, [0.3829788138]);
        myPerceptronNeuron2.activate([1]);
        myPerceptronNeuron2.propagate(learningRate, [0.127659597]);
        myPerceptronNeuron2.activate([0]);
        myPerceptronNeuron2.activate([0]);
        myPerceptronNeuron2.activate([0]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron2.activate([1]);
        myPerceptronNeuron2.propagate(learningRate, [0.6808512334]);

    }

    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var myPerceptronNeuron3 = new Perceptron(1, 1, 1);
    // Later pass for trainer
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    ///////////////////Entrenamiento/////////////////////
    for (var i = 0; i < 90000; i++) {
        myPerceptronNeuron3.activate([0.46132]);
        myPerceptronNeuron3.propagate(learningRate, [0.3255814]);
        myPerceptronNeuron3.activate([0]);
        myPerceptronNeuron3.propagate(learningRate, [0]);
        myPerceptronNeuron3.activate([0]);
        myPerceptronNeuron3.propagate(learningRate, [0]);
        myPerceptronNeuron3.activate([0]);
        myPerceptronNeuron3.propagate(learningRate, [0]);
        myPerceptronNeuron3.activate([0.1538]);
        myPerceptronNeuron3.propagate(learningRate, [0.1162790699]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron3.activate([0.61508]);
        myPerceptronNeuron3.propagate(learningRate, [0.5813953499]);
        myPerceptronNeuron3.activate([0.30756]);
        myPerceptronNeuron3.propagate(learningRate, [0.2325581399]);
        myPerceptronNeuron3.activate([0.38444]);
        myPerceptronNeuron3.propagate(learningRate, [0.3488372099]);
        myPerceptronNeuron3.activate([0.30756]);
        myPerceptronNeuron3.propagate(learningRate, [0.1860465119]);
        myPerceptronNeuron3.activate([0.46132]);
        myPerceptronNeuron3.propagate(learningRate, [0.3255813959]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron3.activate([0.38444]);
        myPerceptronNeuron3.propagate(learningRate, [0.3953488379]);
        myPerceptronNeuron3.activate([0.61508]);
        myPerceptronNeuron3.propagate(learningRate, [0.5348837219]);
        myPerceptronNeuron3.activate([0.61508]);
        myPerceptronNeuron3.propagate(learningRate, [0.5348837219]);
        myPerceptronNeuron3.activate([0.61508]);
        myPerceptronNeuron3.propagate(learningRate, [0.5348837219]);
        myPerceptronNeuron3.activate([0.61508]);
        myPerceptronNeuron3.propagate(learningRate, [0.5348837219]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron3.activate([0.9226]);
        myPerceptronNeuron3.propagate(learningRate, [0.7674418619]);
        myPerceptronNeuron3.activate([0.46132]);
        myPerceptronNeuron3.propagate(learningRate, [0.3488372099]);
        myPerceptronNeuron3.activate([0.84572]);
        myPerceptronNeuron3.propagate(learningRate, [0.7441860479]);
        myPerceptronNeuron3.activate([0.30756]);
        myPerceptronNeuron3.propagate(learningRate, [0.2325581399]);
        myPerceptronNeuron3.activate([0.23068]);
        myPerceptronNeuron3.propagate(learningRate, [0.3023255819]);
        /////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron3.activate([0.46132]);
        myPerceptronNeuron3.propagate(learningRate, [0.3953488379]);
        myPerceptronNeuron3.activate([0.23068]);
        myPerceptronNeuron3.propagate(learningRate, [0.2558139539]);
        myPerceptronNeuron3.activate([1]);
        myPerceptronNeuron3.propagate(learningRate, [1]);
        myPerceptronNeuron3.activate([1]);
        myPerceptronNeuron3.propagate(learningRate, [1]);
        myPerceptronNeuron3.activate([1]);
        myPerceptronNeuron3.propagate(learningRate, [0.9069767459]);
        /////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron3.activate([0.5382]);
        myPerceptronNeuron3.propagate(learningRate, [0.5581395359]);

    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var myPerceptronNeuron4 = new Perceptron(1, 1, 1);
    // Later pass for trainer
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    ///////////////////Entrenamiento/////////////////////
    for (var i = 0; i < 90000; i++) {
        myPerceptronNeuron4.activate([0.3486]);
        myPerceptronNeuron4.propagate(learningRate, [0.3409090849]);
        myPerceptronNeuron4.activate([0]);
        myPerceptronNeuron4.propagate(learningRate, [0]);
        myPerceptronNeuron4.activate([0]);
        myPerceptronNeuron4.propagate(learningRate, [0]);
        myPerceptronNeuron4.activate([0.0415]);
        myPerceptronNeuron4.propagate(learningRate, [0]);
        myPerceptronNeuron4.activate([0]);
        myPerceptronNeuron4.propagate(learningRate, [0.0681818173]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron4.activate([0.5976]);
        myPerceptronNeuron4.propagate(learningRate, [0.5681818079]);
        myPerceptronNeuron4.activate([0.3735]);
        myPerceptronNeuron4.propagate(learningRate, [0.2954545403]);
        myPerceptronNeuron4.activate([0.5395]);
        myPerceptronNeuron4.propagate(learningRate, [0.3863636295]);
        myPerceptronNeuron4.activate([0.415]);
        myPerceptronNeuron4.propagate(learningRate, [0.2272727234]);
        myPerceptronNeuron4.activate([0.5395]);
        myPerceptronNeuron4.propagate(learningRate, [0.3636363572]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron4.activate([0.415]);
        myPerceptronNeuron4.propagate(learningRate, [0.3636363572]);
        myPerceptronNeuron4.activate([0.5395]);
        myPerceptronNeuron4.propagate(learningRate, [0.4772727187]);
        myPerceptronNeuron4.activate([0.581]);
        myPerceptronNeuron4.propagate(learningRate, [0.4772727187]);
        myPerceptronNeuron4.activate([0.581]);
        myPerceptronNeuron4.propagate(learningRate, [0.4772727187]);
        myPerceptronNeuron4.activate([0.7221]);
        myPerceptronNeuron4.propagate(learningRate, [0.4772727187]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron4.activate([0.747]);
        myPerceptronNeuron4.propagate(learningRate, [0.8181818032]);
        myPerceptronNeuron4.activate([0.4565]);
        myPerceptronNeuron4.propagate(learningRate, [0.4090909018]);
        myPerceptronNeuron4.activate([0.581]);
        myPerceptronNeuron4.propagate(learningRate, [0.7727272586]);
        myPerceptronNeuron4.activate([0.332]);
        myPerceptronNeuron4.propagate(learningRate, [0.2954545403]);
        myPerceptronNeuron4.activate([0.166]);
        myPerceptronNeuron4.propagate(learningRate, [0.2954545403]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron4.activate([0.3735]);
        myPerceptronNeuron4.propagate(learningRate, [0.3409090849]);
        myPerceptronNeuron4.activate([0.083]);
        myPerceptronNeuron4.propagate(learningRate, [0.2045454511]);
        myPerceptronNeuron4.activate([0.7055]);
        myPerceptronNeuron4.propagate(learningRate, [1]);
        myPerceptronNeuron4.activate([0.7055]);
        myPerceptronNeuron4.propagate(learningRate, [1]);
        myPerceptronNeuron4.activate([0.664]);
        myPerceptronNeuron4.propagate(learningRate, [0.954545437]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron4.activate([0.498]);
        myPerceptronNeuron4.propagate(learningRate, [0.5227272633]);

    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //Calculamos las entradas de las otras categorias que nos ayudaran en el match
    EntriesOtherCategories();
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //Calculo de los valores de la categoria actual
    var resultsNetworks = 0;
    for (var w = 0; w <= beltScoreFinal.length - 1; w++) {
        resultsNetworks = myPerceptronNeuron1.activate([beltScoreFinal[w]]);
        outputsNetwork1[w] = new Array(idScoreFinal[w], nameScoreFinal[w], resultsNetworks[0]);
    }
    resultsNetworks = 0;
    for (var w = 0; w <= genderScoreFinal.length - 1; w++) {
        resultsNetworks = myPerceptronNeuron2.activate([genderScoreFinal[w]]);
        outputsNetwork2[w] = new Array(idScoreFinal[w], nameScoreFinal[w], resultsNetworks[0]);
    }
    resultsNetworks = 0;
    for (var w = 0; w <= ageScoreFinal.length - 1; w++) {
        resultsNetworks = myPerceptronNeuron3.activate([ageScoreFinal[w]]);
        outputsNetwork3[w] = new Array(idScoreFinal[w], nameScoreFinal[w], resultsNetworks[0]);
    }
    resultsNetworks = 0;
    for (var w = 0; w <= heightScoreFinal.length - 1; w++) {
        resultsNetworks = myPerceptronNeuron4.activate([heightScoreFinal[w]]);
        outputsNetwork4[w] = new Array(idScoreFinal[w], nameScoreFinal[w], resultsNetworks[0]);
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //Calculo de los valores de las demas categorias
    if (Category == "IM5") {
        for (var w = 0; w <= categoryEntriesI56.length - 1; w++) {
            auxiliar = categoryEntriesI56[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI56[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI78.length - 1; w++) {
            auxiliar = categoryEntriesI78[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI78[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI910.length - 1; w++) {
            auxiliar = categoryEntriesI910[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI910[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI1112.length - 1; w++) {
            auxiliar = categoryEntriesI1112[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI1112[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesJ1314.length - 1; w++) {
            auxiliar = categoryEntriesJ1314[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkJ1314[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesJ1516.length - 1; w++) {
            auxiliar = categoryEntriesJ1516[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkJ1516[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesA17.length - 1; w++) {
            auxiliar = categoryEntriesA17[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkA17[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
    }

    if (Category == "I56") {
        for (var w = 0; w <= categoryEntriesIM5.length - 1; w++) {
            auxiliar = categoryEntriesIM5[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkIM5[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI78.length - 1; w++) {
            auxiliar = categoryEntriesI78[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI78[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI910.length - 1; w++) {
            auxiliar = categoryEntriesI910[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI910[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI1112.length - 1; w++) {
            auxiliar = categoryEntriesI1112[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI1112[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesJ1314.length - 1; w++) {
            auxiliar = categoryEntriesJ1314[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkJ1314[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesJ1516.length - 1; w++) {
            auxiliar = categoryEntriesJ1516[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkJ1516[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesA17.length - 1; w++) {
            auxiliar = categoryEntriesA17[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkA17[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
    }

    if (Category == "I78") {
        for (var w = 0; w <= categoryEntriesIM5.length - 1; w++) {
            auxiliar = categoryEntriesIM5[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkIM5[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI56.length - 1; w++) {
            auxiliar = categoryEntriesI56[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI56[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI910.length - 1; w++) {
            auxiliar = categoryEntriesI910[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI910[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI1112.length - 1; w++) {
            auxiliar = categoryEntriesI1112[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI1112[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesJ1314.length - 1; w++) {
            auxiliar = categoryEntriesJ1314[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkJ1314[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesJ1516.length - 1; w++) {
            auxiliar = categoryEntriesJ1516[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkJ1516[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesA17.length - 1; w++) {
            auxiliar = categoryEntriesA17[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkA17[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
    }

    if (Category == "I910") {
        for (var w = 0; w <= categoryEntriesIM5.length - 1; w++) {
            auxiliar = categoryEntriesIM5[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkIM5[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI56.length - 1; w++) {
            auxiliar = categoryEntriesI56[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI56[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI78.length - 1; w++) {
            auxiliar = categoryEntriesI78[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI78[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI1112.length - 1; w++) {
            auxiliar = categoryEntriesI1112[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI1112[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesJ1314.length - 1; w++) {
            auxiliar = categoryEntriesJ1314[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkJ1314[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesJ1516.length - 1; w++) {
            auxiliar = categoryEntriesJ1516[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkJ1516[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesA17.length - 1; w++) {
            auxiliar = categoryEntriesA17[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkA17[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
    }

    if (Category == "I1112") {
        for (var w = 0; w <= categoryEntriesIM5.length - 1; w++) {
            auxiliar = categoryEntriesIM5[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkIM5[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI56.length - 1; w++) {
            auxiliar = categoryEntriesI56[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI56[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI78.length - 1; w++) {
            auxiliar = categoryEntriesI78[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI78[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI910.length - 1; w++) {
            auxiliar = categoryEntriesI910[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI910[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesJ1314.length - 1; w++) {
            auxiliar = categoryEntriesJ1314[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkJ1314[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesJ1516.length - 1; w++) {
            auxiliar = categoryEntriesJ1516[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkJ1516[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesA17.length - 1; w++) {
            auxiliar = categoryEntriesA17[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkA17[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
    }

    if (Category == "J1314") {
        for (var w = 0; w <= categoryEntriesIM5.length - 1; w++) {
            auxiliar = categoryEntriesIM5[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkIM5[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI56.length - 1; w++) {
            auxiliar = categoryEntriesI56[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI56[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI78.length - 1; w++) {
            auxiliar = categoryEntriesI78[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI78[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI910.length - 1; w++) {
            auxiliar = categoryEntriesI910[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI910[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI1112.length - 1; w++) {
            auxiliar = categoryEntriesI1112[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI1112[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesJ1516.length - 1; w++) {
            auxiliar = categoryEntriesJ1516[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkJ1516[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesA17.length - 1; w++) {
            auxiliar = categoryEntriesA17[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkA17[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
    }

    if (Category == "J1516") {
        for (var w = 0; w <= categoryEntriesIM5.length - 1; w++) {
            auxiliar = categoryEntriesIM5[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkIM5[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI56.length - 1; w++) {
            auxiliar = categoryEntriesI56[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI56[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI78.length - 1; w++) {
            auxiliar = categoryEntriesI78[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI78[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI910.length - 1; w++) {
            auxiliar = categoryEntriesI910[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI910[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI1112.length - 1; w++) {
            auxiliar = categoryEntriesI1112[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI1112[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesJ1314.length - 1; w++) {
            auxiliar = categoryEntriesJ1314[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkJ1314[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesA17.length - 1; w++) {
            auxiliar = categoryEntriesA17[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkA17[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
    }

    if (Category == "A17") {
        for (var w = 0; w <= categoryEntriesIM5.length - 1; w++) {
            auxiliar = categoryEntriesIM5[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkIM5[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI56.length - 1; w++) {
            auxiliar = categoryEntriesI56[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI56[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI78.length - 1; w++) {
            auxiliar = categoryEntriesI78[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI78[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI910.length - 1; w++) {
            auxiliar = categoryEntriesI910[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI910[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesI1112.length - 1; w++) {
            auxiliar = categoryEntriesI1112[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkI1112[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesJ1314.length - 1; w++) {
            auxiliar = categoryEntriesJ1314[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkJ1314[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
        for (var w = 0; w <= categoryEntriesJ1516.length - 1; w++) {
            auxiliar = categoryEntriesJ1516[w];
            id = auxiliar[0];
            nombre = auxiliar[1];
            resultsNetworksN1 = myPerceptronNeuron1.activate([auxiliar[5]]);
            resultsNetworksN2 = myPerceptronNeuron2.activate([auxiliar[2]]);
            resultsNetworksN3 = myPerceptronNeuron3.activate([auxiliar[3]]);
            resultsNetworksN4 = myPerceptronNeuron4.activate([auxiliar[4]]);
            categoryNetworkJ1516[w] = new Array(id, nombre, resultsNetworksN2[0], resultsNetworksN3[0], resultsNetworksN4[0], resultsNetworksN1[0]);
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //Ordenamos los vectores de enor a mayor
    outputsNetwork1.sort(comparateThirdColumn);
    outputsNetwork2.sort(comparateThirdColumn);
    outputsNetwork3.sort(comparateThirdColumn);
    outputsNetwork4.sort(comparateThirdColumn);
    categoryNetworkA17.sort(comparateThirdColumn);
    categoryNetworkI1112.sort(comparateThirdColumn);
    categoryNetworkI56.sort(comparateThirdColumn);
    categoryNetworkI78.sort(comparateThirdColumn);
    categoryNetworkI910.sort(comparateThirdColumn);
    categoryNetworkIM5.sort(comparateThirdColumn);
    categoryNetworkJ1314.sort(comparateThirdColumn);
    categoryNetworkJ1516.sort(comparateThirdColumn);

    var auxiliar, auxiliar2, auxiliar3;
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //Hace el match si dos personas tiene el mismo valor de cinta los junta, y guardamos su id para futuras modificaciones
    var auxId = new Array();
    for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
        if (w + 1 < outputsNetwork1.length) {
            auxiliar = outputsNetwork1[w];
            auxiliar2 = outputsNetwork1[w + 1];
            if (auxiliar[2] == auxiliar2[2]) {
                participantes.push(auxiliar[1]);
                participantes.push(auxiliar2[1]);
                idWon.push(auxiliar[0]);
                idWon.push(auxiliar2[0]);
                nameWon.push(auxiliar[1]);
                nameWon.push(auxiliar2[1]);
                //Aumentamos uno nuestro contador, para que no pase este problema:
                //Se tiene 3 participantes con los mismos valores, el participante 1 y 2 se comparan y grafica
                //Y el 2 y 3 tambien se compara y se grafica, un participante tiene 2 competidores
                w++;
                //Guardamos id's
                auxId.push(auxiliar[0]);
                auxId.push(auxiliar2[0]);
            }
        }
    }
    //0 si esta, -1 si no esta
    // console.log(auxId.indexOf("113"));
    for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
        auxDatos = outputsNetwork1[w];
        if (auxId.indexOf(auxDatos[0]) != -1) {
            delete outputsNetwork1[w];
        }
    }
    auxId = [];
    //Elimina cosas que no queremos
    outputsNetwork1 = outputsNetwork1.filter(Boolean);
    //Si todavia hay people
    //Busca quienes coincidan con su cinta
    if (outputsNetwork1.length != 0) {
        for (var w = 0; w <= tournamentCategory.length - 1; w++) {
            if (Category == tournamentCategory[w]) {
                if (w + 1 < tournamentCategory.length) {
                    matchUp();
                    break;
                }
                if (w - 1 < tournamentCategory.length) {
                    matchDown();
                    break;
                }
            }
        }
    }
    //Elimina cosas que no queremos
    outputsNetwork1 = outputsNetwork1.filter(Boolean);
    //Busca quienes coincidan con su edad
    if (outputsNetwork1.length != 0) {
        for (var w = 0; w <= tournamentCategory.length - 1; w++) {
            if (Category == tournamentCategory[w]) {
                if (w + 1 < tournamentCategory.length) {
                    matchUpAge();
                    break;
                }
                if (w - 1 < tournamentCategory.length) {
                    matchDownAge();
                    break;
                }
            }
        }
    }
    //Elimina cosas que no queremos
    outputsNetwork1 = outputsNetwork1.filter(Boolean);
    //Si no se encuentra a un competidor
    if (outputsNetwork1.length != 0) {
        matchAlone();
    }

    //Elimina cosas que no queremos
    outputsNetwork1 = outputsNetwork1.filter(Boolean);
    //En el vector hace las graficas
    doGraphic();

}

function matchUp() {
    //Para que las posiciones se acomoden bien
    outputsNetwork1 = outputsNetwork1.filter(Boolean);
    auxId = [];
    if (Category == "IM5") {
        //Se compara con el vector de la categoria i56
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkI56.length - 1; r++) {
                auxiliar2 = categoryNetworkI56[r];
                if (auxiliar[2] == auxiliar2[5]) {
                    participantes.push(auxiliar[1]);
                    participantes.push(auxiliar2[1]);
                    idWon.push(auxiliar[0]);
                    idWon.push(auxiliar2[0]);
                    nameWon.push(auxiliar[1]);
                    nameWon.push(auxiliar2[1]);
                    //Aumentamos uno nuestro contador, para que no pase este problema:
                    //Se tiene 3 participantes con los mismos valores, el participante 1 y 2 se comparan y grafica
                    //Y el 2 y 3 tambien se compara y se grafica, un participante tiene 2 competidores
                    w++;
                    //Guardamos id's
                    auxId.push(auxiliar[0]);
                }
            }
        }

    }

    if (Category == "I56") {
        //Se compara con el vector de la categoria i78
        console.table(categoryNetworkI78);
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkI78.length - 1; r++) {
                auxiliar2 = categoryNetworkI78[r];
                if (auxiliar[2] == auxiliar2[5]) {
                    participantes.push(auxiliar[1]);
                    participantes.push(auxiliar2[1]);
                    idWon.push(auxiliar[0]);
                    idWon.push(auxiliar2[0]);
                    nameWon.push(auxiliar[1]);
                    nameWon.push(auxiliar2[1]);
                    //Aumentamos uno nuestro contador, para que no pase este problema:
                    //Se tiene 3 participantes con los mismos valores, el participante 1 y 2 se comparan y grafica
                    //Y el 2 y 3 tambien se compara y se grafica, un participante tiene 2 competidores
                    w++;
                    //Guardamos id's
                    auxId.push(auxiliar[0]);
                }
            }
        }
    }

    if (Category == "I78") {
        //Se compara con el vector de la categoria i910
        //Se compara con el vector de la categoria i1112
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkI910.length - 1; r++) {
                auxiliar2 = categoryNetworkI910[r];
                if (auxiliar[2] == auxiliar2[5]) {
                    participantes.push(auxiliar[1]);
                    participantes.push(auxiliar2[1]);
                    idWon.push(auxiliar[0]);
                    idWon.push(auxiliar2[0]);
                    nameWon.push(auxiliar[1]);
                    nameWon.push(auxiliar2[1]);
                    //Aumentamos uno nuestro contador, para que no pase este problema:
                    //Se tiene 3 participantes con los mismos valores, el participante 1 y 2 se comparan y grafica
                    //Y el 2 y 3 tambien se compara y se grafica, un participante tiene 2 competidores
                    w++;
                    //Guardamos id's
                    auxId.push(auxiliar[0]);
                }
            }
        }
    }

    if (Category == "I910") {
        //Se compara con el vector de la categoria i1112
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkI1112.length - 1; r++) {
                auxiliar2 = categoryNetworkI1112[r];
                if (auxiliar[2] == auxiliar2[5]) {
                    participantes.push(auxiliar[1]);
                    participantes.push(auxiliar2[1]);
                    idWon.push(auxiliar[0]);
                    idWon.push(auxiliar2[0]);
                    nameWon.push(auxiliar[1]);
                    nameWon.push(auxiliar2[1]);
                    //Aumentamos uno nuestro contador, para que no pase este problema:
                    //Se tiene 3 participantes con los mismos valores, el participante 1 y 2 se comparan y grafica
                    //Y el 2 y 3 tambien se compara y se grafica, un participante tiene 2 competidores
                    w++;
                    //Guardamos id's
                    auxId.push(auxiliar[0]);
                }
            }
        }

    }

    if (Category == "I1112") {
        //Se compara con el vector de la categoria j1314
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkJ1314.length - 1; r++) {
                auxiliar2 = categoryNetworkJ1314[r];
                if (auxiliar[2] == auxiliar2[5]) {
                    participantes.push(auxiliar[1]);
                    participantes.push(auxiliar2[1]);
                    idWon.push(auxiliar[0]);
                    idWon.push(auxiliar2[0]);
                    nameWon.push(auxiliar[1]);
                    nameWon.push(auxiliar2[1]);
                    //Aumentamos uno nuestro contador, para que no pase este problema:
                    //Se tiene 3 participantes con los mismos valores, el participante 1 y 2 se comparan y grafica
                    //Y el 2 y 3 tambien se compara y se grafica, un participante tiene 2 competidores
                    w++;
                    //Guardamos id's
                    auxId.push(auxiliar[0]);
                }
            }
        }

    }

    if (Category == "J1314") {
        //Se compara con el vector de la categoria j1516
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkJ1516.length - 1; r++) {
                auxiliar2 = categoryNetworkJ1516[r];
                if (auxiliar[2] == auxiliar2[5]) {
                    participantes.push(auxiliar[1]);
                    participantes.push(auxiliar2[1]);
                    idWon.push(auxiliar[0]);
                    idWon.push(auxiliar2[0]);
                    nameWon.push(auxiliar[1]);
                    nameWon.push(auxiliar2[1]);
                    //Aumentamos uno nuestro contador, para que no pase este problema:
                    //Se tiene 3 participantes con los mismos valores, el participante 1 y 2 se comparan y grafica
                    //Y el 2 y 3 tambien se compara y se grafica, un participante tiene 2 competidores
                    w++;
                    //Guardamos id's
                    auxId.push(auxiliar[0]);
                }
            }
        }
    }

    if (Category == "J1516") {
        //Se compara con el vector de la categoria a17
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkA17.length - 1; r++) {
                auxiliar2 = categoryNetworkA17[r];
                if (auxiliar[2] == auxiliar2[5]) {
                    participantes.push(auxiliar[1]);
                    participantes.push(auxiliar2[1]);
                    idWon.push(auxiliar[0]);
                    idWon.push(auxiliar2[0]);
                    nameWon.push(auxiliar[1]);
                    nameWon.push(auxiliar2[1]);
                    //Aumentamos uno nuestro contador, para que no pase este problema:
                    //Se tiene 3 participantes con los mismos valores, el participante 1 y 2 se comparan y grafica
                    //Y el 2 y 3 tambien se compara y se grafica, un participante tiene 2 competidores
                    w++;
                    //Guardamos id's
                    auxId.push(auxiliar[0]);
                }
            }
        }
    }

    //Para limpiar el vector
    for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
        auxDatos = outputsNetwork1[w];
        if (auxId.indexOf(auxDatos[0]) != -1) {
            delete outputsNetwork1[w];
        }
    }
    auxId = [];
}

function matchDown() {
    //Para que las posiciones se acomoden bien
    outputsNetwork1 = outputsNetwork1.filter(Boolean);
    auxId = [];
    if (Category == "I56") {
        //Se compara con el vector de la categoria iM5
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkIM5.length - 1; r++) {
                auxiliar2 = categoryNetworkIM5[r];
                if (auxiliar[2] == auxiliar2[5]) {
                    participantes.push(auxiliar[1]);
                    participantes.push(auxiliar2[1]);
                    idWon.push(auxiliar[0]);
                    idWon.push(auxiliar2[0]);
                    nameWon.push(auxiliar[1]);
                    nameWon.push(auxiliar2[1]);
                    //Aumentamos uno nuestro contador, para que no pase este problema:
                    //Se tiene 3 participantes con los mismos valores, el participante 1 y 2 se comparan y grafica
                    //Y el 2 y 3 tambien se compara y se grafica, un participante tiene 2 competidores
                    w++;
                    //Guardamos id's
                    auxId.push(auxiliar[0]);
                }
            }
        }
    }

    if (Category == "I78") {
        //Se compara con el vector de la categoria i56
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkI56.length - 1; r++) {
                auxiliar2 = categoryNetworkI56[r];
                if (auxiliar[2] == auxiliar2[5]) {
                    participantes.push(auxiliar[1]);
                    participantes.push(auxiliar2[1]);
                    idWon.push(auxiliar[0]);
                    idWon.push(auxiliar2[0]);
                    nameWon.push(auxiliar[1]);
                    nameWon.push(auxiliar2[1]);
                    //Aumentamos uno nuestro contador, para que no pase este problema:
                    //Se tiene 3 participantes con los mismos valores, el participante 1 y 2 se comparan y grafica
                    //Y el 2 y 3 tambien se compara y se grafica, un participante tiene 2 competidores
                    w++;
                    //Guardamos id's
                    auxId.push(auxiliar[0]);
                }
            }
        }
    }

    if (Category == "I910") {
        //Se compara con el vector de la categoria i78
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkI78.length - 1; r++) {
                auxiliar2 = categoryNetworkI78[r];
                if (auxiliar[2] == auxiliar2[5]) {
                    participantes.push(auxiliar[1]);
                    participantes.push(auxiliar2[1]);
                    idWon.push(auxiliar[0]);
                    idWon.push(auxiliar2[0]);
                    nameWon.push(auxiliar[1]);
                    nameWon.push(auxiliar2[1]);
                    //Aumentamos uno nuestro contador, para que no pase este problema:
                    //Se tiene 3 participantes con los mismos valores, el participante 1 y 2 se comparan y grafica
                    //Y el 2 y 3 tambien se compara y se grafica, un participante tiene 2 competidores
                    w++;
                    //Guardamos id's
                    auxId.push(auxiliar[0]);
                }
            }
        }

    }

    if (Category == "I1112") {
        //Se compara con el vector de la categoria I910
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkI910.length - 1; r++) {
                auxiliar2 = categoryNetworkI910[r];
                if (auxiliar[2] == auxiliar2[5]) {
                    participantes.push(auxiliar[1]);
                    participantes.push(auxiliar2[1]);
                    idWon.push(auxiliar[0]);
                    idWon.push(auxiliar2[0]);
                    nameWon.push(auxiliar[1]);
                    nameWon.push(auxiliar2[1]);
                    //Aumentamos uno nuestro contador, para que no pase este problema:
                    //Se tiene 3 participantes con los mismos valores, el participante 1 y 2 se comparan y grafica
                    //Y el 2 y 3 tambien se compara y se grafica, un participante tiene 2 competidores
                    w++;
                    //Guardamos id's
                    auxId.push(auxiliar[0]);
                }
            }
        }

    }

    if (Category == "J1314") {
        //Se compara con el vector de la categoria I1112
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkI1112.length - 1; r++) {
                auxiliar2 = categoryNetworkI1112[r];
                if (auxiliar[2] == auxiliar2[5]) {
                    participantes.push(auxiliar[1]);
                    participantes.push(auxiliar2[1]);
                    idWon.push(auxiliar[0]);
                    idWon.push(auxiliar2[0]);
                    nameWon.push(auxiliar[1]);
                    nameWon.push(auxiliar2[1]);
                    //Aumentamos uno nuestro contador, para que no pase este problema:
                    //Se tiene 3 participantes con los mismos valores, el participante 1 y 2 se comparan y grafica
                    //Y el 2 y 3 tambien se compara y se grafica, un participante tiene 2 competidores
                    w++;
                    //Guardamos id's
                    auxId.push(auxiliar[0]);
                }
            }
        }
    }

    if (Category == "J1516") {
        //Se compara con el vector de la categoria J1314
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkJ1314.length - 1; r++) {
                auxiliar2 = categoryNetworkJ1314[r];
                if (auxiliar[2] == auxiliar2[5]) {
                    participantes.push(auxiliar[1]);
                    participantes.push(auxiliar2[1]);
                    idWon.push(auxiliar[0]);
                    idWon.push(auxiliar2[0]);
                    nameWon.push(auxiliar[1]);
                    nameWon.push(auxiliar2[1]);
                    //Aumentamos uno nuestro contador, para que no pase este problema:
                    //Se tiene 3 participantes con los mismos valores, el participante 1 y 2 se comparan y grafica
                    //Y el 2 y 3 tambien se compara y se grafica, un participante tiene 2 competidores
                    w++;
                    //Guardamos id's
                    auxId.push(auxiliar[0]);
                }
            }
        }
    }

    if (Category == "A17") {
        //Se compara con el vector de la categoria J1516
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkJ1516.length - 1; r++) {
                auxiliar2 = categoryNetworkJ1516[r];
                if (auxiliar[2] == auxiliar2[5]) {
                    participantes.push(auxiliar[1]);
                    participantes.push(auxiliar2[1]);
                    idWon.push(auxiliar[0]);
                    idWon.push(auxiliar2[0]);
                    nameWon.push(auxiliar[1]);
                    nameWon.push(auxiliar2[1]);
                    //Aumentamos uno nuestro contador, para que no pase este problema:
                    //Se tiene 3 participantes con los mismos valores, el participante 1 y 2 se comparan y grafica
                    //Y el 2 y 3 tambien se compara y se grafica, un participante tiene 2 competidores
                    w++;
                    //Guardamos id's
                    auxId.push(auxiliar[0]);
                }
            }
        }
    }

    //Para limpiar el vector
    for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
        auxDatos = outputsNetwork1[w];
        if (auxId.indexOf(auxDatos[0]) != -1) {
            delete outputsNetwork1[w];
        }
    }
    auxId = [];
}

function getValuesCategory(conta, category, idStudent, nameStudent, genderStudent, ageStudent, heightStudent, beltStudent) {
    var values = [nameStudent, genderStudent, ageStudent, heightStudent, beltStudent];
    gender = values[1];
    age = values[2];
    colorBelt = values[4];
    height = values[3];

    var aux;

    if (gender == "M") {
        gender = 1;
    } else {
        gender = 0;
    }

    if (age >= 17) {
        age = 1;
    } else if (age == 4) {
        age = 0;
    } else {
        aux = age - 4;
        age = aux * 0.07692;
    }

    switch (colorBelt) {
        case "Blanca":
            colorBelt = 0;
            break;
        case "Amarilla":
            colorBelt = 0.2;
            break;
        case "Verde":
            colorBelt = 0.4;
            break;
        case "Azul":
            colorBelt = 0.6;
            break;
        case "Rojo":
            colorBelt = 0.8;
            break;
        case "Negra":
            colorBelt = 1;
            break;
    }

    if (height >= 2.00) {
        height = 1;
    } else if (height == 0.8) {
        height = 0;
    } else {
        aux = height - 0.8;
        height = (aux * 100) * 0.0083;
    }
    if (category == "I1112") {
        categoryEntriesI1112[conta] = new Array(idStudent, nameStudent, gender, age, colorBelt, height)
    };
    if (category == "A17") {
        categoryEntriesA17[conta] = new Array(idStudent, nameStudent, gender, age, colorBelt, height)
    };
    if (category == "I56") {
        categoryEntriesI56[conta] = new Array(idStudent, nameStudent, gender, age, colorBelt, height)
    };
    if (category == "I78") {
        categoryEntriesI78[conta] = new Array(idStudent, nameStudent, gender, age, colorBelt, height)
    };
    if (category == "I910") {
        categoryEntriesI910[conta] = new Array(idStudent, nameStudent, gender, age, colorBelt, height)
    };
    if (category == "IM5") {
        categoryEntriesIM5[conta] = new Array(idStudent, nameStudent, gender, age, colorBelt, height)
    };
    if (category == "J1314") {
        categoryEntriesJ1314[conta] = new Array(idStudent, nameStudent, gender, age, colorBelt, height)
    };
    if (category == "J1516") {
        categoryEntriesJ1516[conta] = new Array(idStudent, nameStudent, gender, age, colorBelt, height)
    };

}

function EntriesOtherCategories() {
    if (Category == 'IM5') {
        for (var w = 0; w <= categoryI56.length - 1; w++) {
            auxiliarCategorias = categoryI56[w];
            getValuesCategory(w, "I56", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI78.length - 1; w++) {
            auxiliarCategorias = categoryI78[w];
            getValuesCategory(w, "I78", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI910.length - 1; w++) {
            auxiliarCategorias = categoryI910[w];
            getValuesCategory(w, "I910", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI1112.length - 1; w++) {
            auxiliarCategorias = categoryI1112[w];
            getValuesCategory(w, "I1112", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryJ1314.length - 1; w++) {
            auxiliarCategorias = categoryJ1314[w];
            getValuesCategory(w, "J1314", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryJ1516.length - 1; w++) {
            auxiliarCategorias = categoryJ1516[w];
            getValuesCategory(w, "J1516", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryA17.length - 1; w++) {
            auxiliarCategorias = categoryA17[w];
            getValuesCategory(w, "A17", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
    }

    if (Category == 'I56') {
        for (var w = 0; w <= categoryIM5.length - 1; w++) {
            auxiliarCategorias = categoryIM5[w];
            getValuesCategory(w, "IM5", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI78.length - 1; w++) {
            auxiliarCategorias = categoryI78[w];
            getValuesCategory(w, "I78", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI910.length - 1; w++) {
            auxiliarCategorias = categoryI910[w];
            getValuesCategory(w, "I910", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI1112.length - 1; w++) {
            auxiliarCategorias = categoryI1112[w];
            getValuesCategory(w, "I1112", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryJ1314.length - 1; w++) {
            auxiliarCategorias = categoryJ1314[w];
            getValuesCategory(w, "J1314", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryJ1516.length - 1; w++) {
            auxiliarCategorias = categoryJ1516[w];
            getValuesCategory(w, "J1516", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryA17.length - 1; w++) {
            auxiliarCategorias = categoryA17[w];
            getValuesCategory(w, "A17", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
    }

    if (Category == 'I78') {
        for (var w = 0; w <= categoryIM5.length - 1; w++) {
            auxiliarCategorias = categoryIM5[w];
            getValuesCategory(w, "IM5", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI56.length - 1; w++) {
            auxiliarCategorias = categoryI56[w];
            getValuesCategory(w, "I56", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI910.length - 1; w++) {
            auxiliarCategorias = categoryI910[w];
            getValuesCategory(w, "I910", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI1112.length - 1; w++) {
            auxiliarCategorias = categoryI1112[w];
            getValuesCategory(w, "I1112", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryJ1314.length - 1; w++) {
            auxiliarCategorias = categoryJ1314[w];
            getValuesCategory(w, "J1314", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryJ1516.length - 1; w++) {
            auxiliarCategorias = categoryJ1516[w];
            getValuesCategory(w, "J1516", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryA17.length - 1; w++) {
            auxiliarCategorias = categoryA17[w];
            getValuesCategory(w, "A17", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
    }

    if (Category == 'I1112') {
        for (var w = 0; w <= categoryIM5.length - 1; w++) {
            auxiliarCategorias = categoryIM5[w];
            getValuesCategory(w, "IM5", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI56.length - 1; w++) {
            auxiliarCategorias = categoryI56[w];
            getValuesCategory(w, "I56", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI78.length - 1; w++) {
            auxiliarCategorias = categoryI78[w];
            getValuesCategory(w, "I78", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI910.length - 1; w++) {
            auxiliarCategorias = categoryI910[w];
            getValuesCategory(w, "I910", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryJ1314.length - 1; w++) {
            auxiliarCategorias = categoryJ1314[w];
            getValuesCategory(w, "J1314", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryJ1516.length - 1; w++) {
            auxiliarCategorias = categoryJ1516[w];
            getValuesCategory(w, "J1516", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryA17.length - 1; w++) {
            auxiliarCategorias = categoryA17[w];
            getValuesCategory(w, "A17", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
    }

    if (Category == 'J1314') {
        for (var w = 0; w <= categoryIM5.length - 1; w++) {
            auxiliarCategorias = categoryIM5[w];
            getValuesCategory(w, "IM5", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI56.length - 1; w++) {
            auxiliarCategorias = categoryI56[w];
            getValuesCategory(w, "I56", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI78.length - 1; w++) {
            auxiliarCategorias = categoryI78[w];
            getValuesCategory(w, "I78", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI910.length - 1; w++) {
            auxiliarCategorias = categoryI910[w];
            getValuesCategory(w, "I910", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI1112.length - 1; w++) {
            auxiliarCategorias = categoryI1112[w];
            getValuesCategory(w, "I1112", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryJ1516.length - 1; w++) {
            auxiliarCategorias = categoryJ1516[w];
            getValuesCategory(w, "J1516", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryA17.length - 1; w++) {
            auxiliarCategorias = categoryA17[w];
            getValuesCategory(w, "A17", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
    }

    if (Category == 'J1516') {
        for (var w = 0; w <= categoryIM5.length - 1; w++) {
            auxiliarCategorias = categoryIM5[w];
            getValuesCategory(w, "IM5", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI56.length - 1; w++) {
            auxiliarCategorias = categoryI56[w];
            getValuesCategory(w, "I56", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI78.length - 1; w++) {
            auxiliarCategorias = categoryI78[w];
            getValuesCategory(w, "I78", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI910.length - 1; w++) {
            auxiliarCategorias = categoryI910[w];
            getValuesCategory(w, "I910", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI1112.length - 1; w++) {
            auxiliarCategorias = categoryI1112[w];
            getValuesCategory(w, "I1112", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryJ1314.length - 1; w++) {
            auxiliarCategorias = categoryJ1314[w];
            getValuesCategory(w, "J1314", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryA17.length - 1; w++) {
            auxiliarCategorias = categoryA17[w];
            getValuesCategory(w, "A17", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
    }

    if (Category == 'A17') {
        for (var w = 0; w <= categoryIM5.length - 1; w++) {
            auxiliarCategorias = categoryIM5[w];
            getValuesCategory(w, "IM5", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI56.length - 1; w++) {
            auxiliarCategorias = categoryI56[w];
            getValuesCategory(w, "I56", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI78.length - 1; w++) {
            auxiliarCategorias = categoryI78[w];
            getValuesCategory(w, "I78", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI910.length - 1; w++) {
            auxiliarCategorias = categoryI910[w];
            getValuesCategory(w, "I910", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI1112.length - 1; w++) {
            auxiliarCategorias = categoryI1112[w];
            getValuesCategory(w, "I1112", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryJ1314.length - 1; w++) {
            auxiliarCategorias = categoryJ1314[w];
            getValuesCategory(w, "J1314", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryJ1516.length - 1; w++) {
            auxiliarCategorias = categoryJ1516[w];
            getValuesCategory(w, "J1516", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
    }

    if (Category == 'I910') {
        for (var w = 0; w <= categoryIM5.length - 1; w++) {
            auxiliarCategorias = categoryIM5[w];
            getValuesCategory(w, "IM5", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI56.length - 1; w++) {
            auxiliarCategorias = categoryI56[w];
            getValuesCategory(w, "I56", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI78.length - 1; w++) {
            auxiliarCategorias = categoryI78[w];
            getValuesCategory(w, "I78", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryI1112.length - 1; w++) {
            auxiliarCategorias = categoryI1112[w];
            getValuesCategory(w, "I1112", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryJ1314.length - 1; w++) {
            auxiliarCategorias = categoryJ1314[w];
            getValuesCategory(w, "J1314", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryJ1516.length - 1; w++) {
            auxiliarCategorias = categoryJ1516[w];
            getValuesCategory(w, "J1516", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
        for (var w = 0; w <= categoryA17.length - 1; w++) {
            auxiliarCategorias = categoryA17[w];
            getValuesCategory(w, "A17", auxiliarCategorias[0], auxiliarCategorias[1], auxiliarCategorias[4], auxiliarCategorias[3], auxiliarCategorias[5], auxiliarCategorias[2]);
        }
    }
}

function comparateThirdColumn(a, b) {
    if (a[2] == b[2]) return 0;
    else return (a[2] < b[2]) ? -1 : 1;
}

function doGraphic() {
    for (var w = 0; w <= participantes.length - 1; w++) {
        participants.push(participantes[w]);
    }
}

function matchAlone() {
    for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
        auxiliar = outputsNetwork1[w];
        participantes.push(auxiliar[1]);
        participantes.push(" ");
    }
}

function matchUpAge() {
    //Para que las posiciones se acomoden bien
    outputsNetwork1 = outputsNetwork1.filter(Boolean);
    auxId = [];
    if (Category == "IM5") {
        conta = 0;
        //Se compara con el vector de la categoria i1112
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkI56.length - 1; r++) {
                auxiliar2 = categoryNetworkI56[r];
                calculo = auxiliar[2] - auxiliar2[3];
                if (calculo <= 0.23064) {
                    if (conta == 0) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                    if (conta >= 0 && auxIdNext.indexOf(auxiliar2[0]) == -1) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        //Guardamos id's
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                }
            }
        }
    }

    if (Category == "I56") {
        conta = 0;
        //Se compara con el vector de la categoria i1112
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkI78.length - 1; r++) {
                auxiliar2 = categoryNetworkI78[r];
                calculo = auxiliar[2] - auxiliar2[3];
                if (calculo <= 0.23064) {
                    if (conta == 0) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                    if (conta >= 0 && auxIdNext.indexOf(auxiliar2[0]) == -1) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        //Guardamos id's
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                }
            }
        }
    }

    if (Category == "I78") {
        conta = 0;
        //Se compara con el vector de la categoria i1112
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkI910.length - 1; r++) {
                auxiliar2 = categoryNetworkI910[r];
                calculo = auxiliar[2] - auxiliar2[3];
                if (calculo <= 0.23064) {
                    if (conta == 0) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                    if (conta >= 0 && auxIdNext.indexOf(auxiliar2[0]) == -1) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        //Guardamos id's
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                }
            }
        }
    }

    if (Category == "I910") {
        conta = 0;
        //Se compara con el vector de la categoria i1112
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkI1112.length - 1; r++) {
                auxiliar2 = categoryNetworkI1112[r];
                calculo = auxiliar[2] - auxiliar2[3];
                if (calculo <= 0.23064) {
                    if (conta == 0) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                    if (conta >= 0 && auxIdNext.indexOf(auxiliar2[0]) == -1) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        //Guardamos id's
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                }
            }
        }
    }

    if (Category == "I1112") {
        conta = 0;
        //Se compara con el vector de la categoria i1112
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkJ1314.length - 1; r++) {
                auxiliar2 = categoryNetworkJ1314[r];
                calculo = auxiliar[2] - auxiliar2[3];
                if (calculo <= 0.23064) {
                    if (conta == 0) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                    if (conta >= 0 && auxIdNext.indexOf(auxiliar2[0]) == -1) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        //Guardamos id's
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                }
            }
        }
    }

    if (Category == "J1314") {
        conta = 0;
        //Se compara con el vector de la categoria i1112
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkJ1516.length - 1; r++) {
                auxiliar2 = categoryNetworkJ1516[r];
                calculo = auxiliar[2] - auxiliar2[3];
                if (calculo <= 0.23064) {
                    if (conta == 0) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                    if (conta >= 0 && auxIdNext.indexOf(auxiliar2[0]) == -1) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        //Guardamos id's
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                }
            }
        }
    }

    if (Category == "J1516") {
        conta = 0;
        //Se compara con el vector de la categoria i1112
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkA17.length - 1; r++) {
                auxiliar2 = categoryNetworkA17[r];
                calculo = auxiliar[2] - auxiliar2[3];
                if (calculo <= 0.23064) {
                    if (conta == 0) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                    if (conta >= 0 && auxIdNext.indexOf(auxiliar2[0]) == -1) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        //Guardamos id's
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                }
            }
        }
    }

    //Para limpiar el vector
    for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
        auxDatos = outputsNetwork1[w];
        if (auxId.indexOf(auxDatos[0]) != -1) {
            delete outputsNetwork1[w];
        }
    }
    auxId = [];

}

function matchDownAge() {
    //Para que las posiciones se acomoden bien
    outputsNetwork1 = outputsNetwork1.filter(Boolean);
    auxId = [];

    if (Category == "I56") {
        conta = 0;
        //Se compara con el vector de la categoria i1112
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkIM5.length - 1; r++) {
                auxiliar2 = categoryNetworkIM5[r];
                calculo = auxiliar[2] - auxiliar2[3];
                if (calculo <= 0.23064) {
                    if (conta == 0) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                    if (conta >= 0 && auxIdNext.indexOf(auxiliar2[0]) == -1) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        //Guardamos id's
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                }
            }
        }
    }

    if (Category == "I78") {
        conta = 0;
        //Se compara con el vector de la categoria i1112
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkI56.length - 1; r++) {
                auxiliar2 = categoryNetworkI56[r];
                calculo = auxiliar[2] - auxiliar2[3];
                if (calculo <= 0.23064) {
                    if (conta == 0) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                    if (conta >= 0 && auxIdNext.indexOf(auxiliar2[0]) == -1) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        //Guardamos id's
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                }
            }
        }
    }

    if (Category == "I910") {
        conta = 0;
        //Se compara con el vector de la categoria i1112
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkI78.length - 1; r++) {
                auxiliar2 = categoryNetworkI78[r];
                calculo = auxiliar[2] - auxiliar2[3];
                if (calculo <= 0.23064) {
                    if (conta == 0) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                    if (conta >= 0 && auxIdNext.indexOf(auxiliar2[0]) == -1) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        //Guardamos id's
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                }
            }
        }
    }

    if (Category == "I1112") {
        conta = 0;
        //Se compara con el vector de la categoria i1112
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkI910.length - 1; r++) {
                auxiliar2 = categoryNetworkI910[r];
                calculo = auxiliar[2] - auxiliar2[3];
                if (calculo <= 0.23064) {
                    if (conta == 0) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                    if (conta >= 0 && auxIdNext.indexOf(auxiliar2[0]) == -1) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        //Guardamos id's
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                }
            }
        }
    }

    if (Category == "J1314") {
        conta = 0;
        //Se compara con el vector de la categoria i1112
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkI1112.length - 1; r++) {
                auxiliar2 = categoryNetworkI1112[r];
                calculo = auxiliar[2] - auxiliar2[3];
                if (calculo <= 0.23064) {
                    if (conta == 0) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                    if (conta >= 0 && auxIdNext.indexOf(auxiliar2[0]) == -1) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        //Guardamos id's
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                }
            }
        }
    }

    if (Category == "J1516") {
        conta = 0;
        //Se compara con el vector de la categoria i1112
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkJ1314.length - 1; r++) {
                auxiliar2 = categoryNetworkJ1314[r];
                calculo = auxiliar[2] - auxiliar2[3];
                if (calculo <= 0.23064) {
                    if (conta == 0) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                    if (conta >= 0 && auxIdNext.indexOf(auxiliar2[0]) == -1) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        //Guardamos id's
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                }
            }
        }
    }

    if (Category == "A17") {
        conta = 0;
        //Se compara con el vector de la categoria i1112
        for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
            auxiliar = outputsNetwork1[w];
            for (var r = 0; r <= categoryNetworkJ1516.length - 1; r++) {
                auxiliar2 = categoryNetworkJ1516[r];
                calculo = auxiliar[2] - auxiliar2[3];
                if (calculo <= 0.23064) {
                    if (conta == 0) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                    if (conta >= 0 && auxIdNext.indexOf(auxiliar2[0]) == -1) {
                        participantes.push(auxiliar[1]);
                        participantes.push(auxiliar2[1]);
                        idWon.push(auxiliar[0]);
                        idWon.push(auxiliar2[0]);
                        nameWon.push(auxiliar[1]);
                        nameWon.push(auxiliar2[1]);
                        //Guardamos id's
                        auxId.push(auxiliar[0]);
                        auxIdNext.push(auxiliar2[0]);
                        conta++;
                        break;
                    }
                }
            }
        }
    }

    //Para limpiar el vector
    for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
        auxDatos = outputsNetwork1[w];
        if (auxId.indexOf(auxDatos[0]) != -1) {
            delete outputsNetwork1[w];
        }
    }
    auxId = [];

}