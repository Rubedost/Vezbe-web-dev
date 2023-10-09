// varijable
const btn1 = document.getElementById("dugme1");
const btn2 = document.getElementById("dugme2");
const btn3 = document.getElementById("dugme3");

const kocka1 = document.getElementById("kocka1");
const kocka2 = document.getElementById("kocka2");
const kocka3 = document.getElementById("kocka3");

// funkcije

//callback
btn1.addEventListener("click", () => {
  kocka1.classList.add("obojeno");
});

btn2.addEventListener("click", () => {
  kocka2.classList.remove("obojeno");
});

btn3.addEventListener("click", () => {
  kocka3.classList.toggle("obojeno");
});
