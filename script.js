var button = document.getElementById("button");
var time = 5;

var timer = setTimeout(function() {
    clearInterval(interval);
    button.innerHTML = "Annuler le compte à rebours (0s)";
    alert("Vous n'êtes pas très réactif, vous !");
}, 5000);


var interval = setInterval(function() {
    button.innerHTML = "Annuler le compte à rebours (" + --time + "s)";    
}, 1000);

button.addEventListener("click", function() {
    clearTimeout(timer);
    clearInterval(interval);
    button.innerHTML = "Annuler le compte à rebours";
    alert("Le compte à rebours à bien été annulé");
});


