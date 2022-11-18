// -------------------Navbar------------------------
const navbar = document.querySelector(".navbar");
const my_head = document.querySelector(".head");

const headObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navbar.classList.remove("pop-up");
            setTimeout(() => {
                navbar.classList.remove("fixed");
            }, 100);
        } else {
            navbar.classList.add("fixed");
            setTimeout(() => {
                navbar.classList.add("pop-up");
            }, 100);
        }
    });
});

headObserver.observe(my_head);

// -------------------features------------------------

const parents = document.querySelectorAll(".animate");

const featuresObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.childNodes.forEach((child) => {
                    if (child instanceof HTMLImageElement) {
                        child.classList.add("fade-in");
                        child.classList.add("fade-in");
                    } else if (child instanceof HTMLDivElement) {
                        child.childNodes.forEach((ele) => {
                            if (ele instanceof HTMLHeadingElement) {
                                ele.classList.add("fade-in");
                            } else if (ele instanceof HTMLParagraphElement) {
                                ele.classList.add("fade-in");
                            } else if (ele instanceof HTMLButtonElement) {
                                ele.classList.add("fade-in");
                            }
                        });
                    }
                });
            }
        });
    },
    {
        threshold: 0.6,
    }
);

parents.forEach((parent) => {
    featuresObserver.observe(parent);
});
