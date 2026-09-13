/* =========================================================
   ONKAR BUILDWELL
   WEBSITE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            mainNav.classList.toggle("open");

            menuToggle.textContent =
                mainNav.classList.contains("open")
                    ? "×"
                    : "☰";
        });


        document.querySelectorAll(".nav-link").forEach(link => {

            link.addEventListener("click", function () {

                mainNav.classList.remove("open");

                menuToggle.textContent = "☰";

            });

        });

    }


    /* =====================================================
       HERO SLIDER
    ===================================================== */

    const slides =
        document.querySelectorAll(".hero-slide");

    const dots =
        document.querySelectorAll(".dot");

    const nextButton =
        document.getElementById("nextSlide");

    const prevButton =
        document.getElementById("prevSlide");

    let currentSlide = 0;

    let sliderTimer;


    function showSlide(index) {

        if (!slides.length) return;

        if (index >= slides.length) {
            index = 0;
        }

        if (index < 0) {
            index = slides.length - 1;
        }

        currentSlide = index;


        slides.forEach((slide, i) => {

            slide.classList.toggle(
                "active",
                i === currentSlide
            );

        });


        dots.forEach((dot, i) => {

            dot.classList.toggle(
                "active",
                i === currentSlide
            );

        });

    }


    function nextSlide() {

        showSlide(currentSlide + 1);

        resetSlider();

    }


    function previousSlide() {

        showSlide(currentSlide - 1);

        resetSlider();

    }


    function resetSlider() {

        clearInterval(sliderTimer);

        sliderTimer = setInterval(
            () => showSlide(currentSlide + 1),
            6000
        );

    }


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            nextSlide
        );

    }


    if (prevButton) {

        prevButton.addEventListener(
            "click",
            previousSlide
        );

    }


    dots.forEach((dot, index) => {

        dot.addEventListener("click", function () {

            showSlide(index);

            resetSlider();

        });

    });


    showSlide(0);

    resetSlider();


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("main section[id]");

    const navLinks =
        document.querySelectorAll(".nav-link");


    function updateActiveNavigation() {

        let currentSection = "home";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            const href =
                link.getAttribute("href");

            link.classList.toggle(
                "active",
                href === "#" + currentSection
            );

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();


    /* =====================================================
       REAL OPENSTREETMAP MAP
    ===================================================== */

    const mapElement =
        document.getElementById("map");


    if (mapElement && typeof L !== "undefined") {

        const amritsar =
            [31.6340, 74.8723];

        const batala =
            [31.8186, 75.2029];


        const map =
            L.map("map", {

                scrollWheelZoom: false

            }).setView(amritsar, 10);


        L.tileLayer(
            "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            {

                maxZoom: 19,

                attribution:
                    '&copy; OpenStreetMap contributors'

            }
        ).addTo(map);


        const goldIcon =
            L.divIcon({

                className: "",

                html:
                    '<div class="custom-marker"></div>',

                iconSize: [18,18],

                iconAnchor: [9,9]

            });


        const amritsarMarker =
            L.marker(
                amritsar,
                { icon: goldIcon }
            ).addTo(map);


        amritsarMarker.bindPopup(
            `
            <strong>Onkar Buildwell</strong><br>
            Amritsar Service Area
            `
        );


        const batalaMarker =
            L.marker(
                batala,
                { icon: goldIcon }
            ).addTo(map);


        batalaMarker.bindPopup(
            `
            <strong>Onkar Buildwell</strong><br>
            Batala Service Area
            `
        );


        L.polyline(
            [
                amritsar,
                batala
            ],
            {

                color: "#c9952e",

                weight: 3,

                opacity: 0.8,

                dashArray: "8 8"

            }
        ).addTo(map);


        map.fitBounds(
            [
                amritsar,
                batala
            ],
            {
                padding: [50,50]
            }
        );

    }


    /* =====================================================
       FORM HANDLING
    ===================================================== */

    const quoteForm =
        document.getElementById("quoteForm");

    const careerForm =
        document.getElementById("careerForm");


    if (quoteForm) {

        quoteForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                alert(
                    "Thank you for your enquiry. " +
                    "Please call Onkar Buildwell directly " +
                    "for immediate assistance."
                );

                quoteForm.reset();

            }
        );

    }


    if (careerForm) {

        careerForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                alert(
                    "Thank you for your application. " +
                    "The Onkar Buildwell team will review " +
                    "your details."
                );

                careerForm.reset();

            }
        );

    }


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const year =
        document.getElementById("year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

});
