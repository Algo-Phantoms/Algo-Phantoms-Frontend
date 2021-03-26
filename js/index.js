// Back to top button

const backToTopButton = document.querySelector("#back-to-top-btn");
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 500) { //make the button visible
        backToTopButton.style.display = "block";
    }
    else { // hide the button
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo(0,0);
});


let emailInput = document.getElementById('emailInput');


let contact  = document.getElementById('contact');
contact.addEventListener('click' , () => {
    alert("Thanks for  Submitting ! We will get to you soon");
});

