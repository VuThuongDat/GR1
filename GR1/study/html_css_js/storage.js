// Lưu dữ liệu
localStorage.setItem("username", "datvu");

// Lấy dữ liệu
const user = localStorage.getItem("username");
console.log(user); // datvu

// Xóa dữ liệu
localStorage.removeItem("username");
