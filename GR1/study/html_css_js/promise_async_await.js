function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dữ liệu đã tải thành công!");
    }, 1000);
  });
}

// Cách 1: .then()
fetchData().then((data) => console.log(data));

// Cách 2: async/await
async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData();
