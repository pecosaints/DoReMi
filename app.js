//Selecting buttons class for manipulation
const myKeys = document.querySelectorAll(".key");

//Relating the sound and using the value of each key = to the pressed keyboard key.
const playSnd = key =>{
  switch(key){
    case "q":
      let audio = new Audio("doremi_starting_files/doremi/C4.mp3");
      audio.play();
      break;
    case "w":
      let audio1 = new Audio("doremi_starting_files/doremi/D4.mp3");
      audio1.play();
      break;
    case "e":
      let audio2 = new Audio("doremi_starting_files/doremi/E4.mp3");
      audio2.play();
      break;
    case "r":
      let audio3 = new Audio("doremi_starting_files/doremi/F4.mp3");
      audio3.play();
      break;
    case "t":
      let audio4 = new Audio("doremi_starting_files/doremi/G4.mp3");
      audio4.play();
      break;
    case "y":
      let audio5 = new Audio("doremi_starting_files/doremi/A4.mp3");
      audio5.play();
      break;
    case "u":
      let audio6 = new Audio("doremi_starting_files/doremi/B4.mp3");
      audio6.play();
      break;
    case "i":
      let audio7 = new Audio("doremi_starting_files/doremi/C5.mp3");
      audio7.play();
      break;
    case "o":
      let audio15 = new Audio("doremi_starting_files/doremi/D5.mp3");
      audio15.play();
      break; 
    case "p":
      let audio16 = new Audio("doremi_starting_files/doremi/E5.mp3");
      audio16.play();
      break; 
    case "2":
      let audio8 = new Audio("doremi_starting_files/doremi/Db4.mp3");
      audio8.play();
      break;
    case "3":
      let audio9 = new Audio("doremi_starting_files/doremi/Eb4.mp3");
      audio9.play();
      break;
    case "5":
      let audio10 = new Audio("doremi_starting_files/doremi/Gb4.mp3");
      audio10.play();
      break;
    case "6":
      let audio11 = new Audio("doremi_starting_files/doremi/Ab4.mp3");
      audio11.play();
      break;
    case "7":
      let audio12 = new Audio("doremi_starting_files/doremi/Bb4.mp3");
      audio12.play();
      break;   
    case "9":
      let audio13 = new Audio("doremi_starting_files/doremi/Db5.mp3");
      audio13.play();
      break; 
    case "0":
      let audio14 = new Audio("doremi_starting_files/doremi/Eb5.mp3");
      audio14.play();
      break;         
    default:
      console.log(key);
  }
}

//Loop for event in case the key is pressed by mouse - click event
for(let x = 0; x < myKeys.length; x++){
  myKeys[x].addEventListener("click", function(){
  playSnd(myKeys[x].value);
  })
}

//function for sound working when pressing the related keyboards key - keydown event
document.addEventListener("keydown", function(btn){
  playSnd(btn.key.toLowerCase());
  let prssdKey = btn.key.toLowerCase();

//Loop for removing "activated" class of any button
  for(let x = 0; x < myKeys.length; x++){
    myKeys[x].classList.remove("activated");
  }

  //Loop for adding "activated" class of  any button for css effect purposes when clicking a button using keydown.
  for(let x = 0; x < myKeys.length; x++){
    if(prssdKey == myKeys[x].value.toLowerCase()){
      myKeys[x].classList.add("activated");
    }
  }
})

    // When the user clicks on <div>, open the popup
    function myFunction() {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    }