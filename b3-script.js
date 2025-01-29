document.getElementById("load").addEventListener("click", function() {
    const container = document.getElementById("newGrid");
    const btnText = document.getElementById("load");

    if (!container) {
        console.error("Element with ID 'newGrid' not found!");
        return;
    }

    if (container.style.display === "none") {
        container.style.display = "grid"; 
        btnText.innerHTML = "LESS WORKS";
    } else {
        container.style.display = "none";
        btnText.innerHTML = "MORE WORKS";
    }
});
