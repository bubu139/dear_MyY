function appendNumber(number) {  
    const password = document.getElementById('password');
      password.value += number;
    updateEyesAndHands();
}

function clearinput(){
  const password = document.getElementById('password');
  passwordRef.value = "";
    updateEyesAndHands();
}

let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");

let normalEyeStyle = () => {
  eyeL.style.cssText = `
    left:0.6em;
    top: 0.6em;
  `;
  eyeR.style.cssText = `
  right:0.6em;
  top:0.6em;
  `;
};


//When clicked on username input
usernameRef.addEventListener("focus", () => {
  eyeL.style.cssText = `
    left: 0.75em;
    top: 1.12em;  
  `;
  eyeR.style.cssText = `
    right: 0.75em;
    top: 1.12em;
  `;
  normalHandStyle();
});
//When clicked on password input

// let normalHandStyle = () => 
//  passwordRef.addEventListener("input", () =>{
//   if (passwordRef.value.length == 0) {
//   handL.style.cssText = `
//         height: 2.81em;
//         top:15%;
//         right: 32%;
//         transform: rotate(0deg);
//     `;
//   handR.style.cssText = `
//         height: 2.81em;
//         top: 15%;
//         right: 13%;
//         transform: rotate(0deg)
//     `;
// }else

// // passwordRef.addEventListener("focus", () => 
// {
//   handL.style.cssText = `
//         height: 6.56em;
//         top: 7%;
//         right: 25%;
//         transform: rotate(-155deg);    
//     `;
//   handR.style.cssText = `
//     height: 6.56em;
//     top: 7%;
//     right: 19%;
//     transform: rotate(155deg);
//   `;
//   normalEyeStyle();
// }
//  });
function updateEyesAndHands(){
  if (passwordRef.value.length == 0) {
  handL.style.cssText = `
        height: 2.81em;
        top:15%;
        right: 32%;
        transform: rotate(0deg);
    `;
  handR.style.cssText = `
        height: 2.81em;
        top: 15%;
        right: 13%;
        transform: rotate(0deg)
    `;
}else 

// passwordRef.addEventListener("focus", () => 
if (passwordRef.value.length == 1){
  handL.style.cssText = `
        height: 6.56em;
        top: 7%;
        right: 25%;
        transform: rotate(-155deg);    
    `;
  handR.style.cssText = `
    height: 6.56em;
    top: 7%;
    right: 19%;
    transform: rotate(155deg);
  `;
  normalEyeStyle();
}
}
//When clicked outside username and password input
document.addEventListener("click", (e) => {
  let clickedElem = e.target;
  if (clickedElem != usernameRef && clickedElem != passwordRef) {
    normalEyeStyle();
    normalHandStyle();
  }
});

function check_input(){
  if (passwordRef.value === "01022025")
    window.location.href = '../puzzle_game/puzzle.html';
  else
    clearinput();
}

function show_pop() {
  const extra = document.getElementById("popup");
  extra.classList.add('show');

  
}

function hide_pop(){
  document.getElementById('popup').classList.remove('show');
}