// Simple function for navigation
window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});


// Toggle contacts visibility
function toggleContact() {
    let contact = document.querySelector("#contact");
    let button = document.querySelector("#contacts__toggle");
    contact.classList.toggle("contact--open")
    if (button.textContent == "<") {
        button.textContent = ">"
    } else {
        button.textContent = "<"
    }
}
document.querySelector("#contacts__toggle").addEventListener("click", toggleContact);