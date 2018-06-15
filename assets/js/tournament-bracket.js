

$(document).ready(function () {
    $('#remove').on('click', function () {
        console.log('removed');
    });
});

var $tournament = $(".tournament"),
    $bracket = $('<ul class="bracket"><li></li><li></li></ul>');
var cola;
cola = new Array;
var colaGanadores;
cola = new Array;
//Solo mandar los nombres ordenados, y en base a eso, genera la gráfica segun los
//que sean


//Si es impar, agregar un espacio solo para evitar problems
var participants = [
    "Melanie Rodriguez","",
    "Daniela Pérez",
    "Karem Reyes",
    "Angelica Vazquez",
    "Veronica Arciniega",
    "Alejandra Morales",
    "Corazón Solis",
   
    
];

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
        var $winner = $(this).children(".winner");
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

function enviarGanadores(){
    console.log("Enviando ganadores para que sean anunciados");
    console.log(colaGanadores);  
    soundWon(colaGanadores);  
}

function soundWon(resultadoName) {
    //var categoriaTorneo = "A continuación nombraremos los ganadores de la categoría: "; //Agregar categoria
    var primer = "El ganador del primer lugar es: " + resultadoName[0] + ". Felicitaciones.";
    var segundo = "El ganador del segundo lugar es: " + resultadoName[1] + ". Felicitaciones.";
    var tercer = "El ganador del tercer lugar es: : " + resultadoName[2] + ". Felicitaciones.";
    var tercer2 = "El ganador del tercer lugar es: : " + resultadoName[3] + ". Felicitaciones.";
    
    // responsiveVoice.speak(categoriaTorneo, "Spanish Female");
    // text = encodeURIComponent(categoriaTorneo);
    // var url = "http://";
    responsiveVoice.speak(primer, "Spanish Female");
    text = encodeURIComponent(primer);
    var url = "http://";
    responsiveVoice.speak(segundo, "Spanish Female");
    text = encodeURIComponent(segundo);
    var url = "http://";
    responsiveVoice.speak(tercer, "Spanish Female");
    text = encodeURIComponent(tercer);
    var url = "http://";
    responsiveVoice.speak(tercer2, "Spanish Female");
    text = encodeURIComponent(tercer2);
    var url = "http://";
}
