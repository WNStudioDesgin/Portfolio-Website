/* ================= SCROLL REVEAL ANIMATION ================= */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ================= NAVBAR ACTIVE LINK ================= */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
    link.addEventListener("click", function () {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });
});


/* ================= BACK TO TOP BUTTON ================= */

const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }

});

backToTopButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= MOBILE MENU ================= */

const menuIcon = document.querySelector(".menu-icon");

if (menuIcon) {
    menuIcon.addEventListener("click", () => {
        alert("Mobile menu اگلے مرحلے میں مکمل فعال کریں گے۔");
    });
}


/* ================= PROJECT POPUP / MODAL ================= */

const projectModal = document.getElementById("projectModal");
const projectFrame = document.getElementById("projectFrame");
const closeModal = document.getElementById("closeModal");

const projectButtons = document.querySelectorAll(".view-project");

projectButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
        event.preventDefault();

        // ہر button کے href سے project image کا path لے گا
        const projectLink = this.getAttribute("href");

        if (projectLink && projectModal && projectFrame) {
            projectFrame.src = projectLink;

            projectModal.classList.add("active");

            // Popup کھلنے پر background scroll بند ہو جائے گا
            document.body.style.overflow = "hidden";
        }
    });
});


function closeProjectModal() {
    if (projectModal) {
        projectModal.classList.remove("active");
    }

    if (projectFrame) {
        projectFrame.src = "";
    }

    // Popup بند ہونے پر scroll دوبارہ شروع ہو جائے گا
    document.body.style.overflow = "auto";
}


/* Cross × button سے popup بند ہوگا */
if (closeModal) {
    closeModal.addEventListener("click", closeProjectModal);
}


/* Popup کے باہر dark background پر click کرنے سے بند ہوگا */
if (projectModal) {
    projectModal.addEventListener("click", function (event) {
        if (event.target === projectModal) {
            closeProjectModal();
        }
    });
}


/* Keyboard سے Escape دبانے پر popup بند ہوگا */
document.addEventListener("keydown", function (event) {
    if (
        event.key === "Escape" &&
        projectModal &&
        projectModal.classList.contains("active")
    ) {
        closeProjectModal();
    }
});