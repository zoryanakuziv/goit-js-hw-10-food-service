import './styles.css';
import menu from './menu.json';
import MenuCard from './templates/menu-card.hbs';
const menuData = {
  menu: menu,
};
const menuHtml = MenuCard(menuData);
console.log(menuHtml);
document.querySelector('.js-menu').innerHTML = menuHtml;
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
  checkbox: document.querySelector('#theme-switch-toggle'),
};

refs.checkbox.addEventListener('change', onInputchange);

function onInputchange(event) {
  if (!document.body.classList.contains('dark-theme')) {
    document.body.classList.toggle('dark-theme');
    document.body.classList.remove('light-theme');
    localStorage.setItem('DARK', 'theme');
  } else document.body.classList.replace('dark-theme', 'light-theme');
  localStorage.remove('DARK', 'theme');
  localStorage.setItem('LIGHT', 'theme');
}
