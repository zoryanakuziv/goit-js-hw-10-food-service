import './styles.css';
import menu from './menu.json';
import MenuCard from './templates/menu-card.hbs';

const menuData = {
  menu,
};
const menuHtml = MenuCard(menuData);
document.querySelector('.js-menu').innerHTML = menuHtml;

const refs = {
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.body,
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
refs.checkbox.addEventListener('change', onInputchange);

function onInputchange(event) {
  if (refs.checkbox.checked) {
    toDarkThemeChange();
  } else {
    toLightThemeChange();
  }
}

function toDarkThemeChange() {
  refs.body.classList.add('dark-theme');
  refs.body.classList.remove('light-theme');
  localStorage.setItem('theme', Theme.DARK);
}
function toLightThemeChange() {
  refs.body.classList.replace('dark-theme', 'light-theme');
  localStorage.setItem('theme', Theme.LIGHT);
}
const checkboxLocalStorageValue = localStorage.getItem('theme');
if (checkboxLocalStorageValue === Theme.DARK) {
  refs.checkbox.checked = true;
  toDarkThemeChange();
} else {
  toLightThemeChange();
}
