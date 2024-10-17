document.querySelectorAll('.zoomable').forEach(img => {
  img.addEventListener('click', function () {
    if (this.style.transform === 'scale(3)') {
      this.style.transform = 'scale(1)';
    } else {
      this.style.transform = 'scale(3)';
    }
  });
});
