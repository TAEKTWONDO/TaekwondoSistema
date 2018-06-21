var gender, age, height, colorBelt, score;
var entriesFinal = new Array;

function get() {
    cleanAll();
    var nameGet = document.getElementsByName("name")[0].value;
    var genderGet = document.getElementsByName("gender")[0].value;
    var ageGet = document.getElementsByName("age")[0].value;
    var heightGet = document.getElementsByName("height")[0].value;
    var beltGet = document.getElementsByName("belt")[0].value;
    nameGet = nameGet.toLowerCase();
    genderGet = genderGet.toLowerCase();
    ageGet = ageGet.toLowerCase();
    heightGet = heightGet.toLowerCase();
    beltGet = beltGet.toLowerCase();
    get_values(nameGet, genderGet, ageGet, heightGet, beltGet);
}

function cleanAll() {
    gender = "";
    age = "";
    height = "";
    colorBelt = "";
    score = "";
    entriesFinal = [];
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

function get_values(name, genderStudent, ageStudent, heightStudent, belt) {
    var values = [name, genderStudent, ageStudent, heightStudent, belt];
    for (var i = 0; i < values.length; i++) {
        if (i == 1) {
            gender = values[i];
        } else if (i == 2) {
            age = values[i];
        } else if (i == 3) {
            height = values[i];
        } else if (i == 4) {
            colorBelt = values[i];
        }
    }
    console.log(gender, age, height, colorBelt);
    var aux;
    if (gender == "masculino") {
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
        case "blanca":
            colorBelt = 0;
            break;
        case "amarilla":
            colorBelt = 0.2;
            break;
        case "verde":
            colorBelt = 0.4;
            break;
        case "azul":
            colorBelt = 0.6;
            break;
        case "rojo":
            colorBelt = 0.8;
            break;
        case "negra":
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
    console.log(height);
    //Value for used in the perceptron method
    entriesFinal.push(height);
}