function perceptronSynaptic() {
    //Need this constants for work
    const {
        Network
    } = window.synaptic;
    // extend the prototype chain
    Perceptron.prototype = new Network();
    Perceptron.prototype.constructor = Perceptron;
    // Here we definete the perceptron, that values 
    var myPerceptron = new Perceptron(2, 3, 1);
    // Later pass for trainer
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    ///////////////////Entrenamiento/////////////////////
    // var learningRate = .3; //Bias
    // for (var i = 0; i < 90000; i++) {
    //     myPerceptron.activate([0, 0]); //Entradas
    //     myPerceptron.propagate(learningRate, [0]);
    //     //Salida deseada
    //     myPerceptron.activate([0, 1]);
    //     myPerceptron.propagate(learningRate, [1]);

    //     myPerceptron.activate([1, 0]);
    //     myPerceptron.propagate(learningRate, [1]);

    //     myPerceptron.activate([1, 1]);
    //     myPerceptron.propagate(learningRate, [0]);
    // }
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    // test the network
    myPerceptron.propagate(0.50, [0]);
    console.log(myPerceptron.activate([1, 0]));
    // console.log(myPerceptron.activate([0, 1]));
    // console.log(myPerceptron.activate([1, 0]));
    // console.log(myPerceptron.activate([1, 1]));
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
