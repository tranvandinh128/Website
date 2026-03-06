const Pi = window.Pi;
Pi.init({ version: "2.0" });

function loginPi() {

Pi.authenticate(['username','payments'], onIncompletePaymentFound)
.then(function(auth) {

localStorage.setItem("pi_user", auth.user.username);

window.location.href="dashboard.html";

});

}

function onIncompletePaymentFound(payment) {
console.log(payment);
}
