// Back to top button

const backToTopButton = document.querySelector("#back-to-top-btn");
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 500) { //make the button visible
        backToTopButton.classList.add("active");
    }
    else { // hide the button
        backToTopButton.classList.remove("active");
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo(0,0);
});

// faq section 

$("#faqaccordion").on("hide.bs.collapse show.bs.collapse", e => {
    $(e.target)
      .prev()
      .find("i:last-child")
      .toggleClass("fa-minus fa-plus");
  });