document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".button");
    const searchBar = document.getElementById("searchBar");
    const biographyCards = document.querySelectorAll(".biography-card");

    // Alert on button click
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const name = button.closest(".biography-card").querySelector("h2").innerText;
            alert(`Anda akan melihat biografi ${name}`);
            window.location.href = button.getAttribute("href");
        });
    });

    // Search functionality
    searchBar.addEventListener("input", (event) => {
        const searchValue = event.target.value.toLowerCase();
        biographyCards.forEach(card => {
            const name = card.querySelector("h2").innerText.toLowerCase();
            card.style.display = name.includes(searchValue) ? "block" : "none";
        });
    });
});
