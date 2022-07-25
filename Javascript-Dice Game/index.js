/*variable naming
names can only contain letters, numbers, $ and _
they cannot begin with a number

=== compares data types along with values
== doesn't compare data types along with values 

Math.random() returns a random number between 0 and 1, including zero but not including 1
Math.random() * n returns a random number between 0 and n, including zero but not including n
Math.floor(Math.random() * n) + 1 returns a random whole number between 1 and n including both 1 and n*/
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage1="dice"+randomNumber1+".png";
var randomImageSource1="images/"+randomDiceImage1;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomDiceImage2;

var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}

else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}

else{
    document.querySelector("h1").innerHTML="Draw!";
}