const hamburger = document.querySelector(".hamburger")
const span1 = document.querySelector(".span1")
const span2 = document.querySelector(".span2")
const span3 = document.querySelector(".span3")
const navLinks = document.querySelectorAll(".nav-links")
const linkBtnContainer = document.querySelector(".links-btn-container")
const headerLinks = document.querySelector(".header-links")
const headerBtns = document.querySelector(".header-btns")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("inner")
    span1.classList.toggle("inner")
    span2.classList.toggle("inner")
    span3.classList.toggle("inner")
    linkBtnContainer.classList.toggle("inner")
    headerLinks.classList.toggle("inner")
    headerBtns.classList.toggle("inner")
})

navLinks.forEach((e) => {
    e.addEventListener("click", () => {
        hamburger.classList.remove("inner")
        span1.classList.remove("inner")
        span2.classList.remove("inner")
        span3.classList.remove("inner")
        linkBtnContainer.classList.remove("inner")
        headerLinks.classList.remove("inner")
        headerBtns.classList.remove("inner")
    })
})

document.addEventListener("click", (event) => {
  const clickedInsideMenu = hamburger.contains(event.target) ||
                            linkBtnContainer.contains(event.target) ||
                            headerLinks.contains(event.target) ||
                            headerBtns.contains(event.target);

  if (!clickedInsideMenu) {
    hamburger.classList.remove("inner");
    span1.classList.remove("inner");
    span2.classList.remove("inner");
    span3.classList.remove("inner");
    linkBtnContainer.classList.remove("inner");
    headerLinks.classList.remove("inner");
    headerBtns.classList.remove("inner");
  }
});


