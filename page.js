const pageGeometry = new THREE.BoxGeometry(5, 7, 0.05); // Rộng 5, Cao 7, Dày 0.05
const pages = [];
const pageCount = 5;

function createPage(index) {
    // Màu sắc khác nhau cho mỗi trang để dễ phân biệt
    const material = new THREE.MeshPhongMaterial({ color: Math.random() * 0xffffff });
    const pageMesh = new THREE.Mesh(pageGeometry, material);
    
    // Đẩy Mesh sang phải để mép trái nằm đúng vị trí (0,0,0) của Group
    pageMesh.position.x = 2.5; 
    pageMesh.castShadow = true;

    const pivot = new THREE.Group();
    pivot.add(pageMesh);
    pivot.position.z = -index * 0.06; // Xếp chồng các trang lên nhau một chút theo trục Z//
    
    scene.add(pivot);
    return pivot;
}

for (let i = 0; i < pageCount; i++) {
    pages.push(createPage(i));
}
