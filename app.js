 

function balance(amount){

	// console.log(amount);
	result = amount;
	console.log(result);
	$("#result").html(result);
}

function withdrawAmount(withdraw){
	withdraw = withdraw;
	console.log(withdraw);
	$("#withdraw").html(withdraw);

}

function whatIsLeft20(result, withdraw){
	var newBalance = result - withdraw;
	console.log(newBalance);
	$("#newBalance").html(newBalance);
}

function whatIsLeft40(result, withdraw){
	var newBalance = result - withdraw;
	console.log(newBalance);
	$("#newBalance").html(newBalance);
}

function whatIsLeft60(result, withdraw){
	var newBalance = result - withdraw;
	console.log(newBalance);
	$("#newBalance").html(newBalance);
}

function whatIsLeft80(result, withdraw){
	var newBalance = result - withdraw;
	console.log(newBalance);
	$("#newBalance").html(newBalance);
}

function whatIsLeft100(result, withdraw){
	var newBalance = result - withdraw;
	console.log(newBalance);
	$("#newBalance").html(newBalance);
}

 // If clear is selected then wipe away all of the content from the screen and unlock the buttons.
        if ($(this).hasClass("clear")) {

          firstNumber = "";
          secondNumber = "";
          operator = "";
          result = 0;
          hasNumber = false;
          firstNumberComplete = false;
          lockButtons = false;

          $("#first-number, #second-number, #operator, #result").empty();
        }

 $(document).ready(function() {

      // Variables
      var firstNumber = "";
      var secondNumber = "";
      var operator = "";
      var result = 0;
      var withdraw = 0;
      var hasNumber = false;
      var firstNumberComplete = false;
      var lockButtons = false;

      // Check if any button is clicked...
      $(document).on("click", "button", function() {
      	// result = result;
     } )

} )

// <html> <head> <script> function verify() { 
// 	var pin = prompt("Enter your ATM PIN"); if(pin != "Pass@123") { 
// 		                alert("Invalid pin. Please try again!"); 
// 		}