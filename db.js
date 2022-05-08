const student_data = [
    {name : 'Abdur Rahim',
    classN: 'Five',
    roll  : 01,
    gender: 'Male',
    marks : {
        bn: 33,
        en: 45,
        math: 98,
        ss: 70,
        sc: 30,
        rel:80,
       },
    },
    {name : 'Abdul Karim',
    classN: 'Five',
    roll  : 02,
    gender: 'Male',
    marks : {
        bn: 65,
        en: 40,
        math: 58,
        ss: 54,
        sc: 50,
        rel:90,
       },
    },
    {name : 'Sumi Akter',
    classN: 'Five',
    roll  : 03,
    gender: 'Female',
    marks : {
        bn: 33,
        en: 45,
        math: 98,
        ss: 70,
        sc: 90,
        rel:80,
       },
    },
    {name : 'Asraful Haque',
    classN: 'Five',
    roll  : 04,
    gender: 'Male',
    marks : {
        bn: 30,
        en: 60,
        math: 90,
        ss: 70,
        sc: 55,
        rel:80,
       },
    },
    {name : 'Sufia',
    classN: 'Five',
    roll  : 05,
    gender: 'Female',
    marks : {
        bn: 29,
        en: 40,
        math: 50,
        ss: 90,
        sc: 61,
        rel: 50,
       },
    },
    {name : 'Anis Ahmed',
    classN: 'Five',
    roll  : 06,
    gender: 'Male',
    marks : {
        bn: 90,
        en: 45,
        math: 98,
        ss: 70,
        sc: 40,
        rel:80,
       },
    },
    {name : 'Jamil',
    classN: 'Five',
    roll  : 07,
    gender: 'Male',
    marks : {
        bn: 12,
        en: 29,
        math: 100,
        ss: 50,
        sc: 32,
        rel:70,
       },
    },
    {name : 'Rumi Akter',
    classN: 'Five',
    roll  : 08,
    gender: 'Female',
    marks : {
        bn: 90,
        en: 45,
        math: 98,
        ss: 68,
        sc: 40,
        rel:70,
       },
    },
    {name : 'Abul Hasem',
    classN: 'Five',
    roll  : 09,
    gender: 'Male',
    marks : {
        bn: 80,
        en: 50,
        math: 90,
        ss: 70,
        sc: 96,
        rel:80,
       },
    },
    {name : 'Abul Kasem',
    classN: 'Five',
    roll  : 10,
    gender: 'Male ',
    marks : {
        bn: 50,
        en: 90,
        math: 100,
        ss: 90,
        sc: 70,
        rel:76,
       },
    },
];

for(data of student_data){

    
let result = null;
gpa = "";
grade = "";
cgpa= "";
if (data.marks.bn < 33) {
    grade = 'F';
    gpa = 0;
    cgpa = 0;
    result = 'Fail';
}
else if (data.marks.bn >= 33, data.marks.bn <40) {
    grade = 'D';
    gpa = 1;
    cgpa = 1.00;
    result = 'PASS';
}
else if (data.marks.bn >= 40, data.marks.bn <50) {
    grade = 'C';
    gpa = 2;
    cgpa = 2.00;
    result = 'PASS';
}
else if (data.marks.bn >= 50, data.marks.bn <60) {
    grade = 'B';
    gpa = 3;
    cgpa = 3.00;
    result = 'PASS';
}
else if (data.marks.bn >= 50, data.marks.bn <70) {
    grade = 'A-';
    gpa = 3.5;
    cgpa = 3.50;
    result = 'PASS';
}
else if (data.marks.bn >= 70, data.marks.bn <80) {
    grade = 'A';
    gpa = 4;
    cgpa = 4.00;
    result = 'PASS';
}
else if (data.marks.bn >= 80, data.marks.bn <=100) {
    grade = 'A+';
    gpa = 5;
    cgpa = 5.00;
    result = 'PASS';
}
//English
else if (data.marks.en >= 80, data.marks.en <=100) {
    grade = 'A+';
    gpa = 5;
    cgpa = 5.00;
    result = 'PASS';
}
else if (data.marks.en >= 70, data.marks.en <80) {
    grade = 'A';
    gpa = 4;
    cgpa = 4.00;
    result = 'PASS';
}

else{'Result Not Found'}

for(data of student_data){
    console.log(`Class Five Student Result Sheet
    
    Suudent Name: ${data.name}
    Class       : ${data.classN}
    Roll No.    : ${data.roll}
    Gender      : ${data.gender}
    ==================================
    Result Data =>>
    
    Subject     Mark    GPA     Grade
    -------     ----    ----    -----
    Bangla      ${data.marks.bn}      ${gpa}        ${grade}
    English     ${data.marks.en}      ${gpa}        ${grade}
    Math        ${data.marks.math}    ${gpa}        ${grade}
    Scl Science ${data.marks.ss}      ${gpa}        ${grade}
    Science      ${data.marks.sc}    ${gpa}         ${grade}
    Religion      ${data.marks.rel}    ${gpa}       ${grade}

    CGpa = ${cgpa}
    Result = ${result}

    `);
  }

}



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

