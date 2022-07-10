var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random num -> 1-6

var imageName = "images/dice" + randomNumber1 + ".png" // create image src name

document.querySelector(".img1").setAttribute("src",imageName); // assign imagename to <img src>

var randomNumber2 = Math.floor(Math.random() * 6) + 1;  // random num -> 1-6

var imageName = "images/dice" + randomNumber2 + ".png" // create image src name


document.querySelector(".img2").setAttribute("src",imageName);// assign imagename to <img src>


//conditions
//if player1 is greater than player2
//if player2 is greater than player1
//if player1 is equal player1



if(randomNumber1 > randomNumber2){

	document.querySelector("h1").innerHTML = "Player 1,Wins!!" // change innerHTML of h1 
}
else if(randomNumber1 < randomNumber2){

	document.querySelector("h1").innerHTML = "Player 2, Wins !!" // change innerHTML of h1 

}else{
 	document.querySelector("h1").innerHTML = "Its  Draw!!!!"// change innerHTML of h1 

}
