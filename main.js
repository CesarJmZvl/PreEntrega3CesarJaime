var estudiantes = [['Alexa', 98], ['Daniela', 100], ['Alfredo', 95], ['Mariana', 88], ['Camila', 92]];
var califProm = 0;

for (var i=0; i < estudiantes.length; i++) {
    califProm += estudiantes[i][1];
    var avg = (califProm/estudiantes.length);
}

console.log("Calificación promedio: " + (califProm)/estudiantes.length);
alert("Calificación promedio: " + (califProm)/estudiantes.length)

if (avg < 60) {
    console.log("Nota : Deficiente");      
} 
else if (avg < 70) {
    console.log("Nota : Necesita mejorar"); 
} 
else if (avg < 80) {
    console.log("Nota : Regular"); 
}
else if (avg < 90) {
    console.log("Nota : Bueno"); 
}
else if (avg < 100) {
    console.log("Nota : Excelente"); 
}
