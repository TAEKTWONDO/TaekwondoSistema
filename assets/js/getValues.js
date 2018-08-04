var gender, age, height, colorBelt;


var values = [
    "Juanita Pérez", "Femenino",
    "10",
    "1.40",
    "Verde"
];

function get_values(values) {
    for (var i = 0; i < values.length; i++) {
        if (i == 1) {
            gender = i;
        } else if (i == 2) {
            age = i;
        } else if (i == 3) {
            height = i;
        } else if (i == 4) {
            colorBelt = i;
        }
    }
    console.log(gender, age, height, colorBelt);
}
