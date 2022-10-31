function initcarouselHome() {
  const carouselContainer = document.getElementById("carousel-container");
  const slide = document.querySelector(".carousel-slide");
  const prevButton = document.getElementById("carousel-arrow-prev");
  const nextButton = document.getElementById("carousel-arrow-next");

  nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    carouselContainer.scrollLeft += slideWidth;
  });

  prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    carouselContainer.scrollLeft -= slideWidth;
  });

}

initcarouselHome();
