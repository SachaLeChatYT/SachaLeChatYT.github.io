let myHeading = document.querySelector("h1");
myHeading.textContent = "Ronron chaton 😺";
let myVariable;
myVariable = "Bob";
alert("Salut les gens c'est sacha le chat !");
let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/photo-ronron-chaton.jpg") {
    myImage.setAttribute("src", "images/firefox2.jpg");
  } else {
    myImage.setAttribute("src", "images/photo-ronron-chaton.jpg");
  } 
});





