const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
      {
        sectionNum: 1,
        roomNum: "STC 353",
        enrolled: 26,
        days: "TTh",
        instructor: "Bro T",
      },
      {
        sectionNum: 2,
        roomNum: "STC 347",
        enrolled: 25,
        days: "TTh",
        instructor: "Sis A",
      },
    ],

    updateenrolled: function (sectionNum, add = true) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionNum >= 0) {
            if (add) {
                this.sections[sectionIndex].enrolled += 1;
            } else {
                this.sections[sectionIndex].enrolled -= 1;
            }
            renderSections(this.sections);
        }
    },
    
//     enrollstudent: function (sectionNum) {
//         const sectionIndex = this.sections.findIndex(
//             (section) => section.sectionNum == sectionNum
//         );
//         if (sectionIndex >= 0) {
//             this.sections[sectionIndex].enrolled += 1;
//             renderSections(this.sections);
//         }        
//     },
//     dropstudent: function (sectionNum) {
//         const sectionIndex = this.sections.findIndex(
//             (section) => section.sectionNum == sectionNum
//         );
//         if (sectionIndex >= 0) {
//             this.sections[sectionIndex].enrolled -= 1;
//             renderSections(this.sections);
//         }
//     },
  };
   
  function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const coursecode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    coursecode.textContent = course.code;
  }
 
  function renderSections(sections) {
    const data = sections.map(
      (section) => `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = data.join("");
  }

setCourseInfo(aCourse);
renderSections(aCourse.sections);


document.querySelector("#enrollStudent").addEventListener("click", function() {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.updateenrolled(sectionNum);
});
document.querySelector("#dropStudent").addEventListener("click", function() {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.updateenrolled(sectionNum, add = false);
});

let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
let result = names.filter((name) => name[0] == "B");
console.log(result);


let namesLength = names.map((name) => name.length);
console.log(namesLength);


let avgStringLength = names.reduce(
    (total, name) => total + name.length, 0) / names.length;
console.log(avgStringLength);
