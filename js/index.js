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

//close navbar when clicked on link
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})
