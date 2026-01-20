const registerButton = document.getElementById('register')
const loginButton = document.getElementById('login')
const container = document.getElementById('container')
 

registerButton.onclick = function(){
	 container.className = 'active'
}
loginButton.onclick = function(){
		location.href = "louise/index.html"
		
}