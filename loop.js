function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Resize window
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
