function piLogin(){

Pi.init({ version: "2.0" });

const scopes = ['username','payments'];

function onIncompletePaymentFound(payment){
console.log(payment);
}

Pi.authenticate(scopes,onIncompletePaymentFound)
.then(function(auth){

console.log(auth);

localStorage.setItem("piUser",auth.user.username);

window.location.href="dashboard.html";

});

}
