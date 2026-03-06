function registerUser(){

let username = document.getElementById("username").value;

let user = {
username: username
};

fetch("data/users.json")
.then(response => response.json())
.then(data => {

data.push(user);

console.log("User registered:", user);

alert("Đăng ký thành công");

});

}
