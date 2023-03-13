// Exercise 6
function validate() {
	let error = 0;

	// Get the input fields.

	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	// Form conditions.
	
	const regName = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
	const regEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	const regAddress = /^[a-zA-Z0-9\s,.'-]{3,}$/;
	const regLastN = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
	const regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/;
	const regPhone = /^\d+$/;
	
	// Validate fields entered by the user: name, phone, password, and email.

	// 1. Validate name.
	if (fName.value === "" || fName.value.match(!regName) || fName.value.length < 3) 
	{
		error++;
		fName.classList.remove("is-valid");
		fName.classList.add("is-invalid");
	} else {
		fName.classList.remove("is-invalid");
		fName.classList.add("is-valid");
	}

	// 2. Validate e-mail.
	if (fEmail.value === "" || fEmail.value.match(!regEmail) || fEmail.value.length < 3) 
	{
		error++;
		fEmail.classList.remove("is-valid");
		fEmail.classList.add("is-invalid");
	} else {
		fEmail.classList.remove("is-invalid");
		fEmail.classList.add("is-valid");
	}

	// 3. Validate address.
	if (fAddress.value === "" || fAddress.value.match(!regAddress) || fAddress.value.length < 3) 
	{
		error++;
		fAddress.classList.remove("is-valid");
		fAddress.classList.add("is-invalid");
	} else {
		fAddress.classList.remove("is-invalid");
		fAddress.classList.add("is-valid");
	}

	// 4. Validate last name.
	if (fLastN.value === "" || fLastN.value.match(!regLastN) || fLastN.value.length < 3) 
	{
		error++;
		fLastN.classList.remove("is-valid");
		fLastN.classList.add("is-invalid");
	} else {
		fLastN.classList.remove("is-invalid");
		fLastN.classList.add("is-valid");
	}

	// 5. Validate password.
	if (fPassword.value === "" || fPassword.value.match(!regPassword) || fPassword.value.length < 3) 
	{
		error++;
		fPassword.classList.remove("is-valid");
		fPassword.classList.add("is-invalid");
	} else {
		fPassword.classList.remove("is-invalid");
		fPassword.classList.add("is-valid");
	}

	// 6. Validate phone.
	if (fPhone.value === "" || fPhone.value.match(!regPhone) || fPhone.value.length < 9) 
	{
		error++;
		fPhone.classList.remove("is-valid");
		fPhone.classList.add("is-invalid");
	} else {
		fPhone.classList.remove("is-invalid");
		fPhone.classList.add("is-valid");
	}
	
	// 7. Possible outcomes.
	if (error > 0) {
		alert("Error");
	} else { 
		alert("Thank you for trusting us! Returning to the main page...");
		window.location.href="http://127.0.0.1:5500/index.html"
	}
}