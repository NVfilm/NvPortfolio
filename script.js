// Script to add floating animation can be enhanced here
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => {
        item.style.animation = "float 3s ease-in-out infinite";
    });
});
