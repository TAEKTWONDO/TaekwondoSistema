function soundCategory(resultadoName, edad, cinta1, cinta2) {
    if (edad < 5){
        if (cinta2 != null){
            var name = "El ganador de la categoría infantil menor a 5 años es: " + resultadoName + ",cintas " + cinta1 + " y" + cinta2;
        }
        else{
            var name = "El ganador de la categoría infantil menor a 5 años es: " + resultadoName + ",cintas " + cinta1;
        }
    }
    else if (edad >= 5 && edad <= 6){
        if (cinta2 == null){
            var name = "El ganador de la categoría infantil de 5 a 6 años es: " + resultadoName + ",cintas " + cinta1 + " y" + cinta2;
        }
        else{
            var name = "El ganador de la categoría infantil de 5 a 6 años es: " + resultadoName + ",cinta " + cinta1;
        }
    }
    else if (edad >= 7 && edad <= 8){
        if (cinta2 != null){
            var name = "El ganador de la categoría infantil de 7 a 8 años es: " + resultadoName + ",cintas " + cinta1 + " y" + cinta2;
        }
        else{
            var name = "El ganador de la categoría infantil de 7 a 8 años es: " + resultadoName + ",cinta " + cinta1;
        }
    }
    else if (edad >= 9 && edad <= 10){
        if (cinta2 == null){
            var name = "El ganador de la categoría infantil de 9 a 10 años es: " + resultadoName + ",cintas " + cinta1 + " y" + cinta2;
        }
        else{
            var name = "El ganador de la categoría infantil de 9 a 10 años es: " + resultadoName + ",cinta " + cinta1;
        }
    }
    else if (edad >= 11 && edad <= 12){
        if (cinta2 != null){
            var name = "El ganador de la categoría infantil de 11 a 12 años es: " + resultadoName + ",cintas " + cinta1 + " y" + cinta2;
        }
        else{
            var name = "El ganador de la categoría infantil de 11 a 12 años es: " + resultadoName + ",cinta " + cinta1;
        }
    }
    else if (edad >= 13 && edad <= 14){
        if (cinta2 != null){
            var name = "El ganador de la categoría juvenil de 13 a 14 años es: " + resultadoName + ",cintas " + cinta1 + " y" + cinta2;
        }
        else{
            var name = "El ganador de la categoría juvenil de 13 a 14 años es: " + resultadoName + ",cinta " + cinta1;
        }
    }
    else if (edad >= 15 && edad <= 16){
        if (cinta2 != null){
            var name = "El ganador de la categoría juvenil de 15 a 16 años es: " + resultadoName + ",cintas " + cinta1 + " y" + cinta2;
        }
        else{
            var name = "El ganador de la categoría juvenil de 15 a 16 años es: " + resultadoName + ",cinta " + cinta1;
        }
    }
    else if (edad >= 17){
        if (cinta2 != null){
            var name = "El ganador de la categoría adultos mayor a 17 años es: " + resultadoName + ",cintas " + cinta1 + " y" + cinta2;
        }
        else{
            var name = "El ganador de la categoría adultos mayor a 17  años es: " + resultadoName + ",cinta " + cinta1;
        }
    }
    responsiveVoice.speak(name, "Spanish Male");
    text = encodeURIComponent(name);
    var url = "http://";
}


function soundWon(resultadoName, puesto) {
    if (puesto == 1){
        var name2 = "El ganador del primer lugar es: " + resultadoName + ". Felicitaciones";
    }
    else if (puesto == 2){
        var name2 = "El ganador del segundo lugar es: " + resultadoName + ". Felicitaciones";
    }
    else if (puesto == 3){
        var name2 = "El ganador del tercer lugar es: : " + resultadoName + ". Felicitaciones";
    }
    responsiveVoice.speak(name2, "Spanish Female");
    text = encodeURIComponent(name2);
    var url = "http://";
}