let currentPage = 0;
let isAnimating = false;

window.addEventListener('click', () => {
    if (isAnimating || currentPage >= pageCount) return;

    isAnimating = true;
    const page = pages[currentPage];

    gsap.to(page.rotation, {
        y: -Math.PI, // Quay 180 độ
        duration: 1.5,
        ease: "power2.inOut",
        onComplete: () => {
            isAnimating = false;
            currentPage++;
        }
    });

    // Nâng trang lên một chút khi đang lật để tránh bị đè (Z-fighting)
    gsap.to(page.position, {
        z: currentPage * 0.1,
        duration: 0.75,
        yoyo: true,
        repeat: 1
    });
});
