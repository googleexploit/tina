const imgContents = document.querySelectorAll('.img-content-hover');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX; // Get mouse X position relative to viewport
    const y = e.clientY; // Get mouse Y position relative to viewport
    
    imgContents.forEach((imgContent) => {
        imgContent.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
});