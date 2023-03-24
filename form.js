var btn = document.getElementById("btn");

var edtText = document.getElementById("edtText");
var displayText = document.getElementById("displayText");


btn.addEventListener("click", function (){

    
    alert(edtText.value)
    
});

edtText.addEventListener("keyup", function() {
    displayText.innerHTML = `<h1> ${this.value}</h1>`;
})

btn.addEventListener("click", function() {
    document.body.style.background = "blue";
})


var circle = document.getElementById("circle")

circle.addEventListener("click", function() {
    var opacity = document.getElementById("circle").style.opacity;
    console.log(opacity);
    document.getElementById("circle").style.opacity = parseFloat(opacity) - 0.1;
});


document.addEventListener("keydown", function(event) {
    console.log(event.keyCode)
    console.log(document.getElementById("circle").style.left - 10 + 'px');
    document.getElementById("circle").style.left = parseInt(document.getElementById("circle").style.left) + 10 + 'px';
})