function nav() {
	document.getElementById("menu-icon").classList.toggle("menu-icon-open");
	document.getElementById("close-icon").classList.toggle("close-icon-open");

	document.getElementById("nav").classList.toggle("open");
	
}
function sendEmail() {
	Email.send({
		Host : "smtp.elasticemail.com",
		Username : "jadenhozer1@gmail.com",
		Password : "DF73FF1B77B6E2108EBCF5C243C42CDB8259",
		To : 'jadenhozer1@gmail.com',
		From : document.getElementById("email").value,
		Subject : "New Contact from jadenhozer.com",
		Body : "Name: " + document.getElementById("name").value
			+ "<br> Company: " + document.getElementById("company").value
			+ "<br> Email: " + document.getElementById("email").value
			+ "<br> Phone Number: " + document.getElementById("phone").value
	}).then(
	  message => alert("Message sent successfully")
	);
}