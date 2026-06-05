// =========================
// 2WAY MEMORIES V9
// =========================

// LOADER

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});

// =========================
// MUSIC
// =========================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

if (musicBtn && music) {

    musicBtn.addEventListener("click", () => {

        if (!playing) {

            music.volume = 0.4;

            music.play();

            musicBtn.innerHTML =
                '<i class="fa-solid fa-pause"></i>';

            playing = true;

        } else {

            music.pause();

            musicBtn.innerHTML =
                '<i class="fa-solid fa-music"></i>';

            playing = false;

        }

    });

}

// =========================
// HERO PARALLAX
// =========================

const hero = document.querySelector(".hero");

document.addEventListener("mousemove", (e) => {

    if (!hero) return;

    const x =
        (window.innerWidth / 2 - e.clientX) / 80;

    const y =
        (window.innerHeight / 2 - e.clientY) / 80;

    hero.style.backgroundPosition =
        `${50 + x}% ${50 + y}%`;

});

// =========================
// CURSOR GLOW
// =========================

const cursor =
document.getElementById("cursorGlow");

document.addEventListener("mousemove", (e) => {

    if (!cursor) return;

    cursor.style.left =
        e.clientX + "px";

    cursor.style.top =
        e.clientY + "px";

});

// =========================
// SCROLL PROGRESS
// =========================

const progress =
document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {

    if (!progress) return;

    const totalHeight =

        document.documentElement.scrollHeight -
        window.innerHeight;

    const progressWidth =

        (window.scrollY / totalHeight) * 100;

    progress.style.width =
        progressWidth + "%";

});

// =========================
// FILM CARD TILT
// =========================

const cards =
document.querySelectorAll(".film-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 12;

        const rotateX =
            ((y / rect.height) - 0.5) * -12;

        card.style.transform =

            `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
            scale(1.03)
            `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =

            `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
            scale(1)
            `;

    });

});

// =========================
// REVEAL EFFECT
// =========================

const revealElements =
document.querySelectorAll(

".timeline-card, .about-image, .about-content, .gallery-item"

);

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0px)";

        }

    });

},

{
    threshold: 0.15
}

);

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform =
        "translateY(50px)";

    el.style.transition =
        "all 1s ease";

    observer.observe(el);

});

// =========================
// CAMERA FLOAT
// =========================

const camera =
document.querySelector(".camera");

if (camera) {

    let t = 0;

    setInterval(() => {

        t += 0.03;

        camera.style.transform =

            `
            translateY(${Math.sin(t) * 12}px)
            rotate(-6deg)
            `;

    }, 20);

}

// =========================
// CHALKBOARD GLOW
// =========================

const board =
document.querySelector(".chalk-board");

if (board) {

    let glow = 0;

    setInterval(() => {

        glow += 0.04;

        const blur =

            25 + Math.sin(glow) * 15;

        board.style.boxShadow =

            `
            0 30px 90px rgba(0,0,0,.5),
            0 0 ${blur}px rgba(255,255,180,.12)
            `;

    }, 40);

}

// =========================
// BACK TO TOP
// =========================

const backTop =
document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (!backTop) return;

    if (window.scrollY > 500) {

        backTop.style.opacity = "1";
        backTop.style.visibility = "visible";

    } else {

        backTop.style.opacity = "0";
        backTop.style.visibility = "hidden";

    }

});

if (backTop) {

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// =========================
// FLOATING LIGHTS
// =========================

const lights =
document.querySelectorAll(".light");

lights.forEach((light, index) => {

    let move = index * 100;

    setInterval(() => {

        move += 0.5;

        light.style.transform =

            `
            translateY(${Math.sin(move * 0.02) * 30}px)
            translateX(${Math.cos(move * 0.015) * 20}px)
            `;

    }, 30);

});

// =========================
// AUTO HIDE SIDEBAR MOBILE
// =========================

if (window.innerWidth < 700) {

    const sidebar =
    document.querySelector(".sidebar");

    if (sidebar) {

        sidebar.style.display = "none";

    }

}
