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
      moon.style.display = 'block';
    }
  } else {
    document.body.className = 'dark-theme';
    for (let sun of suns) {
      sun.style.display = 'block';
    }

    for (let moon of moons) {
      moon.style.display = 'none';
    }
  }
  localStorage.setItem('theme', theme);
}

let theme = localStorage.getItem('theme') || 'light';
document.body.className = `${theme}-theme`; 
setTheme(theme);