// Your code goes here

//#1
let logo = document.querySelector('.logo-heading');
logo.addEventListener("dblclick", ()=>{
    logo.style.color = "blue"
})

//#2
let nav = document.querySelector('.main-navigation');
console.log(nav)
nav.addEventListener("mouseover", ()=>{
    nav.style.background = "CadetBlue"
})

//#3 
document.addEventListener("keydown", e => {
    // console.log('keys pressed')
    console.log(e.code)

    if(e.code === 'Digit1'){
        console.log("typed one")
        document.querySelector('.intro').style.background = "BlueViolet"
    }
})

//#4
let nav1 = document.querySelector('.main-navigation');
console.log(nav1)
nav1.addEventListener("mouseleave", ()=>{
    nav1.style.background = "orange"
})

//#5
let back = document.querySelector('.text-content');
console.log(back)
back.addEventListener("wheel", ()=>{
    back.style.background = "grey"
})

//#6
let log = document.getElementById('log');
console.log(log)
log.addEventListener("select", () =>{
    log.style.color = "red"
})

//#7
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });

//#8
const busPic = document.querySelector(".yellowBus");
// console.log(busPic);
busPic.addEventListener("mouseenter", () => {
  busPic.style.transform = "scale(1.2)";
  busPic.style.transition = "transform 1s";
});

//#9
let event9 = document.querySelector("h2");
event9.addEventListener("wheel", (e) => {
  e.target.style.color = "blue";
});

//#10
let event10 = document.querySelector("h2");
// console.log(event3);
event10.addEventListener("dblclick", (e) => {
  // console.log(e);
  e.target.style.color = "red";
});

//preventDeafault

let link = document.querySelector(".nav-link");
link.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Clicked the link");
});



//prevent the event propagation properly

const body = document.querySelector("body");
const conGroup = document.querySelector(".content-section");
const mapPicture = document.querySelector(".mapPic");

body.addEventListener("click", (e) => {
  body.style.backgroundColor = "purple";
  console.log("clicked body");
});

conGroup.addEventListener("dblclick", (e) => {
  conGroup.style.backgroundColor = "hotpink";
  e.stopPropagation();
  console.log("clicked conGroup");
});

mapPicture.addEventListener("click", (e) => {
  mapPicture.style.border = "5px solid limegreen";
  e.stopPropagation();
  console.log("clicked mapPicture");
});