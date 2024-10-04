document.querySelector('.item').addEventListener('mouseover', function() {
    this.querySelector('.overlay').style.opacity = '1';
  });
  
  document.querySelector('.item').addEventListener('mouseout', function() {
    this.querySelector('.overlay').style.opacity = '0';
  });
