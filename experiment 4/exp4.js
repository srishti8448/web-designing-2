function calculateResult() {

    const n = document.getElementById("subjects").value;

    let total = 0;
    let i;

    for (i = 0; i < n; i++) {
        let x = parseFloat(prompt("Enter the subject Number " + (i + 1)));
        total += x;
    }

    let avg = total / n;

    let grade;

    if (avg >= 90) {
        grade = "A+";
    }
    else if (avg >= 80) {
        grade = "A";
    }
    else if (avg >= 70) {
        grade = "B+";
    }
    else if (avg >= 60) {
        grade = "B";
    }
    else if (avg >= 50) {
        grade = "C";
    }
    else if (avg >= 40) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    let r;

    if (avg >= 40)
        r = "Pass";
    else
        r = "Fail";

    document.getElementById("result").innerHTML =
        "TOTAL MARKS: " + total +
        "<br>AVERAGE MARKS: " + avg +
        "<br>GRADE: " + grade +
        "<br>RESULT: " + r;
}