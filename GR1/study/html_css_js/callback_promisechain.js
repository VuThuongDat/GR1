function step1(cb) {
  setTimeout(() => {
    console.log("Bước 1");
    cb();
  }, 1000);
}

function step2(cb) {
  setTimeout(() => {
    console.log("Bước 2");
    cb();
  }, 1000);
}

function step3() {
  console.log("Bước 3");
}

// Callback hell
step1(() => {
  step2(() => {
    step3();
  });
});

// Promise chain
const p1 = () => new Promise((res) => setTimeout(() => { console.log("P1"); res(); }, 1000));
const p2 = () => new Promise((res) => setTimeout(() => { console.log("P2"); res(); }, 1000));

p1().then(p2).then(() => console.log("Done!"));
