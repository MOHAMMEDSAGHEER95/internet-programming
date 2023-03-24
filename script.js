function print5() {
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
}

function changeHeader() {
  let element = document.getElementById("heading");
  let paragraph = document.getElementById("paragraph")
  element.innerHTML = "New Heading";
  paragraph.innerHTML = "New Paragraph"

}


print5();
print5();
let btn = document.getElementById("btn_change");
let heading = document.getElementById("heading");
let paragraph = document.getElementById("paragraph");


heading.addEventListener("click", function () {
  this.innerHTML = "Changed"
});

paragraph.addEventListener("click", function () {
  this.innerHTML = "paragraph Changed"
});


// document.addEventListener("click", changeHeader);
