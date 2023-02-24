# ProyectoFinalJaime
<h4>Entrega final de JavaScript de CODERHOUSE.</h4>
<p>This is a JavaScript function that calculates a student's average grade, percentage, and letter grade based on their inputted grades in four subjects (Spanish, Math, English, and History).</p>
<p>The function also determines whether the student has passed or failed based on a passing grade threshold of 60%.</p>
<p>It fetches the student data from a JSON file named "students.json" using fetch and await. (stored in the students variable)</p>
<p>It retrieves the grades inputted by the user from the HTML form using querySelector and stores them in the currentStudent object, and checks if the inputted grades are valid numbers and returns an error message if any are invalid.</p>
<p>It sends a POST request to the "students.json" file with the current student's grades.</p>
<p>Then it calculates the sum of the current student's grades using the reduce method and stores the result in totalGrades. It then calculates the average grade and stores the result in averageGrade, in order to calculate the percentage by dividing totalGrades by 400 and multiplying by 100, and stores the result in percentage.</p>
<p>gradingSystem uses an array of objects, containing a grade range and a letter grade.</p>
<p>Using the find method, the code finds the object in the gradingSystem array corresponding to the percentage obtained by the current student and stores the corresponding letter grade in the grade variable.</p>
<p>It determines whether the student passed or failed by checking if their percentage is greater than or equal to 60% and stores the result in the status variable.</p>
<p>It generates a string containing the results of the student's grades, average grade, percentage, letter grade, and pass/fail status and stores it in the results variable, to open a new window using the window.open method and stores it in the newWindow variable to write the results string to the new window.</p>
