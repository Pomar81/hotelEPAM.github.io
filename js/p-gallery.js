var pageNav = generateMenu(document.querySelector('.page-header__nav'));
if(pageNav) {
  pageNav.init();
  pageNav.fixTop();
}