document.addEventListener("DOMContentLoaded", function() {
    const footer= document.querySelector("footer");

    footer.addEvenListener("click", function() {
        this.syle.backgroundColor= "blue";
    })
})