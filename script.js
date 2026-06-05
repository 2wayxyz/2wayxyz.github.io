// ==========================
// 2WAY MEMORIES V8 CLEAN
// ==========================

// LOADER

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 800);

        }, 1000);

    }

});

// ==========================
// MUSIC
// ==========================

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

if(musicBtn && bgMusic){

    let playing = false;

    musicBtn.addEventListener("click", () => {

        if(!playing){

            bgMusic.play();

            musicBtn.innerHTML =
            '<i class="fa-solid fa-pause"></i>';

            playing = true;

        }else{

            bgMusic.pause();

            musicBtn.innerHTML =
            '<i class="fa-solid fa-music"></i>';

            playing = false;

        }

    });

}

// ==========================
// PARALLAX HERO
// ==========================

const hero = document.querySelector(".hero");

if(hero){

    document.addEventListener("mousemove", (e) => {

        const x =
        (window.innerWidth / 2 - e.clientX) / 80;

        const y =
        (window.innerHeight / 2 - e.clientY) / 80;

        hero.style.backgroundPosition =
        `${50 + x}% ${50 + y}%`;

    });

}

// ==========================
// REVEAL ON SCROLL
// ==========================

const revealItems = document.querySelectorAll(
".film-card, .timeline-line div, .about"
);

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:0.15
}

);

revealItems.forEach(item=>{

    item.classList.add("hidden");

    observer.observe(item);

});

// ==========================
// FLOATING FLOWERS
// ==========================

const flowers =
document.querySelectorAll(".flower");

flowers.forEach((flower,index)=>{

    let t = index;

    setInterval(()=>{

        t += 0.05;

        flower.style.transform =
        `translateY(${Math.sin(t)*10}px)`;

    },30);

});

// ==========================
// CHALKBOARD GLOW
// ==========================

const board =
document.querySelector(".chalk-board");

if(board){

    let glow = 0;

    setInterval(()=>{

        glow += 0.03;

        const blur =
        15 + Math.sin(glow)*10;

        board.style.boxShadow =

        `0 25px 60px rgba(0,0,0,.4),
         0 0 ${blur}px rgba(255,255,180,.15)`;

    },40);

}

// ==========================
// FILM CARD HOVER
// ==========================

const cards =
document.querySelectorAll(".film-card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateY =
        ((x / rect.width)-0.5)*10;

        const rotateX =
        ((y / rect.height)-0.5)*-10;

        card.style.transform =

        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =

        `perspective(1000px)
         rotateX(0deg)
         rotateY(0deg)
         translateY(0px)`;

    });

});

// ==========================
// SCROLL PROGRESS BAR
// ==========================

const progress =
document.createElement("div");

progress.id = "scrollProgress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const total =

    document.documentElement.scrollHeight -
    window.innerHeight;

    const current =
    window.scrollY;

    const percent =
    (current / total) * 100;

    progress.style.width =
    percent + "%";

});
