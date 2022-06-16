const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
    }
];

function getReName(word){
    word = word.toLowerCase();
    let result = word[0].toUpperCase() + word.slice(1);
    return result;
}
// 1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл
const getSubjects = (students) => {
    const result = Object.keys(students.subjects);
        for(let i = 0; i < result.length; i++){
        if(result[i].includes("_")){
            result[i] = result[i].replaceAll("_", " ");
        }
        result[i] = getReName(result[i]);
    }
    return result;
}
console.log(getSubjects(students[0]));

// 2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку.
const getAverageMark = (students) => {
    const subjectsValues = Object.values(students.subjects);
    let result = subjectsValues.join(",").split(",");
    result = result.reduce((prevValue, value) => {
        const sum = +prevValue + +value;
        return sum;
    }) / result.length;
    return result.toFixed(2);
}
console.log(getAverageMark(students[0]));

// 3.Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.
const getStudentInfo = (students) => {
    const studentInfo = {
        name: students.name,
        course: students.course,
        averageMark: Number(getAverageMark(students)),
    }
    return studentInfo;
}
console.log(getStudentInfo(students[0]));

// 4. Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.
const getStudentsNames = (students) => {
    const studentsNames = students.map(student => student.name).sort();
    return studentsNames;
}
console.log(getStudentsNames(students));

// 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.
const getBestStudent = (students) => {
    const studentsNamesWithMarks = students.map(student => [student.name, getAverageMark(student)])
    const bestAverageMark = students.map(student => {
        return getAverageMark(student);
    }).reduce((prevValue, value) => prevValue > value ? prevValue : value);
    for(let i = 0; i < students.length; i++){
        if(studentsNamesWithMarks[i].includes(bestAverageMark)){
            return studentsNamesWithMarks[i][0];
        }
    }
}
console.log(getBestStudent(students));

// 6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.
const calculateWordLetters = (word) => {
    const countWordArr = [];
    word = word.toLowerCase().replaceAll(" ", "").split("");
    for(let i = 0; i < word.length; i++){
        let counter = 0;
        let letter = word[i];
        for(let j = 0; j < word.length; j++){
            if(letter === word[j]){
                counter++;
            }
        }
        countWordArr.push([letter, counter]);
    }
    const result = Object.fromEntries(countWordArr);
    return result;
}
console.log(calculateWordLetters("Супер крута провірка!!!"))