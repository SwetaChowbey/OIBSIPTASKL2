const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "delete") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (
      (display.innerText != "" && item.id == "enter") ||
      item.id == "ans"
    ) {
      display.innerText = eval(display.innerText);
    } else if (item.id == "%") {
      display.innerText = display.innerText / 100;
    } else if (
      (display.innerText == "" && item.id == "enter") ||
      item.id == "ans"
    ) {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});
