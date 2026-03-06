let user = localStorage.getItem("pi_user");

document.getElementById("user").innerHTML =
"Xin chào: " + user;

let balance = 0;

function deposit(){

let amount = Number(
document.getElementById("deposit").value
);

balance = balance + amount;

alert("Nạp thành công");

}

function withdraw(){

let amount = Number(
document.getElementById("withdraw").value
);

let fee = 0.05;

let total = amount + fee;

if(balance >= total){

balance = balance - total;

alert("Rút thành công. Phí 0.05 Pi");

}

else{

alert("Không đủ Pi");

}

}
