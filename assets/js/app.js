const buttons = document.querySelectorAll(".btn");
const items = document.querySelectorAll(".item");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // remove 'active' from all buttons
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    items.forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  });
});

// fuulyear
const YearText = document.getElementById("year");
const year = new Date();
YearText.innerText = year.getFullYear();

// sticky header
const headerSticky = document.querySelector(".header-section");
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    headerSticky.classList.add("sticky");
  } else {
    headerSticky.classList.remove("sticky");
  }
});

// faq
const faqList = document.querySelectorAll(".faq");

faqList.forEach((item) => {
  const btn = item.querySelector("h4.title");
  btn.addEventListener("click", (e) => {
    faqList.forEach((faq) => faq.classList.remove("active"));
    item.classList.toggle("active");
  });
});

const imgHeight = document.querySelectorAll(".masonry .item");
imgHeight.forEach((img) => {
  const min = 350;
  const max = 480;
  const randomHeight = Math.floor(Math.random() * (max - min + 1)) + min;
  img.style.height = `${randomHeight}px`;
});
