const h1 = document.getElementById("number");
const btn2 = document.getElementById("minus");
const reset = document.getElementById("reset");
const btn1 = document.getElementById("plus");

var a = 0;
if (a <= 0) {
  btn2.disabled = true;
}

btn2.addEventListener("click", () => {
  a = a - 1;
  if (a <= 0) {
    /* Here if we make a = 0 then it will also not allow 'a' to be less than 0 but every time button will clicked 
   this event and function will be called that why I made button disabled.  */
    // a = 0;
    btn2.disabled = true;
  }
  h1.innerText = a;
});
reset.addEventListener("click", () => {
  btn2.disabled = true;
  a = 0;
  if(a==0){
  }
  h1.innerText = a;
});

btn1.addEventListener("click", () => {
  btn2.disabled = false;
  a = a + 1;
  h1.innerText = a;
});

h1.innerText = a;
