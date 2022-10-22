const slideList = document.querySelectorAll(".js-slide li");
const slideMainImg = document.querySelectorAll(".js-main-img div");

function initSlides(index) {

    slideMainImg.forEach((img) => {
      img.classList.remove("active");

    });

  slideMainImg[index].classList.add("active");

}

slideList.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    initSlides(index);
  })
});
