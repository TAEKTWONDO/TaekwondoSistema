var gender, age, height, colorBelt, score;
var entriesFinal = new Array;
var scoreFinal = new Array;

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

//Here calculate all the values from all the contestants
function getValuesLoop() {

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
    scoreFinal.push(name);

    console.log(gender, age, height, colorBelt);
    var aux;
    if (gender == "masculino") {
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
    console.log(scoreFinal);
    //Value for used in the perceptron method
    entriesFinal.push(scoreFinal);
    console.log(entriesFinal);
}


function perceptronMethod() {
    const {
        Layer,
        Network
    } = window.synaptic;

    var inputLayer = new Layer(2);
    var hiddenLayer = new Layer(3);
    var outputLayer = new Layer(1);

    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    var myNetwork = new Network({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });

    // train the network - learn XOR
    var learningRate = .3;
    for (var i = 0; i < 20000; i++) {
        // 0,0 => 0
        myNetwork.activate([0, 0]);
        myNetwork.propagate(learningRate, [0]);

        // 0,1 => 1
        myNetwork.activate([0, 1]);
        myNetwork.propagate(learningRate, [1]);

        // 1,0 => 1
        myNetwork.activate([1, 0]);
        myNetwork.propagate(learningRate, [1]);

        // 1,1 => 0
        myNetwork.activate([1, 1]);
        myNetwork.propagate(learningRate, [0]);
    }

    // test the network
    console.log("Results:")
    console.log(myNetwork.activate([0, 0])); // [0.015020775950893527]
    console.log(myNetwork.activate([0, 1])); // [0.9815816381088985]
    console.log(myNetwork.activate([1, 0])); // [0.9871822457132193]
    console.log(myNetwork.activate([1, 1])); // [0.012950087641929467]

}
