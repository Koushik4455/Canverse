document.addEventListener('DOMContentLoaded', function() {
    var openButton = document.getElementById('openButton');
    var modal = document.getElementById('myModal');
    var closeButton = document.getElementById('closeButton');
  
    openButton.addEventListener('click', function() {
      modal.style.display = 'block';
    });
  
    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  