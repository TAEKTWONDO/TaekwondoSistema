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

function graphic() {
    $(document).ready(function () {
        $('#remove').on('click', function () {
            console.log('removed');
        });
    });
    //////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////BD////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    console.log("BD");

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
            participants.push(values[1]);
            id.push(values[0]);
            names.push(values[1]);
            belt.push(values[2]);
            age.push(values[3]);
            height.push(values[4]);
            gender.push(values[5]);
        }       

        ////////////////////////////////////////////////////////////////////////////
        //////////////////////Checar participantes///////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////
        console.log("Realiza los calculos");
       checkParticipants();
        ////////////////////////////////////////////////////////////////////////////
        ////////////////////////Obtener pesos///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////
        console.log("Calcular valores 🙈");
        //Aqui se envian los datos a una funcion para que los almacene en otros vectores
        //Ya que si se hace con los vectores originales no sale bien
        for (var  t = 0; t< names.length; t++){
            //console.log(names[t], gender[t], age[t], height[t], belt[t]);
            sendValues(names[t], gender[t], age[t], height[t], belt[t]);
        }
        //Por ultimo llamamos a esta funcion para que de estos nuevos vectores los envie a la funcion que 
        //calcule los valores
        calculateHeights();
        //Value for used in the perceptron method



    });
    //////////////////////////////////////////////////////////////////////////
    //////////////////////Percetron///////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    perceptronMethod();
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
        $ul.append($('<li class="winner"> <div style="margin-top: 0px; font-size: 13px; color:red"> <b>' + $(this).text() + " </b></div></li > "));

        $ul.find("button").each(function () {
            var puntos = prompt("Ingrese el puntaje de " + $(this).text(), "3");

            if (puntos == null || puntos == "") {
                console.log("Cancelado");

            } else {
                console.log("Puntaje de " + $(this).text() + ": " + puntos);
            }

            var amonestacion = prompt("Ingrese las amonestaciones de " + $(this).text(), "3");

            if (amonestacion == null || amonestacion == "") {
                console.log("Cancelado");
            } else {
                console.log("Amonestaciones de " + $(this).text() + ": " + amonestacion);
            }

            $(this).replaceWith($('<div style="margin-top: 0px;font-size: 13px">' + $(this).text() + "</div>"));
        });
        changeToButtons();

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
    console.log("Enviando ganadores para que sean anunciados");
    console.log(colaGanadores);
    soundWon(colaGanadores);

}

function soundWon(resultadoName) {
    saveWon();
    //var categoriaTorneo = "A continuación nombraremos los ganadores de la categoría: "; //Agregar categoria
    var primer = "El ganador del primer lugar es: " + resultadoName[0] + ". Felicitaciones.";
    var segundo = "El ganador del segundo lugar es: " + resultadoName[1] + ". Felicitaciones.";
    var tercer = "El ganador del tercer lugar es: : " + resultadoName[2] + ". Felicitaciones.";
    var tercer2 = "El ganador del tercer lugar es: : " + resultadoName[3] + ". Felicitaciones.";

    // responsiveVoice.speak(categoriaTorneo, "Spanish Female");
    // text = encodeURIComponent(categoriaTorneo);
    // var url = "http://";
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


function saveWon() {
    console.log("Guardar ganadores");
    elements = [0, 1, 2, 9, 5];
    document.location.href = "save_won.php?id_alumno=" + elements + "&puntuacion=" + elements + "&amonestaciones=" + elements + "&torneo=" + 3;
}

function getValues(idStudent, nameStudent, genderStudent, ageStudent, heightStudent, beltStudent){
    var values = [nameStudent, genderStudent, ageStudent, heightStudent, beltStudent];
            gender = values[3];
            age = values[2];
            colorBelt = values[4];
            height = values[1];
            
        scoreFinal.push(idStudent);
        scoreFinal.push(nameStudent);
        // console.log(gender, age, height, colorBelt);
        var aux;
       
        if (gender == "M") {
            gender = 1;
        } else {
            gender = 0;
        }
        //Add the value
        scoreFinal.push(gender);

        if (age >= 17) {
            age = 1;
        } else if (age == 4) {
            age = 0;
        } else {
            aux = age - 4;
            age = aux * 0.07692;
        }
        //Add the value
        scoreFinal.push(age);

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
        scoreFinal.push(colorBelt);

        if (height >= 2.00) {
            height = 1;
        } else if (height == 0.8) {
            height = 0;
        } else {
            aux = height - 0.8;
            height = (aux * 100) * 0.0083;
        }
        //Add the value
        scoreFinal.push(height);
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

function sendValues(names2, gender2, age2, height2, belt2){
    namesGet.push(names2);
    genderGet.push(gender2);
    ageGet.push(age2);
    heightGet.push(height2);
    beltGet.push(belt2);
    console.log(names2, gender2, age2, height2, belt2);
}

function calculateHeights(){
    for (var u = 0; u < namesGet.length; u++){
        getValues(id[u] ,namesGet[u], genderGet[u], ageGet[u], heightGet[u], beltGet[u]);
    }
}

function checkParticipants(){
    console.log("Comprobar si se tiene que agregar a 👻 o no");
    //Aqui se compara si un participante esta solo, en caso de que sea asi
    //Luchara contra Gasper
    if (participants.length % 2) {
        console.log("Se tiene que agregar un espacio en blanco.");
        participants.push(" ");
    } else {
        console.log("No tiene que agregar un espacio en blanco.");
        participants = names;
    }
}

function perceptronMethod(){
    
}