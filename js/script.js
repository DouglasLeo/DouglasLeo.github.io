function smoothScroll(){
  const menu = document.querySelectorAll('.navigation-menu a[href^="#"]');

  function smoothScrollEvent(e) {
    e.preventDefault();
    const elementLink = e.currentTarget.getAttribute('href');
    const element = document.querySelector(elementLink);

    element.scrollIntoView({behavior: 'smooth'});
  }

  menu.forEach((menuItem) => {
  menuItem.addEventListener('click', smoothScrollEvent);
  })
}

smoothScroll();