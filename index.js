const students = [{name: `megan`, frustrated:true, age:33},
{name: `Emil`, frustrated:true, age:32},
{name: 'Malibu', frustrated:false, age:19}]

// const isAFrustratedStudent = students.some(student => student.frustrated) //is there at least one element in the array that matches our criteria (frustrated).

// const isAFrustratedStudent = students.some(student => ! student.frustrated) //is there at least one element in the array that matches our criteria (not frustrated).

// const areAFrustratedStudent = students.every(student => student.frustrated) //list all elements in the array that matches our criteria (list all of the elements (t/f)).

// const oneAFrustratedStudent = students.find(student => student.frustrated) //list all elements in the array that matches our criteria (first in the list of elements that are true).

const frustratedStudent = students.filter(student => student.frustrated) //list all elements in the array that matches our criteria (list all elements that are listed).

console.log(students)