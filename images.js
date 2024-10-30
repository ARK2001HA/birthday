function openGift() {
    // Get the gallery section
    const gallery = document.getElementById("gallery");

    // Toggle visibility of the gallery
    if (gallery.style.display === "none" || gallery.style.display === "") {
        gallery.style.display = "grid"; // Show the gallery
    } else {
        gallery.style.display = "none"; // Hide the gallery
    }
}
