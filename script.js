// Example: Show alert on clicking any navigation link
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    console.log("Navigating to section...");
  });
});
