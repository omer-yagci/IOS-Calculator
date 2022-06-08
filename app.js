const containerElements = document.querySelector(".container");
const empty1 = document.querySelector(".empty");
const empty2 = document.querySelector(".empty-2");
let operator = "";

// Capturing Method
containerElements.addEventListener("click", (event) => {
  let eventClick = event.target;

  // Check valid ınput
  if (eventClick.classList.contains("box")) {
    if (empty1.innerText === "0" && eventClick.innerText === "0") {
    } else if (empty1.innerText === "0") {
      empty1.innerText = eventClick.innerText;
    } else {
      empty1.innerText += eventClick.innerText;
    }
  }
  // Operator Section
  if (eventClick.classList.contains("operator")) {
    operator = event.target.innerText;
    empty2.innerText = empty1.innerText.slice(0, -1) + "" + operator;
    empty1.innerText = "0";
  }
  // Calculate Section
  if (eventClick.classList.contains("equal")) {
    switch (operator) {
      case "+":
        empty2.innerText =
          Number(empty2.innerText.slice(0, -1)) +
          Number(empty1.innerText.slice(0, -1));
        empty1.innerText = "";
        break;
      case "-":
        empty2.innerText =
          Number(empty2.innerText.slice(0, -1)) -
          Number(empty1.innerText.slice(0, -1));
        empty1.innerText = "";
        break;
      case "/":
        empty2.innerText = (
          Number(empty2.innerText.slice(0, -1)) /
          Number(empty1.innerText.slice(0, -1))
        ).toFixed(1);
        empty1.innerText = "";
        break;
      case "*":
        empty2.innerText =
          Number(empty2.innerText.slice(0, -1)) *
          Number(empty1.innerText.slice(0, -1));
        empty1.innerText = "";
        break;
      case "%":
        empty2.innerText =
          (Number(empty2.innerText.slice(0, -1)) *
            Number(empty1.innerText.slice(0, -1))) /
          100;
        empty1.innerText = "";
        break;
    }
  }
  // Clear Button
  if (eventClick.classList.contains("box__ac")) {
    empty1.innerText = "0";
    empty2.innerText = "";
  }
  // Reverse Button
  if (eventClick.classList.contains("box__plus-minus")) {
    let ömer = empty1.innerText.slice(0, -1) * -1;
    empty1.innerText = ömer;
  }
});
