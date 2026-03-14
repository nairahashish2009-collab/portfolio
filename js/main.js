let topBtn = document.getElementById("topBtn");
window.onscroll = function(){
if(document.documentElement.scrollTop > 800){
topBtn.style.display = "block";
}
else{
topBtn.style.display = "none";
}
};
topBtn.onclick = function(){
window.scrollTo({
top:0,
behavior:"smooth"
});
};
let btn = document.getElementById("modeBtn");
btn.onclick = function(){
document.body.classList.toggle("light-mode");
if(document.body.classList.contains("light-mode")){
btn.innerText = "Dark Mode";
}
else{
btn.innerText = "Light Mode";
}

};
document.getElementById("contactForm").addEventListener("submit", function(e){
e.preventDefault();
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;
let valid = true;
if(name === ""){
document.getElementById("nameError").innerText = "please enter your name";
valid = false;
}else{
document.getElementById("nameError").innerText = "";
}
if(email === ""){
document.getElementById("emailError").innerText = "please enter your email";
valid = false;
}else if(!email.includes("@")){
document.getElementById("emailError").innerText = "enter valid email";
valid = false;
}else{
document.getElementById("emailError").innerText = "";
}
if(message === ""){
document.getElementById("messageError").innerText = "please enter message";
valid = false;
}else{
document.getElementById("messageError").innerText = "";
}
if(valid){
alert("Form submitted successfully");
}
});