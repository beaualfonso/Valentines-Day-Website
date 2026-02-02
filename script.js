const yesButton = document.querySelector(".yes_button");
const noButton = document.querySelector(".no_button");
const header = document.getElementsByClassName("head")[0];
const image = document.querySelector(".pikachu");
const buttons = document.querySelector(".buttons");

let yesScale = 1;
let noScale = 1;
noScale = noScale - 0.1;
yesScale = yesScale + 0.25;

let clickCount = 0;

/*psuedo
if no is clicked increase yesbutton size and decrease nobutton size
if yes is clicked change screen, image, and heart confetti on screen */

noButton.addEventListener('click', function () {
    if ( clickCount == 0){
        header.textContent = "Please say yes I love you so much";
        clickCount += 1;
    }
    else if(clickCount == 1){
        image.setAttribute("src", "https://imgs.search.brave.com/x5OVRIthpV05C699M3JnqPXJ23qX5rtmryjh1mYeIdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naWZk/Yi5jb20vaW1hZ2Vz/L2hpZ2gvc2FkLXBp/a2FjaHUtdGVhcnMt/bXo1NjdjdWZpMzNp/ajliZy5naWY.gif");
        clickCount += 1;
    }
    else if(clickCount >=2){
        noScale = noScale - 0.1;
        yesScale = yesScale + 0.25;
        noButton.textContent = "YES";
        //noButton.style.transform = "scale(" + noScale + ")";
        yesButton.style.transform = "scale(" + yesScale + ")";
    }; 
});

yesButton.addEventListener('click', function() {
    buttons.style.visibility = 'hidden';
    header.textContent = "I love you, happy valentines day my love";
    image.setAttribute("src", "https://imgs.search.brave.com/HAXCljyTAJMY2THPioMJnbWNfsyFgzJpjL8eYwDAb6Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naWZk/Yi5jb20vaW1hZ2Vz/L2hpZ2gvcGlwbHVw/LWFuZC1waWthY2h1/LWh1Z2dpbmcteXM0/a3V4dHg3bXpvamJ1/dy5naWY.gif");

});
