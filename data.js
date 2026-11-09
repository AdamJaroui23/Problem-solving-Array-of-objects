const students = [
    {
        id: 1,
        name: "Amine",
        field: "Development",
        grades: [15, 12, 18]
    },
    {
        id: 2,
        name: "Sara",
        field: "Design",
        grades: [17, 16, 14]
    },
    {
        id: 3,
        name: "Yassine",
        field: "Development",
        grades: [8, 10, 9]
    },
    {
        id: 4,
        name: "Meriem",
        field: "Marketing",
        grades: [14, 19, 16]
    },
    {
        id: 5,
        name: "Omar",
        field: "Development",
        grades: [11, 13, 15]
    }
];

const prompt = require('prompt-sync')();

function calculateAverage(students) {
    let nom = prompt("Donner le nom d'étudians : ")
    let student = students.find((student) => {
        return student.name === nom
    })

    if (student) {
        let moyenne = student.grades.reduce((total, grade) => {
            return total + grade;
        }, 0) / student.grades.length
        return moyenne
    } else {
        console.log("Student not found");
        return
    }
}

function getStudentResult(students) {
    let moyenne = calculateAverage(students)
    if (moyenne >= 12) {
        console.log("Admis")
    } else if (moyenne < 12) {
        console.log("Non admis")
    } else {
        return
    }
}

function getStudentsByField(students) {
    let filière = prompt("Donner la filière à rechercher : ")
    students = students.filter((student) => { return student.field === filière })
    return students
}

function getSuccessfulStudents(students) {
    return students.filter((student) => {
        let moyenne = student.grades.reduce((total, grade) => {
            return total + grade;
        }, 0) / student.grades.length;

        return moyenne > 12;
    });
}
function getBestStudent(students) {
    return students.reduce((best, student) => {
        let moyenne = student.grades.reduce((total, grade) => {
            return total + grade;
        }, 0) / student.grades.length;

        let bestMoyenne = best.grades.reduce((total, grade) => {
            return total + grade;
        }, 0) / best.grades.length;

        if (moyenne > bestMoyenne) {
            return student;
        } else {
            return best;
        }
    });
}

function addGrade(students) {
    let studentId = Number(prompt("Donner l'identifiant de l'étudiant : "));
    let grade = Number(prompt("Donner la nouvelle note : "));

    let student = students.find((student) => {
        return student.id === studentId;
    });

    if (student) {
        student.grades.push(grade);
        console.log("Note ajoutée avec succès");
    } else {
        console.log("Student not found");
    }
}

addGrade(students)