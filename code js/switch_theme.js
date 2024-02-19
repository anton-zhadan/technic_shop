let switchMode = document.querySelector('#switch_mode');

switchMode.onclick = function() {
    let theme = document.getElementById('light_theme');

    if (theme.getAttribute('href') == 'main.css') {
        theme.href = 'dark_theme.css';
    } else {
        theme.href = 'main.css';
    }
}