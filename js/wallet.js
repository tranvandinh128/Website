function loadWallet(){

let user = localStorage.getItem("piUser");

document.getElementById("wallet").innerHTML =
"Ví Pi của: " + user;

}
