let result = document.querySelector(".result-content")
let equale = document.querySelector(".res")
let btns = document.querySelectorAll(".btn")
let opp = document.querySelector(".opp")
for (btn = 0; btn < btns.length; btn++) {
  btns[btn].addEventListener("click", selectNumber)
}
function selectNumber() {
  switch (this.innerHTML) {
    case "C":
      result.innerHTML = "";
      break;
    case "mod":
      result.innerHTML = result.innerHTML + "%";
      break;
    case "del":
      result.innerHTML = result.innerHTML.slice(0, -1);
      break;
    case "+":
      result.innerHTML = result.innerHTML + "+";
      break;
    case "-":
      result.innerHTML = result.innerHTML + "-";
      break;
    case "*":
      result.innerHTML = result.innerHTML + "*";
      break;
    case "/":
      result.innerHTML = result.innerHTML + "/";
      break;
    case ".":
      result.innerHTML = result.innerHTML + ".";
      break;
    case this.innerHTML:
      result.innerHTML = result.innerHTML + this.innerHTML;
  }
}
equale.addEventListener("click", equaleFunction);
function equaleFunction() {
  if (isNaN(eval(result.innerHTML))) {
    result.innerHTML = "error"
  } else {
    result.innerHTML = eval(result.innerHTML)
  }
 }
  


