//Global values
var threshold, downZero, upZero, resultZ, erroResult;
var entriesValues = new Array;
var exitWish = new Array;
var height = new Array;

function addValues(){
    threshold = 0.5;
    downZero = -1;
    upZero = 1;
    entriesValues = [7, 3, 1];
    exitWish = 1;
    height = [5, -6, 3];
}

function perceptron(){
    addValues();
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
        wk.push( height[o] + ((threshold * errorValue) * entriesValues[o]));
    }
    console.log("New heights");
    console.table(wk);
    return wk;
}
