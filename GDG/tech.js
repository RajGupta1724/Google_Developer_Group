document.addEventListener("DOMContentLoaded", () => {
    const languages = document.querySelectorAll(".lang div");
    const optionsDiv = document.getElementById("options");
    const langTitle = document.getElementById("lang-title");
    const dropdown = document.querySelector(".dropdown");
    const submenu = document.querySelector(".submenu");

    // Show options on left side when a language is clicked
    languages.forEach(lang => {
        lang.addEventListener("click", (event) => {
            const selectedLang = event.target.textContent;
            langTitle.textContent = `${selectedLang} Options`;

            // Position options on the left side
            optionsDiv.style.top = `100px`;  // Adjust top position as needed
            optionsDiv.style.left = `20px`;  // Fixed position on the left
            optionsDiv.style.display = "block";

            // Close the documentation submenu when switching languages
            dropdown.classList.remove("active");
        });
    });

    // Toggle submenu when "Documentation" is clicked
    dropdown.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevents closing when clicking inside submenu
        dropdown.classList.toggle("active");
    });

    // Hide options when clicking outside
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".lang") && !optionsDiv.contains(event.target)) {
            optionsDiv.style.display = "none";
            dropdown.classList.remove("active"); // Close the documentation dropdown
        }
    });
});