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
    for(var i = 0, l = GET.length; i < l; i++){
        var tmp = GET[i].split('=');
        get[tmp[0]] = unescape(decodeURI(tmp[1]));
    }
    // console.log(get.categoria);
    var EDAD1 = 0; EDAD2 = 0;
    if (get.categoria == "IM5") {EDAD1 = 0; EDAD2 = 4;}
    if (get.categoria == "I56") {EDAD1 = 5; EDAD2 = 6;}
    if (get.categoria == "I78") {EDAD1 = 7; EDAD2 = 8;}
    if (get.categoria == "I910") {EDAD1 = 9; EDAD2 = 10;}
    if (get.categoria == "I1112") {EDAD1 = 11; EDAD2 = 12;}
    if (get.categoria == "J1314") {EDAD1 = 13; EDAD2 = 14;}
    if (get.categoria == "J1516") {EDAD1 = 15; EDAD2 = 16;}
    if (get.categoria == "A17") {EDAD1 = 17; EDAD2 = 80;}
    //////////////////////////////////////////////////////////////////////////
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
            //Para filtrar la informacion
            if (values[3] >= EDAD1 & values[3] <= EDAD2){
                participants.push(values[1]);
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
        //////////////////////Checar participantes///////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////
        console.log("Realiza los calculos");
        checkParticipants();
        ////////////////////////////////////////////////////////////////////////////
        ////////////////////////Obtener pesos///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////
        console.log("Calcular valores 😛😛. (Entradas).");
        //Aqui se envian los datos a una funcion para que los almacene en otros vectores
        //Ya que si se hace con los vectores originales no sale bien
        for (var  t = 0; t< names.length; t++){
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
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////

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

function sendValues(names2, gender2, age2, height2, belt2){
    namesGet.push(names2);
    genderGet.push(gender2);
    ageGet.push(age2);
    heightGet.push(height2);
    beltGet.push(belt2);
    // console.log(names2, gender2, age2, height2, belt2);
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

function perceptronMethod(){
    console.log("🙈🙈🙈🙈🙈🙈🙈🙈🙈🙈🙈🙈🙈");
    console.log("🙈🙈Entrenando perceptron 🙈🙈");
    console.log("🙈🙈🙈🙈🙈🙈🙈🙈🙈🙈🙈🙈🙈");
    console.log("Neurona No. 1");
    //Need this constants for work
    const {
        Network
    } = window.synaptic;
    // extend the prototype chain
    Perceptron.prototype = new Network();
    Perceptron.prototype.constructor = Perceptron;
    // Here we definete the perceptron, that values 
    var myPerceptronNeuron1 = new Perceptron(4, 1, 1);
    // Later pass for trainer
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    ///////////////////Entrenamiento/////////////////////
    for (var i = 0; i < 90000; i++) {
        myPerceptronNeuron1.activate([0, 0.46132, 0, 0.3486]);     myPerceptronNeuron1.propagate(learningRate, [0.337078653]);
        myPerceptronNeuron1.activate([0, 0, 0, 0]);                myPerceptronNeuron1.propagate(learningRate, [0]);
        myPerceptronNeuron1.activate([1, 0, 0, 0]);                myPerceptronNeuron1.propagate(learningRate, [0.127689597]);
        myPerceptronNeuron1.activate([0, 0, 0, 0.0415]);           myPerceptronNeuron1.propagate(learningRate, [0]);
        myPerceptronNeuron1.activate([1, 0.1538, 0, 0]);           myPerceptronNeuron1.propagate(learningRate, [0.13483146121]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron1.activate([1, 0.61508, 0.8, 0.5976]);   myPerceptronNeuron1.propagate(learningRate, [0.58426966561]);
        myPerceptronNeuron1.activate([0, 0.30756, 0.8, 0.3735]);   myPerceptronNeuron1.propagate(learningRate, [0.24719101231]);
        myPerceptronNeuron1.activate([0, 0.38444, 0.4, 0.5395]);   myPerceptronNeuron1.propagate(learningRate, [0.35955056341]);
        myPerceptronNeuron1.activate([0, 0.30756, 0.2, 0.415]);    myPerceptronNeuron1.propagate(learningRate, [0.21348314698]);
        myPerceptronNeuron1.activate([0, 0.46132, 0.2, 0.5395]);   myPerceptronNeuron1.propagate(learningRate, [0.348314083]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron1.activate([1, 0.38444, 0.2, 0.415]);    myPerceptronNeuron1.propagate(learningRate, [0.41573033896]);
        myPerceptronNeuron1.activate([1, 0.61508, 0, 0.5395]);     myPerceptronNeuron1.propagate(learningRate, [0.53932584517]);
        myPerceptronNeuron1.activate([1, 0.61508, 0, 0.581]);      myPerceptronNeuron1.propagate(learningRate, [0.53932584517]);
        myPerceptronNeuron1.activate([1, 0.61508, 0, 0.581]);      myPerceptronNeuron1.propagate(learningRate, [0.53932584517]);
        myPerceptronNeuron1.activate([1, 0.61508, 0, 0.7221]);     myPerceptronNeuron1.propagate(learningRate, [0.53932584517]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron1.activate([0, 0.9226, 0.6, 0.747]);     myPerceptronNeuron1.propagate(learningRate, [0.77528090248]);
        myPerceptronNeuron1.activate([1, 0.46132, 0.6, 0.4565]);   myPerceptronNeuron1.propagate(learningRate, [0.43820224918]);
        myPerceptronNeuron1.activate([0, 0.84572, 0.2, 0.581]);    myPerceptronNeuron1.propagate(learningRate, [0.75280899226]);
        myPerceptronNeuron1.activate([0, 0.30756, 0.8, 0.332]);    myPerceptronNeuron1.propagate(learningRate, [0.24719101231]);
        myPerceptronNeuron1.activate([1, 0.23068, 0.8, 0.166]);    myPerceptronNeuron1.propagate(learningRate, [0.31460674297]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron1.activate([1, 0.46132, 0, 0.3735]);     myPerceptronNeuron1.propagate(learningRate, [0.40449438385]);
        myPerceptronNeuron1.activate([1, 0.23068, 0, 0.083]);      myPerceptronNeuron1.propagate(learningRate, [0.26966292253]);
        myPerceptronNeuron1.activate([0, 1, 1, 0.7055]);           myPerceptronNeuron1.propagate(learningRate, [0.93258427402]);
        myPerceptronNeuron1.activate([0, 1, 1, 0.7055]);           myPerceptronNeuron1.propagate(learningRate, [0.93258427402]);
        myPerceptronNeuron1.activate([0, 1, 0.6, 0.664]);          myPerceptronNeuron1.propagate(learningRate, [0.97752809446]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron1.activate([1, 0.5382, 0.4, 0.498]);     myPerceptronNeuron1.propagate(learningRate, [0.56179775539]);
        
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    console.log("Neurona No. 2");
    var myPerceptronNeuron2 = new Perceptron(4, 1, 1);
    // Later pass for trainer
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    ///////////////////Entrenamiento/////////////////////
    for (var i = 0; i < 90000; i++) {
        myPerceptronNeuron2.activate([0, 0.46132, 0, 0.3486]);     myPerceptronNeuron2.propagate(learningRate, [0.2553192054]);
        myPerceptronNeuron2.activate([0, 0, 0, 0]);                
        myPerceptronNeuron2.activate([1, 0, 0, 0]);                
        myPerceptronNeuron2.activate([0, 0, 0, 0.0415]);           
        myPerceptronNeuron2.activate([1, 0.1538, 0, 0]);           myPerceptronNeuron2.propagate(learningRate, [0.127659597]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron2.activate([1, 0.61508, 0.8, 0.5976]);   myPerceptronNeuron2.propagate(learningRate, [0.7234044362]);
        myPerceptronNeuron2.activate([0, 0.30756, 0.8, 0.3735]);   myPerceptronNeuron2.propagate(learningRate, [0.340425611]);
        myPerceptronNeuron2.activate([0, 0.38444, 0.4, 0.5395]);   myPerceptronNeuron2.propagate(learningRate, [0.2978724082]);
        myPerceptronNeuron2.activate([0, 0.30756, 0.2, 0.415]);    myPerceptronNeuron2.propagate(learningRate, [0.2765958068]);
        myPerceptronNeuron2.activate([0, 0.46132, 0.2, 0.5395]);   myPerceptronNeuron2.propagate(learningRate, [0.2765958068]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron2.activate([1, 0.38444, 0.2, 0.415]);    myPerceptronNeuron2.propagate(learningRate, [0.4042554152]);
        myPerceptronNeuron2.activate([1, 0.61508, 0, 0.5395]);     myPerceptronNeuron2.propagate(learningRate, [0.6382980306]);
        myPerceptronNeuron2.activate([1, 0.61508, 0, 0.581]);      myPerceptronNeuron2.propagate(learningRate, [0.6382980306]);
        myPerceptronNeuron2.activate([1, 0.61508, 0, 0.581]);      myPerceptronNeuron2.propagate(learningRate, [0.6382980306]);
        myPerceptronNeuron2.activate([1, 0.61508, 0, 0.7221]);     myPerceptronNeuron2.propagate(learningRate, [0.6382980306]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron2.activate([0, 0.9226, 0.6, 0.747]);     myPerceptronNeuron2.propagate(learningRate, [0.8297874432]);
        myPerceptronNeuron2.activate([1, 0.46132, 0.6, 0.4565]);   myPerceptronNeuron2.propagate(learningRate, [0.7021278348]);
        myPerceptronNeuron2.activate([0, 0.84572, 0.2, 0.581]);    myPerceptronNeuron2.propagate(learningRate, [0.7872342404]);
        myPerceptronNeuron2.activate([0, 0.30756, 0.8, 0.332]);    myPerceptronNeuron2.propagate(learningRate, [0.340425611]);
        myPerceptronNeuron2.activate([1, 0.23068, 0.8, 0.166]);    myPerceptronNeuron2.propagate(learningRate, [0.4680852194]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron2.activate([1, 0.46132, 0, 0.3735]);     myPerceptronNeuron2.propagate(learningRate, [0.3829788138]);
        myPerceptronNeuron2.activate([1, 0.23068, 0, 0.083]);      myPerceptronNeuron2.propagate(learningRate, [0.127659597]);
        myPerceptronNeuron2.activate([0, 1, 1, 0.7055]);           
        myPerceptronNeuron2.activate([0, 1, 1, 0.7055]);           
        myPerceptronNeuron2.activate([0, 1, 0.6, 0.664]);          
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron2.activate([1, 0.5382, 0.4, 0.498]);     myPerceptronNeuron2.propagate(learningRate, [0.6808512334]);
        
    }

    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    console.log("Neurona No. 3");
    var myPerceptronNeuron3 = new Perceptron(4, 1, 1);
    // Later pass for trainer
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    ///////////////////Entrenamiento/////////////////////
    for (var i = 0; i < 90000; i++) {
        myPerceptronNeuron3.activate([0, 0.46132, 0, 0.3486]);     myPerceptronNeuron3.propagate(learningRate, [0.3255814]);
        myPerceptronNeuron3.activate([0, 0, 0, 0]);                myPerceptronNeuron3.propagate(learningRate, [0]);
        myPerceptronNeuron3.activate([1, 0, 0, 0]);                myPerceptronNeuron3.propagate(learningRate, [0]);
        myPerceptronNeuron3.activate([0, 0, 0, 0.0415]);           myPerceptronNeuron3.propagate(learningRate, [0]);
        myPerceptronNeuron3.activate([1, 0.1538, 0, 0]);           myPerceptronNeuron3.propagate(learningRate, [0.1162790699]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron3.activate([1, 0.61508, 0.8, 0.5976]);   myPerceptronNeuron3.propagate(learningRate, [0.5813953499]);
        myPerceptronNeuron3.activate([0, 0.30756, 0.8, 0.3735]);   myPerceptronNeuron3.propagate(learningRate, [0.2325581399]);
        myPerceptronNeuron3.activate([0, 0.38444, 0.4, 0.5395]);   myPerceptronNeuron3.propagate(learningRate, [0.3488372099]);
        myPerceptronNeuron3.activate([0, 0.30756, 0.2, 0.415]);    myPerceptronNeuron3.propagate(learningRate, [0.1860465119]);
        myPerceptronNeuron3.activate([0, 0.46132, 0.2, 0.5395]);   myPerceptronNeuron3.propagate(learningRate, [0.3255813959]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron3.activate([1, 0.38444, 0.2, 0.415]);    myPerceptronNeuron3.propagate(learningRate, [0.3953488379]);
        myPerceptronNeuron3.activate([1, 0.61508, 0, 0.5395]);     myPerceptronNeuron3.propagate(learningRate, [0.5348837219]);
        myPerceptronNeuron3.activate([1, 0.61508, 0, 0.581]);      myPerceptronNeuron3.propagate(learningRate, [0.5348837219]);
        myPerceptronNeuron3.activate([1, 0.61508, 0, 0.581]);      myPerceptronNeuron3.propagate(learningRate, [0.5348837219]);
        myPerceptronNeuron3.activate([1, 0.61508, 0, 0.7221]);     myPerceptronNeuron3.propagate(learningRate, [0.5348837219]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron3.activate([0, 0.9226, 0.6, 0.747]);     myPerceptronNeuron3.propagate(learningRate, [0.7674418619]);
        myPerceptronNeuron3.activate([1, 0.46132, 0.6, 0.4565]);   myPerceptronNeuron3.propagate(learningRate, [0.3488372099]);
        myPerceptronNeuron3.activate([0, 0.84572, 0.2, 0.581]);    myPerceptronNeuron3.propagate(learningRate, [0.7441860479]);
        myPerceptronNeuron3.activate([0, 0.30756, 0.8, 0.332]);    myPerceptronNeuron3.propagate(learningRate, [0.2325581399]);
        myPerceptronNeuron3.activate([1, 0.23068, 0.8, 0.166]);    myPerceptronNeuron3.propagate(learningRate, [0.3023255819]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron3.activate([1, 0.46132, 0, 0.3735]);     myPerceptronNeuron3.propagate(learningRate, [0.3953488379]);
        myPerceptronNeuron3.activate([1, 0.23068, 0, 0.083]);      myPerceptronNeuron3.propagate(learningRate, [0.2558139539]);
        myPerceptronNeuron3.activate([0, 1, 1, 0.7055]);           myPerceptronNeuron3.propagate(learningRate, [1]);
        myPerceptronNeuron3.activate([0, 1, 1, 0.7055]);           myPerceptronNeuron3.propagate(learningRate, [1]);
        myPerceptronNeuron3.activate([0, 1, 0.6, 0.664]);          myPerceptronNeuron3.propagate(learningRate, [0.9069767459]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron3.activate([1, 0.5382, 0.4, 0.498]);     myPerceptronNeuron3.propagate(learningRate, [0.5581395359]);
        
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    console.log("Neurona No. 4");
    var myPerceptronNeuron4 = new Perceptron(4, 1, 1);
    // Later pass for trainer
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    ///////////////////Entrenamiento/////////////////////
    for (var i = 0; i < 90000; i++) {
        myPerceptronNeuron4.activate([0, 0.46132, 0, 0.3486]);     myPerceptronNeuron4.propagate(learningRate, [0.3409090849]);
        myPerceptronNeuron4.activate([0, 0, 0, 0]);                myPerceptronNeuron4.propagate(learningRate, [0]);
        myPerceptronNeuron4.activate([1, 0, 0, 0]);                myPerceptronNeuron4.propagate(learningRate, [0]);
        myPerceptronNeuron4.activate([0, 0, 0, 0.0415]);           myPerceptronNeuron4.propagate(learningRate, [0]);
        myPerceptronNeuron4.activate([1, 0.1538, 0, 0]);           myPerceptronNeuron4.propagate(learningRate, [0.0681818173]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron4.activate([1, 0.61508, 0.8, 0.5976]);   myPerceptronNeuron4.propagate(learningRate, [0.5681818079]);
        myPerceptronNeuron4.activate([0, 0.30756, 0.8, 0.3735]);   myPerceptronNeuron4.propagate(learningRate, [0.2954545403]);
        myPerceptronNeuron4.activate([0, 0.38444, 0.4, 0.5395]);   myPerceptronNeuron4.propagate(learningRate, [0.3863636295]);
        myPerceptronNeuron4.activate([0, 0.30756, 0.2, 0.415]);    myPerceptronNeuron4.propagate(learningRate, [0.2272727234]);
        myPerceptronNeuron4.activate([0, 0.46132, 0.2, 0.5395]);   myPerceptronNeuron4.propagate(learningRate, [0.3636363572]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron4.activate([1, 0.38444, 0.2, 0.415]);    myPerceptronNeuron4.propagate(learningRate, [0.3636363572]);
        myPerceptronNeuron4.activate([1, 0.61508, 0, 0.5395]);     myPerceptronNeuron4.propagate(learningRate, [0.4772727187]);
        myPerceptronNeuron4.activate([1, 0.61508, 0, 0.581]);      myPerceptronNeuron4.propagate(learningRate, [0.4772727187]);
        myPerceptronNeuron4.activate([1, 0.61508, 0, 0.581]);      myPerceptronNeuron4.propagate(learningRate, [0.4772727187]);
        myPerceptronNeuron4.activate([1, 0.61508, 0, 0.7221]);     myPerceptronNeuron4.propagate(learningRate, [0.4772727187]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron4.activate([0, 0.9226, 0.6, 0.747]);     myPerceptronNeuron4.propagate(learningRate, [0.8181818032]);
        myPerceptronNeuron4.activate([1, 0.46132, 0.6, 0.4565]);   myPerceptronNeuron4.propagate(learningRate, [0.4090909018]);
        myPerceptronNeuron4.activate([0, 0.84572, 0.2, 0.581]);    myPerceptronNeuron4.propagate(learningRate, [0.7727272586]);
        myPerceptronNeuron4.activate([0, 0.30756, 0.8, 0.332]);    myPerceptronNeuron4.propagate(learningRate, [0.2954545403]);
        myPerceptronNeuron4.activate([1, 0.23068, 0.8, 0.166]);    myPerceptronNeuron4.propagate(learningRate, [0.2954545403]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron4.activate([1, 0.46132, 0, 0.3735]);     myPerceptronNeuron4.propagate(learningRate, [0.3409090849]);
        myPerceptronNeuron4.activate([1, 0.23068, 0, 0.083]);      myPerceptronNeuron4.propagate(learningRate, [0.2045454511]);
        myPerceptronNeuron4.activate([0, 1, 1, 0.7055]);           myPerceptronNeuron4.propagate(learningRate, [1]);
        myPerceptronNeuron4.activate([0, 1, 1, 0.7055]);           myPerceptronNeuron4.propagate(learningRate, [1]);
        myPerceptronNeuron4.activate([0, 1, 0.6, 0.664]);          myPerceptronNeuron4.propagate(learningRate, [0.954545437]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron4.activate([1, 0.5382, 0.4, 0.498]);     myPerceptronNeuron4.propagate(learningRate, [0.5227272633]);
        
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    console.log("Neurona No. 5");
    var myPerceptronNeuron5 = new Perceptron(4, 1, 1);
    // Later pass for trainer
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    ///////////////////Entrenamiento/////////////////////
    for (var i = 0; i < 90000; i++) {
        myPerceptronNeuron5.activate([0, 0.46132, 0, 0.3486]);     myPerceptronNeuron5.propagate(learningRate, [0.29166668]);
        myPerceptronNeuron5.activate([0, 0, 0, 0]);                myPerceptronNeuron5.propagate(learningRate, [0]);
        myPerceptronNeuron5.activate([1, 0, 0, 0]);                myPerceptronNeuron5.propagate(learningRate, [0]);
        myPerceptronNeuron5.activate([0, 0, 0, 0.0415]);           myPerceptronNeuron5.propagate(learningRate, [0]);
        myPerceptronNeuron5.activate([1, 0.1538, 0, 0]);           myPerceptronNeuron5.propagate(learningRate, [0.04166666]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron5.activate([1, 0.61508, 0.8, 0.5976]);   myPerceptronNeuron5.propagate(learningRate, [0.500000003]);
        myPerceptronNeuron5.activate([0, 0.30756, 0.8, 0.3735]);   myPerceptronNeuron5.propagate(learningRate, [0.250000001]);
        myPerceptronNeuron5.activate([0, 0.38444, 0.4, 0.5395]);   myPerceptronNeuron5.propagate(learningRate, [0.33333335]);
        myPerceptronNeuron5.activate([0, 0.30756, 0.2, 0.415]);    myPerceptronNeuron5.propagate(learningRate, [0.16666667]);
        myPerceptronNeuron5.activate([0, 0.46132, 0.2, 0.5395]);   myPerceptronNeuron5.propagate(learningRate, [0.29166668]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron5.activate([1, 0.38444, 0.2, 0.415]);    myPerceptronNeuron5.propagate(learningRate, [0.29166668]);
        myPerceptronNeuron5.activate([1, 0.61508, 0, 0.5395]);     myPerceptronNeuron5.propagate(learningRate, [0.41666669]);
        myPerceptronNeuron5.activate([1, 0.61508, 0, 0.581]);      myPerceptronNeuron5.propagate(learningRate, [0.41666669]);
        myPerceptronNeuron5.activate([1, 0.61508, 0, 0.581]);      myPerceptronNeuron5.propagate(learningRate, [0.41666669]);
        myPerceptronNeuron5.activate([1, 0.61508, 0, 0.7221]);     myPerceptronNeuron5.propagate(learningRate, [0.41666669]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron5.activate([0, 0.9226, 0.6, 0.747]);     myPerceptronNeuron5.propagate(learningRate, [0.70833338]);
        myPerceptronNeuron5.activate([1, 0.46132, 0.6, 0.4565]);   myPerceptronNeuron5.propagate(learningRate, [0.33333335]);
        myPerceptronNeuron5.activate([0, 0.84572, 0.2, 0.581]);    myPerceptronNeuron5.propagate(learningRate, [0.79166672]);
        myPerceptronNeuron5.activate([0, 0.30756, 0.8, 0.332]);    myPerceptronNeuron5.propagate(learningRate, [0.25000001]);
        myPerceptronNeuron5.activate([1, 0.23068, 0.8, 0.166]);    myPerceptronNeuron5.propagate(learningRate, [0.25000001]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron5.activate([1, 0.46132, 0, 0.3735]);     myPerceptronNeuron5.propagate(learningRate, [0.29166668]);
        myPerceptronNeuron5.activate([1, 0.23068, 0, 0.083]);      myPerceptronNeuron5.propagate(learningRate, [0.16666667]);
        myPerceptronNeuron5.activate([0, 1, 1, 0.7055]);           myPerceptronNeuron5.propagate(learningRate, [1]);
        myPerceptronNeuron5.activate([0, 1, 1, 0.7055]);           myPerceptronNeuron5.propagate(learningRate, [1]);
        myPerceptronNeuron5.activate([0, 1, 0.6, 0.664]);          myPerceptronNeuron5.propagate(learningRate, [0.9583334]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron5.activate([1, 0.5382, 0.4, 0.498]);     myPerceptronNeuron5.propagate(learningRate, [0.45833336]);
        
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    console.log("Neurona No. 6");
    var myPerceptronNeuron6 = new Perceptron(4, 1, 1);
    // Later pass for trainer
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    ///////////////////Entrenamiento/////////////////////
    for (var i = 0; i < 90000; i++) {
        myPerceptronNeuron6.activate([0, 0.46132, 0, 0.3486]);     myPerceptronNeuron6.propagate(learningRate, [0.260869565]);
        myPerceptronNeuron6.activate([0, 0, 0, 0]);                
        myPerceptronNeuron6.activate([1, 0, 0, 0]);                
        myPerceptronNeuron6.activate([0, 0, 0, 0.0415]);           
        myPerceptronNeuron6.activate([1, 0.1538, 0, 0]);           myPerceptronNeuron6.propagate(learningRate, [0]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron6.activate([1, 0.61508, 0.8, 0.5976]);   myPerceptronNeuron6.propagate(learningRate, [0.695652175]);
        myPerceptronNeuron6.activate([0, 0.30756, 0.8, 0.3735]);   myPerceptronNeuron6.propagate(learningRate, [0.434782609]);
        myPerceptronNeuron6.activate([0, 0.38444, 0.4, 0.5395]);   myPerceptronNeuron6.propagate(learningRate, [0.347826087]);
        myPerceptronNeuron6.activate([0, 0.30756, 0.2, 0.415]);    myPerceptronNeuron6.propagate(learningRate, [0.304347826]);
        myPerceptronNeuron6.activate([0, 0.46132, 0.2, 0.5395]);   myPerceptronNeuron6.propagate(learningRate, [0.304347826]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron6.activate([1, 0.38444, 0.2, 0.415]);    myPerceptronNeuron6.propagate(learningRate, [0.304347826]);
        myPerceptronNeuron6.activate([1, 0.61508, 0, 0.5395]);     myPerceptronNeuron6.propagate(learningRate, [0.521739131]);
        myPerceptronNeuron6.activate([1, 0.61508, 0, 0.581]);      myPerceptronNeuron6.propagate(learningRate, [0.521739131]);
        myPerceptronNeuron6.activate([1, 0.61508, 0, 0.581]);      myPerceptronNeuron6.propagate(learningRate, [0.521739131]);
        myPerceptronNeuron6.activate([1, 0.61508, 0, 0.7221]);     myPerceptronNeuron6.propagate(learningRate, [0.521739131]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron6.activate([0, 0.9226, 0.6, 0.747]);     myPerceptronNeuron6.propagate(learningRate, [0.91304348]);
        myPerceptronNeuron6.activate([1, 0.46132, 0.6, 0.4565]);   myPerceptronNeuron6.propagate(learningRate, [0.652173914]);
        myPerceptronNeuron6.activate([0, 0.84572, 0.2, 0.581]);    myPerceptronNeuron6.propagate(learningRate, [0.826086958]);
        myPerceptronNeuron6.activate([0, 0.30756, 0.8, 0.332]);    myPerceptronNeuron6.propagate(learningRate, [0.434782609]);
        myPerceptronNeuron6.activate([1, 0.23068, 0.8, 0.166]);    myPerceptronNeuron6.propagate(learningRate, [0.434782609]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron6.activate([1, 0.46132, 0, 0.3735]);     myPerceptronNeuron6.propagate(learningRate, [0.260869565]);
        myPerceptronNeuron6.activate([1, 0.23068, 0, 0.083]);      myPerceptronNeuron6.propagate(learningRate, [0]);
        myPerceptronNeuron6.activate([0, 1, 1, 0.7055]);           
        myPerceptronNeuron6.activate([0, 1, 1, 0.7055]);           
        myPerceptronNeuron6.activate([0, 1, 0.6, 0.664]);          
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron6.activate([1, 0.5382, 0.4, 0.498]);     myPerceptronNeuron6.propagate(learningRate, [0.608695653]);
        
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    console.log("Neurona No. 7");
    var myPerceptronNeuron7 = new Perceptron(4, 1, 1);
    // Later pass for trainer
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    ///////////////////Entrenamiento/////////////////////
    for (var i = 0; i < 90000; i++) {
        myPerceptronNeuron7.activate([0, 0.46132, 0, 0.3486]);     myPerceptronNeuron7.propagate(learningRate, [0.29166665]);
        myPerceptronNeuron7.activate([0, 0, 0, 0]);                myPerceptronNeuron7.propagate(learningRate, [0]);
        myPerceptronNeuron7.activate([1, 0, 0, 0]);                myPerceptronNeuron7.propagate(learningRate, [0]);
        myPerceptronNeuron7.activate([0, 0, 0, 0.0415]);           myPerceptronNeuron7.propagate(learningRate, [0]);
        myPerceptronNeuron7.activate([1, 0.1538, 0, 0]);           myPerceptronNeuron7.propagate(learningRate, [0.041666666]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron7.activate([1, 0.61508, 0.8, 0.5976]);   myPerceptronNeuron7.propagate(learningRate, [0.49999997]);
        myPerceptronNeuron7.activate([0, 0.30756, 0.8, 0.3735]);   myPerceptronNeuron7.propagate(learningRate, [0.249999986]);
        myPerceptronNeuron7.activate([0, 0.38444, 0.4, 0.5395]);   myPerceptronNeuron7.propagate(learningRate, [0.333333314]);
        myPerceptronNeuron7.activate([0, 0.30756, 0.2, 0.415]);    myPerceptronNeuron7.propagate(learningRate, [0.166666658]);
        myPerceptronNeuron7.activate([0, 0.46132, 0.2, 0.5395]);   myPerceptronNeuron7.propagate(learningRate, [0.29166665]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron7.activate([1, 0.38444, 0.2, 0.415]);    myPerceptronNeuron7.propagate(learningRate, [0.29166665]);
        myPerceptronNeuron7.activate([1, 0.61508, 0, 0.5395]);     myPerceptronNeuron7.propagate(learningRate, [0.416666642]);
        myPerceptronNeuron7.activate([1, 0.61508, 0, 0.581]);      myPerceptronNeuron7.propagate(learningRate, [0.416666642]);
        myPerceptronNeuron7.activate([1, 0.61508, 0, 0.581]);      myPerceptronNeuron7.propagate(learningRate, [0.416666642]);
        myPerceptronNeuron7.activate([1, 0.61508, 0, 0.7221]);     myPerceptronNeuron7.propagate(learningRate, [0.416666642]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron7.activate([0, 0.9226, 0.6, 0.747]);     myPerceptronNeuron7.propagate(learningRate, [0.833333282]);
        myPerceptronNeuron7.activate([1, 0.46132, 0.6, 0.4565]);   myPerceptronNeuron7.propagate(learningRate, [0.333333314]);
        myPerceptronNeuron7.activate([0, 0.84572, 0.2, 0.581]);    myPerceptronNeuron7.propagate(learningRate, [0.666666626]);
        myPerceptronNeuron7.activate([0, 0.30756, 0.8, 0.332]);    myPerceptronNeuron7.propagate(learningRate, [0.249999986]);
        myPerceptronNeuron7.activate([1, 0.23068, 0.8, 0.166]);    myPerceptronNeuron7.propagate(learningRate, [0.249999986]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron7.activate([1, 0.46132, 0, 0.3735]);     myPerceptronNeuron7.propagate(learningRate, [0.29166665]);
        myPerceptronNeuron7.activate([1, 0.23068, 0, 0.083]);      myPerceptronNeuron7.propagate(learningRate, [0.166666658]);
        myPerceptronNeuron7.activate([0, 1, 1, 0.7055]);           myPerceptronNeuron7.propagate(learningRate, [1]);
        myPerceptronNeuron7.activate([0, 1, 1, 0.7055]);           myPerceptronNeuron7.propagate(learningRate, [1]);
        myPerceptronNeuron7.activate([0, 1, 0.6, 0.664]);          myPerceptronNeuron7.propagate(learningRate, [0.958333274]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron7.activate([1, 0.5382, 0.4, 0.498]);     myPerceptronNeuron7.propagate(learningRate, [0.458333306]);
        
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    console.log("Neurona No. 8");
    var myPerceptronNeuron8 = new Perceptron(4, 1, 1);
    // Later pass for trainer
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    ///////////////////Entrenamiento/////////////////////
    for (var i = 0; i < 90000; i++) {
        myPerceptronNeuron8.activate([0, 0.46132, 0, 0.3486]);     myPerceptronNeuron8.propagate(learningRate, [0.2727272727]);
        myPerceptronNeuron8.activate([0, 0, 0, 0]);                
        myPerceptronNeuron8.activate([1, 0, 0, 0]);                
        myPerceptronNeuron8.activate([0, 0, 0, 0.0415]);           
        myPerceptronNeuron8.activate([1, 0.1538, 0, 0]);           myPerceptronNeuron8.propagate(learningRate, [0]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron8.activate([1, 0.61508, 0.8, 0.5976]);   myPerceptronNeuron8.propagate(learningRate, [0.7272727272]);
        myPerceptronNeuron8.activate([0, 0.30756, 0.8, 0.3735]);   myPerceptronNeuron8.propagate(learningRate, [0.4545454545]);
        myPerceptronNeuron8.activate([0, 0.38444, 0.4, 0.5395]);   myPerceptronNeuron8.propagate(learningRate, [0.3636363636]);
        myPerceptronNeuron8.activate([0, 0.30756, 0.2, 0.415]);    myPerceptronNeuron8.propagate(learningRate, [0.2727272727]);
        myPerceptronNeuron8.activate([0, 0.46132, 0.2, 0.5395]);   myPerceptronNeuron8.propagate(learningRate, [0.2727272727]);
        //////////////////8///////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron8.activate([1, 0.38444, 0.2, 0.415]);    myPerceptronNeuron8.propagate(learningRate, [0.2727272727]);
        myPerceptronNeuron8.activate([1, 0.61508, 0, 0.5395]);     myPerceptronNeuron8.propagate(learningRate, [0.5454545454]);
        myPerceptronNeuron8.activate([1, 0.61508, 0, 0.581]);      myPerceptronNeuron8.propagate(learningRate, [0.5454545454]);
        myPerceptronNeuron8.activate([1, 0.61508, 0, 0.581]);      myPerceptronNeuron8.propagate(learningRate, [0.5454545454]);
        myPerceptronNeuron8.activate([1, 0.61508, 0, 0.7221]);     myPerceptronNeuron8.propagate(learningRate, [0.5454545454]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron8.activate([0, 0.9226, 0.6, 0.747]);     myPerceptronNeuron8.propagate(learningRate, [0.909090909]);
        myPerceptronNeuron8.activate([1, 0.46132, 0.6, 0.4565]);   myPerceptronNeuron8.propagate(learningRate, [0.3636363636]);
        myPerceptronNeuron8.activate([0, 0.84572, 0.2, 0.581]);    myPerceptronNeuron8.propagate(learningRate, [0.8181818181]);
        myPerceptronNeuron8.activate([0, 0.30756, 0.8, 0.332]);    myPerceptronNeuron8.propagate(learningRate, [0.4545454545]);
        myPerceptronNeuron8.activate([1, 0.23068, 0.8, 0.166]);    myPerceptronNeuron8.propagate(learningRate, [0.4545454545]);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron8.activate([1, 0.46132, 0, 0.3735]);     myPerceptronNeuron8.propagate(learningRate, [0.2727272727]);
        myPerceptronNeuron8.activate([1, 0.23068, 0, 0.083]);      myPerceptronNeuron8.propagate(learningRate, [0]);
        myPerceptronNeuron8.activate([0, 1, 1, 0.7055]);           
        myPerceptronNeuron8.activate([0, 1, 1, 0.7055]);           
        myPerceptronNeuron8.activate([0, 1, 0.6, 0.664]);         
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        myPerceptronNeuron8.activate([1, 0.5382, 0.4, 0.498]);     myPerceptronNeuron8.propagate(learningRate, [0.3636363636]);
        
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    // console.log(myPerceptronNeuron1.activate([0, 0.462, 0, 0.3486]));
    // console.log(myPerceptronNeuron2.activate([0, 0.462, 0, 0.3486]));
    // console.log(myPerceptronNeuron3.activate([0, 0.462, 0, 0.3486]));
    // console.log(myPerceptronNeuron4.activate([0, 0.462, 0, 0.3486]));
    // console.log(myPerceptronNeuron5.activate([0, 0.462, 0, 0.3486]));
    // console.log(myPerceptronNeuron6.activate([0, 0.462, 0, 0.3486]));
    // console.log(myPerceptronNeuron7.activate([0, 0.462, 0, 0.3486]));
    // console.log(myPerceptronNeuron8.activate([0, 0.462, 0, 0.3486]));
    console.log("🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢");
    console.log("🐢Calculando datos en base a las entradas🐢");
    console.log("🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢");
    console.log("👽👽👽👽👽👽👽👽👽");
    console.log("👽👽Resultados👽👽");
    console.log("👽👽👽👽👽👽👽👽👽");
    for (var w = 0; w <= nameScoreFinal.length - 1; w++){
        console.log(myPerceptronNeuron1.activate([genderScoreFinal[w], ageScoreFinal[w], heightScoreFinal[w], beltScoreFinal[w]]));
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
}
