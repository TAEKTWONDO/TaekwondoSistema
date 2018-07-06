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

function graphic(texto) {
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
    }
    // console.log(get.categoria);
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
            //Para filtrar la informacion
            if (values[3] >= EDAD1 & values[3] <= EDAD2) {
                //participants.push(values[1]);
                id.push(values[0]);
                names.push(values[1]);
                belt.push(values[2]);
                age.push(values[3]);
                height.push(values[4]);
                gender.push(values[5]);
            }
        }
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
    //perceptronMethod();
    ////////////////////////////////////////////////////////////////////////////
    //////////////////////Checar participantes///////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    //checkParticipants();
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
    participants = participants.fill(null);

    perceptronMethod();
    //no se porque shingados con esto aparece César >:c
    //checkParticipants();

    console.log("Outside Clean up");
    console.table(participants);
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
    if (participants.length % 2) {
        participants.push(" ");
    } else {
        participants = names;
    }
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
    //Ordenamos los vectores de enor a mayor
    outputsNetwork1.sort(comparateThirdColumn);
    outputsNetwork2.sort(comparateThirdColumn);
    outputsNetwork3.sort(comparateThirdColumn);
    outputsNetwork4.sort(comparateThirdColumn);

    function comparateThirdColumn(a, b) {
        if (a[2] == b[2]) return 0;
        else return (a[2] < b[2]) ? -1 : 1;
    }
    var auxiliar, auxiliar2, calculo;
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //🙈            👽
    console.table(outputsNetwork1);
    console.table(outputsNetwork2);
    console.table(outputsNetwork3);
    console.table(outputsNetwork4);
    console.log("😛😛😛😛😛😛😛😛😛😛");
    console.log("😛😛Haciendo Match😛😛");
    console.log("😛😛😛😛😛😛😛😛😛😛");
    for (var w = 0; w <= outputsNetwork1.length - 1; w++) {
        if (w + 1 < outputsNetwork1.length) {
            auxiliar = outputsNetwork1[w];
            auxiliar2 = outputsNetwork1[w + 1];
            console.log(auxiliar[2]);
            console.log(auxiliar2[2]);
            if (auxiliar[2] == auxiliar2[2]) {
                participants.push(auxiliar[1]);
                participants.push(auxiliar2[1]);

            }
        }

    }

    console.table(participants);

    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
}