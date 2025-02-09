const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCode = 'Vinny'; 
const nextPageUrl = 'main.html'; 

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const userInput = codeInput.value.trim();
	if (userInput === secretCode) {
		resultDiv.innerHTML = 'BooBoo';
		window.location.href = nextPageUrl; 
	} else {
		resultDiv.innerHTML = 'You are not Vinny.Nv vinny kakapote nenu ninnu dekhanu, vellipo';
	}
});