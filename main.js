const calculate = () => {

    let espaniol = document.querySelector("#spanish").value;
    let mate = document.querySelector("#math").value;
    let eng = document.querySelector("#english").value;
    let history = document.querySelector("#hist").value;
    let grades = "";
    
    let totalgrades =
        parseFloat(espaniol) +
        parseFloat(mate) +
        parseFloat(eng) +
        parseFloat(history);
    
    let percentage = (totalgrades / 400) * 100;
    if (percentage <= 100 && percentage >= 90) {
        grades = "MUY BUEN DESEMPEÑO";
    } 
    else if (percentage <= 89 && percentage >= 80) {
        grades = "BUEN DESEMPEÑO";
    } 
    else if (percentage <= 79 && percentage >= 60) {
        grades = "REGULAR";
    } 
    else {
        grades = "DEFICIENTE";
    }
    
    if (espaniol == "" || mate == "" || eng == "" || history == "") {
        document.querySelector("#showdata").innerHTML = "Favor de llenar todos los campos";
    } 
    else {    
        if (percentage >= 59.9) {
        document.querySelector("#showdata").innerHTML = `El porcentaje obtenido es de ${percentage}%. Tu nota es ${grades}. Tu estatus es APROBADO.`;
        } 
        else {
        document.querySelector("#showdata").innerHTML = `El porcentaje obtenido es de ${percentage}%.
        Tu nota es ${grades}. Tu estatus es REPROBADO.`;
        }
    }
}  