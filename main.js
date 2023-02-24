// Función para calcular el promedio de notas
const calculate = async () => {
    // Estudiantes desde el archivo JSON
    const response = await fetch('students.json');
    const students = await response.json();

    // Calificaciones a partir del formulario
    const currentStudent = {
        spanish: Number(document.querySelector("#spanish").value),
        math: Number(document.querySelector("#math").value),
        english: Number(document.querySelector("#english").value),
        history: Number(document.querySelector("#hist").value),
    };

    // Validación calificaciones numéricas
    if (Object.values(currentStudent).some(isNaN)) {
        document.querySelector("#showdata").innerHTML = "Por favor ingrese notas válidas";
        return;
    }

    // Se usa POST para agregar el estudiante actual al JSON
    await fetch('students.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentStudent)
    });
    
    // Se calcula la suma de las calificaciones del estudiante actual, y se obtiene el promedio y el porcentaje correspondientes
    const totalGrades = Object.values(currentStudent).reduce((sum, grade) => sum + Number(grade), 0);    
    const getAverageGrade = () => totalGrades / 4;
    const averageGrade = getAverageGrade();
    const percentage = (totalGrades / 400) * 100;

    // Se define un sistema de calificación con diferentes rangos y notas
    const gradingSystem = [    
        {range: [90, 100], grade: "A"},
        {range: [80, 89], grade: "B"},
        {range: [70, 79], grade: "C"},
        {range: [60, 69], grade: "D"},
        {range: [0, 59], grade: "F"},
    ];

    // Rango correspondiente al porcentaje obtenido y se obtiene la nota correspondiente
    const { grade } = gradingSystem.find(({ range }) => percentage >= range[0] && percentage <= range[1]);

    // Se determina si el estudiante aprobó o reprobó
    const status = percentage >= 60 ? "APROBADO" : "REPROBADO";

    // String con los resultados de las calificaciones del estudiante actual
    const results = `
        <p>Español: ${currentStudent.spanish}</p>
        <p>Matemáticas: ${currentStudent.math}</p>
        <p>Inglés: ${currentStudent.english}</p>
        <p>Historia: ${currentStudent.history}</p>
        <p>Promedio: ${averageGrade}</p>
        <p>Porcentaje: ${percentage}%</p>
        <p>Nota: ${grade}</p>
        <p>Estado: ${status}</p>
    `;

     // Nueva ventana
    const newWindow = window.open("", "Resultado", "width=400,height=400");

    // Resultado en la nueva ventana
    newWindow.document.write(`
        <h1>Resultado</h1>
        ${results}
        `);
};