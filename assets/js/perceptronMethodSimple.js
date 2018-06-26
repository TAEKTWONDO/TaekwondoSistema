//Global values
var threshold, downZero, upZero, resultZ = 0, erroResult, count = 1;
var entriesValues = new Array;
var exitWish = new Array;
var height = new Array;

function addValues(){
    threshold = 0.5; //Bias
    downZero = -1;
    upZero = 1;
    entriesValues = [1, 0.5382, 0.4, 0.498];
    exitWish = 0;
    height = [0, -8, 2, 4];
}

function perceptron(){
    addValues();
   do{
        resultZ = calculateZ();
        erroResult = 0;
        if (resultZ >= 0){
            errorResult = error(upZero);
        }
        else if (resultZ < 0 ){
            errorResult = error(downZero);
        }
        console.log("Error: " + errorResult);
        newHeight(errorResult);
        console.log("Interacción: " + count);
        count ++;
        console.log(resultZ <= exitWish)
    }while (resultZ <= exitWish);
}

//yd = exit wish, yob = downZero or upZero
function error(yob){
    var e = exitWish - yob;
    return e;
    console.log(e);
}

function calculateZ(){
    var result = 0;
    for (var i = 0; i <= entriesValues.length - 1; i++){
        result = result + (entriesValues[i] * height[i]);
    }
    console.log("Result: " + result);
    return result;
}

function newHeight(errorValue){
    var wk = new Array;
    for (var o = 0; o <= height.length - 1; o++){
        wk.push(height[o] + ((threshold * errorValue) * entriesValues[o]));
    }
    console.log("New heights");
    for (var r = 0; r <= height.length - 1; r++){
        if (wk[r] == height[r]){
            wk[r] ++;
        }
    }
    height = [];
    height = wk;
    console.table(height);
}
