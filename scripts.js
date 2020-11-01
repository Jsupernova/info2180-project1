/* Add your JavaScript to this file */
window.onload = function(){
	var email = document.getElementById("email");
	var msg = document.getElementsByClassName("message");
	var submit= document.getElementsByClassName("btn");
	var container=document.getElementsByClassName('container');
	container[5].classList.add("signupform");
	submit[1].onclick = function(event){
				event.preventDefault();
		msg[0].style.display = "block";
		if (email.value==""){
			msg[0].innerHTML="Please enter a valid email address";
		}
		else{
			msg[0].innerHTML="Thank you! Your email address "+email.value+" has been added to our mailing list!"
		}
	};
	

}