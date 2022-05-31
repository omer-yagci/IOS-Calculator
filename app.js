const ınputBox = document.querySelector(".empty");
const ınputBox2 = document.querySelector(".empty-2");
const boxes = document.querySelector(".container");
let operator = "";
let firstValue = "";
boxes.addEventListener("click", (e) => {
  console.log(e.target);

  let ınputValue = ınputBox.innerHTML;
  let boxValue = e.target.innerHTML;

  if (e.target.classList.contains("box")) {
    if (ınputBox.innerHTML === "0" && e.target.innerHTML === "0") {
    } else if (ınputBox.innerHTML === "0") {
      ınputBox.innerHTML = boxValue;
    } else {
      ınputBox.innerHTML += boxValue;
    }
  }
  if (e.target.classList.contains("operator")) {
    operator = boxValue;
    firstValue = ınputValue;
    ınputBox2.innerHTML = firstValue + "" + operator;
    ınputBox.innerHTML = "0";
  }

  if (e.target.classList.contains("equal")) {
    switch (operator) {
      case "+":
        ınputBox.innerHTML = Number(firstValue) + Number(ınputValue);
        ınputBox2.innerHTML = ınputBox.innerHTML;
        ınputBox.innerHTML = "";
        break;
      case "-":
        ınputBox.innerHTML = Number(firstValue) - Number(ınputValue);
        ınputBox2.innerHTML = ınputBox.innerHTML;
        ınputBox.innerHTML = "";
        break;
      case "*":
        ınputBox.innerHTML = Number(firstValue) * Number(ınputValue);
        ınputBox2.innerHTML = ınputBox.innerHTML;
        ınputBox.innerHTML = "";
        break;
      case "/":
        ınputBox.innerHTML = Number(firstValue) / Number(ınputValue);
        ınputBox2.innerHTML = ınputBox.innerHTML;
        ınputBox.innerHTML = "";
        break;
      case "%":
        ınputBox.innerHTML = Number(firstValue) % Number(ınputValue);
        ınputBox2.innerHTML = ınputBox.innerHTML;
        ınputBox.innerHTML = "";
        break;
    }
  }
  if (e.target.classList.contains("box__ac")) {
    ınputBox.innerHTML = "";
    ınputBox2.innerHTML = "";
  }
});
