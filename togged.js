const togged = document.getElementsByClassName("open");

for (let t = 0; t < togged.length; t++) {
  togged[t].addEventListener("click", function() {
     this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.display === "block"){
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
