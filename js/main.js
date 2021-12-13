var toggle = document.querySelector('#toggle');
var menu = document.querySelector('.menu-nav');
var menuItems = document.querySelectorAll('.menu-nav li a');

toggle.addEventListener('click', function(){
  if (menu.classList.contains('is-active')) {
    this.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-active');
  } else {
    menu.classList.add('is-active');
    this.setAttribute('aria-expanded', 'true');
    //menuItems[0].focus();
  }
});

// theme-toggle
function getUserPreference() {
  return localStorage.getItem('theme') || 'system';
}
function saveUserPreference(userPreference) {
  localStorage.setItem('theme', userPreference);
}

function getAppliedMode(userPreference) {
  if (userPreference === 'light') {
    return 'light';
  }
  if (userPreference === 'dark') {
    return 'dark';
  }
  // system
  if (matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  return 'dark';
}

const colorScheme = document.querySelector('meta[name="color-scheme"]');
function setAppliedMode(mode) {
  document.body.className = mode;
  colorScheme.content = mode;
}

function rotatePreferences(userPreference) {
  if (userPreference === 'system') {
    return 'light'
  }
  if (userPreference === 'light') {
    return 'dark';
  }
  if (userPreference === 'dark') {
    return 'system';
  }
  // for invalid values, just in case
  return 'system';
}

// const themeDisplay = document.getElementById('mode');
const themeToggler = document.querySelector('.theme-toggle');

let userPreference = getUserPreference();
setAppliedMode(getAppliedMode(userPreference));
// themeDisplay.innerText = userPreference;

themeToggler.onclick = () => {
  const newUserPref = rotatePreferences(userPreference);
  userPreference = newUserPref;
  saveUserPreference(newUserPref);
  // themeDisplay.innerText = newUserPref;
  setAppliedMode(getAppliedMode(newUserPref));
}
