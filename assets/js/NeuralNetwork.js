function neuralNetwork() {
    // create the network
    //Need this constants for work
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

    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    ///////////////////Entrenamiento/////////////////////
    var learningRate = .3; //Bias
    for (var i = 0; i < 90000; i++) {
        myNetwork.activate([0, 0]); //Entradas
        myNetwork.propagate(learningRate, [0]);
        //Salida deseada
        myNetwork.activate([0, 1]);
        myNetwork.propagate(learningRate, [1]);

        myNetwork.activate([1, 0]);
        myNetwork.propagate(learningRate, [1]);

        myNetwork.activate([1, 1]);
        myNetwork.propagate(learningRate, [0]);
    }
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////

    // test the network
    console.log(myNetwork.activate([0, 0]));
    console.log(myNetwork.activate([0, 1]));
    console.log(myNetwork.activate([1, 0]));
    console.log(myNetwork.activate([1, 1]));
}
