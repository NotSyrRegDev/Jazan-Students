/* HANDILIGN SIDEBAR TOGGLE */
const mobileBar = document.querySelector('.bar--div__mobile');
const sidebarMObile = document.querySelector('.sidebar--mobile__div--jazan__students');
const closeSidebarIcon = document.querySelector('.close--sidebar__icon'); 

mobileBar.addEventListener('click' , showSidebar );
closeSidebarIcon.addEventListener('click' , hideSidebar );
function showSidebar() {   sidebarMObile.classList.add('active');}
function hideSidebar() {   sidebarMObile.classList.remove('active');}


   
 
