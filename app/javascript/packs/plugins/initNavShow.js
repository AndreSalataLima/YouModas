function initNavShow() {
  const divider = document.querySelector(".nav-divider");
  const nav = document.querySelector(".js-nav");
  const isCloseToTop = divider.getBoundingClientRect().top < 60;

    if (isCloseToTop) {
      nav.classList.replace("js-navDontShow", "js-navShow");
    } else {
      nav.classList.replace("js-navShow", "js-navDontShow");
    }

}
initNavShow()

window.addEventListener('scroll', initNavShow);
initNavShow()
