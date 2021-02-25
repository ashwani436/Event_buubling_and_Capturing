import "./styles.css";

document.getElementById("gp").addEventListener(
  "click",
  () => {
    console.log("grandparent is clicked");
  },
  true
);
document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("parent is clicked");
  },
  true
);

document.getElementById("child").addEventListener(
  "click",
  () => {
    console.log("child is clicked");
  },
  true
);

//true(for event capturing)
//false(for event bubbling)
// if we dont pass anything by default false value is passed and event bubbling happens
