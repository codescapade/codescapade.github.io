function toggleTheme() {
  let newStatus = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
  setTheme(newStatus);
}

function setTheme(theme) {
  const suns = document.getElementsByClassName('sun-icon');
  const moons = document.getElementsByClassName('moon-icon');
  if (theme == 'light') {
    document.body.className = '';
    for (let sun of suns) {
      sun.style.display = 'none';
    }

    for (let moon of moons) {
      moon.style.display = 'inline-block';
    }
  } else {
    document.body.className = 'dark-theme';
    for (let sun of suns) {
      sun.style.display = 'inline-block';
    }

    for (let moon of moons) {
      moon.style.display = 'none';
    }
  }
  localStorage.setItem('theme', theme);
  console.log('test');
}

window.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme') || 'light';
  setTheme(theme);

  document.body.style.visibility = 'visible';
  document.body.style.opacity = 1;
});