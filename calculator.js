let screen_btn = document.querySelector("#screen");
let plus_btn = document.querySelector("#plus");
let minuse_btn = document.querySelector("#minuse");
let multi_btn = document.querySelector("#multi");
let div_btn = document.querySelector("#div");
let ce_btn = document.querySelector("#ce-btn");
let dot_btn = document.querySelector("#dot");
let pm_btn = document.querySelector("#pm");
let back_btn = document.querySelector("#back");
let equal_btn = document.querySelector("#equal");
let delet_btn = document.querySelector("#delet");
let numbers = document.querySelectorAll(".gray-btn");
let dotchek = "false";
let setresult =false;
let op = " ";
let num1, num2, result;

delet_btn.addEventListener("click", (e) => {
  screen_btn.textContent = "0.0";
  dotchek = "false";
  setresult=false;
  num1=0;
  num2=0;
});
ce_btn.addEventListener('click', (e)=>{
  screen_btn.textContent='0.0';
})

numbers.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (screen_btn.textContent == "0.0") {
      screen_btn.textContent = e.target.textContent;
    } else {
      screen_btn.textContent += e.target.textContent;
    }
  });
});

back_btn.addEventListener("click", (e) => {
  let lenx = screen_btn.textContent.length;
  let lastdigit = screen_btn.textContent.substring(lenx - 1, lenx);
  if (lastdigit == ".") {
    dotchek = "false";
  }
  if (lenx > 1) {
    screen_btn.textContent = screen_btn.textContent.substring(0, lenx - 1);
  } else {
    screen_btn.textContent = screen_btn.textContent;
  }
});

pm_btn.addEventListener("click", (e) => {
  screen_btn.textContent = screen_btn.textContent * -1;
});

dot_btn.addEventListener("click", (e) => {
  if (dotchek == "false") {
    screen_btn.textContent += ".";
    dotchek = "true";
  } else {
    screen_btn.textContent = screen_btn.textContent;
  }
});

plus_btn.addEventListener("click", (e) => {
  num1 = Number(screen_btn.textContent);
  screen_btn.textContent = "0.0";
  op = '+';
});

minuse_btn.addEventListener("click", (e) => {
  num1 = Number(screen_btn.textContent);
  screen_btn.textContent = "0.0";
  op = "-";
});

multi_btn.addEventListener("click", (e) => {
  num1 = Number(screen_btn.textContent);
  screen_btn.textContent = "0.0";
  op = "*";
});

div_btn.addEventListener("click", (e) => {
  num1 = Number(screen_btn.textContent);
  screen_btn.textContent = "0.0";
  op = "/";
});

equal_btn.addEventListener("click", (e) => {
  if(setresult==false){
    num2 = Number(screen_btn.textContent);
  }else{
    num1 =Number(screen_btn.textContent);
  }

  switch (op) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 != 0) {
        result = num1 / num2;
        break;
      } else {
        alert("erorr:division by zero");
        result = "nun";
      }
      break;
  }
  screen_btn.textContent = result;
  setresult=true;
});
