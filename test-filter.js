function formatRecords(students) {
  console.log(students);
  let studentsString = "";

  // //Map function
  // students.map((student)=>{
  //     if(student.graduating && student.StudentId){
  //         studentsString += student.name+","; //=
  //     }
  // })

  // return studentsString.substring(0, studentsString.length-1); //=

  // Filter function
  students
    .filter((student) => student.graduating === true && student.StudentId)
    .map((student) => {
      studentsString += student.name + ","; //=
    }); //=
  return studentsString;
}
formatRecords([
  {
    StudentId: 20,
    name: "chad west",
    graduating: true,
  },
  {
    StudentId: 23,
    name: "jake paul",
    graduating: true,
  },
  {
    StudentId: 21,
    name: "brad stanly",
    graduating: false,
  },
]); //=
