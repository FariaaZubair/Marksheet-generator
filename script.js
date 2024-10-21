function totalMarks(math, urdu, english) {
    return math + urdu + english;
}
function percentage(total) {
    return (total / 300) * 100;
}
function grade(percentage) {
    if (percentage >= 80) return "A+";
    else if (percentage >= 70) return "A";
    else if (percentage >= 60) return "B";
    else if (percentage >= 50) return "C";
    else return "Fail";
}
function generateMarksheet() {
    const student = {
        name: document.getElementById('name').value,
        rollNo: document.getElementById('rollNo').value,
        marks: {
            math: parseInt(document.getElementById('mathMarks').value),
            urdu: parseInt(document.getElementById('urduMarks').value),
            english: parseInt(document.getElementById('englishMarks').value)
        },
        totalMarks: function () {
            return totalMarks(this.marks.math, this.marks.urdu, this.marks.english);
        },
        percentage: function () {
            return percentage(this.totalMarks());
        },
        grade: function () {
            return grade(this.percentage());
        }
    };
    document.getElementById('report-card').innerHTML = `
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>Roll No:</strong> ${student.rollNo}</p>
        <p><strong>Total Marks:</strong> ${student.totalMarks()}/300</p>
        <p><strong>Percentage:</strong> ${student.percentage().toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${student.grade()}</p>
    `;
}