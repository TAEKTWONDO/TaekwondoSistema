
function perceptronSynaptic (){
    //Need this constants for work
    const { Network, Trainer } = window.synaptic;
// extend the prototype chain

Perceptron.prototype = new Network();
Perceptron.prototype.constructor = Perceptron;
// Here we definete the perceptron, that values 
var myPerceptronTrainer = new Perceptron(2,3,1);
// Later pass for trainer
var myTrainer = new Trainer(myPerceptron);
myTrainer.XOR();
// We here calculate the new results
var myPerceptron = new Perceptron(2,3,1);

// Values for trained
console.log(myPerceptronTrainer.activate([0,0])); 
console.log(myPerceptronTrainer.activate([1,0])); 
console.log(myPerceptronTrainer.activate([0,1])); 
console.log(myPerceptronTrainer.activate([1,1])); 
console.log(myPerceptronTrainer.activate([0.5,0.98145])); 
console.log(myPerceptronTrainer.activate([-1,0.48925])); 
console.log(myPerceptronTrainer.activate([0.459,-1])); 
console.log(myPerceptronTrainer.activate([-1,-1])); 
console.log("///////////////////////////////////////The new values");
console.log(myPerceptron.activate([0.4568, 0.451469498, 0.5789]));
}


function Perceptron(input, hidden, output)
{
    //Need this constants for work
    const { Layer } = window.synaptic;
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

