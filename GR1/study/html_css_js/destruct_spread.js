const student = {
  name: "Đạt",
  age: 21,
  address: "Hà Nội"
};

const { name, age } = student;
console.log(`${name} năm nay ${age} tuổi`);

const newStudent = { ...student, email: "dat@example.com" };
console.log(newStudent);
