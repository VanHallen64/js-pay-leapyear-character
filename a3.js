"use strict"

//Will call the prompt, calculate the amount earned and display in the page.
function hoursWorked(){
	let hours = prompt ("Enter number of hours worked");
	let amount = "";
	if (hours < 40){
		amount = 12 * hours;
	}else{
		amount = 18 * hours;
	}
	document.getElementById("finalAmount").innerHTML = "In " + hours + " hours you made $" + amount;
}

//Will call the prompt and display if it's a leap year according to the input after validating.
function leapYear(){
	let year = +prompt("Enter a year");
	let answer = document.getElementById("answer");
	if (year < 1582 || isNaN(year)){
		alert("Please enter a valid number, it must be a greater than 1582");
	}else if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
		answer.innerHTML = "The year " + year + " is a leap year.";
	}else if ((year % 4 != 0) || (year % 100 == 0) && (year % 400 != 0)){
		answer.innerHTML = "The year " + year + " is not a leap year.";
	}
}

//Organizes all the questions to get the final character and displays it in the site.
function favCharacter(){
	let character ="";
	if (yesNo("Is your favorite character small?") == false){
		if (yesNo("Is your favorite character green?") == false) {
			if (yesNo("Does your favorite character use poor grammar?") == false) {
				character =  "Your favorite character must be boring and isn’t worth guessing.";
			}else{
				character = "Your favorite character is Jar Jar";
			}
		}else if (yesNo("Does your favorite character use poor grammar?") == true) {
			character = "Your favorite character is Hulk";
		}else{
			character = "Your favorite character is Shrek";
		}
	}else if (yesNo("Is your favorite character green?") == false) {
		if (yesNo("Does your favorite character use poor grammar?") == true) {
			character = "Your favorite character is Gary Coleman";
		}else{
			character = "Your favorite character is Mini-Me";
		}
	}else if (yesNo("Does your favorite character use poor grammar?") == true) {
		character = "Your favorite character is Yoda";
	}else{
		character = "Your favorite character is Kermit";
	}
	document.getElementById("guessedCharacter").innerHTML = character;
}
	
//Will call a prompt and asign a boolean to yes or no.
function yesNo(question){
	let answer = prompt(question);
	if ((answer.substr(0,1) == "y")||(answer.substr(0,1) == "Y")) {
		return true;
	} else {
		return false;
	}
}

