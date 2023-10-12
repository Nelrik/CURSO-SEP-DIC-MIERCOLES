function changeAnimation() {
    var checkbox = document.getElementById('CBAnimation');
    var box = document.getElementById('animated-text');

    if (checkbox.checked) {
        box.style.animation = 'bounce 2s infinite';
        box.style.fontSize = '48px';
        box.style.color = 'red';
    } else {
        box.style.animation = 'colorChange 5s linear infinite, zoomIn 2s ease-in-out infinite';
        box.style.fontSize = '24px';
    }
  }