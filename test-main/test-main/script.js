const control = document.getElementById('darkAndLight');
control.addEventListener('change', function() {
    if (control.checked) {
      onDarkMode();
    } else {
      offDarkMode();
    }
  });

  function onDarkMode() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  }

  function offDarkMode() {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
  }