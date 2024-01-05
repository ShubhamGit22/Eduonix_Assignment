let isDarkMode = false;

function toggleMode() {
    const body = document.body;
    const modeText = document.getElementById('mode-text');

    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        body.classList.add('dark-mode');
        modeText.innerText = 'Dark Mode';
    } else {
        body.classList.remove('dark-mode');
        modeText.innerText = 'Light Mode';
    }
}
