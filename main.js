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

class Alumnos{
    constructor(nombre, calif, grado){
        this.nombre = nombre;
        this.calif = calif;
        this.grado = grado;
    }
}

const alumnos = []

alumnos.push (new Alumnos("Alexa", 98, 1))
alumnos.push (new Alumnos("Daniela", 100, 1))
alumnos.push (new Alumnos("Alfredo", 95, 2))
alumnos.push (new Alumnos("Mariana", 88, 1))
alumnos.push (new Alumnos("Camila", 92, 1))

console.log (alumnos)

let nuevoAlumno = 0
while (nuevoAlumno < 2) {
    let pregunta = new Alumnos(prompt("Ingresa nombre del alumno"),
                    Number(prompt("Ingresa la calificacion del alumno")),
                    Number(prompt("Ingresa el grado del alumno")))
                    alumnos.push (pregunta)
    nuevoAlumno++
}

console.log(alumnos)

function filtrarCalif(calif){
    return alumnos.filter(propiedad => propiedad.calif >= Number(calif))
}

console.log(filtrarCalif(90))