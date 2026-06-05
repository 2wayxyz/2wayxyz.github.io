// =======================
// 2WAY MEMORIES V10
// =======================

// MUSIC

const musicBtn =
document.getElementById("musicBtn");

const bgMusic =
document.getElementById("bgMusic");

let isPlaying = false;

if(musicBtn && bgMusic){

musicBtn.addEventListener(
"click",
()=>{

if(!isPlaying){

bgMusic.volume = 0.4;

bgMusic.play();

musicBtn.innerHTML = "❚❚";

isPlaying = true;

}else{

bgMusic.pause();

musicBtn.innerHTML = "♫";

isPlaying = false;

}

});

}

// =======================
// CURSOR GLOW
// =======================

const cursorGlow =
document.getElementById(
"cursorGlow"
);

document.addEventListener(
"mousemove",
(e)=>{

if(!cursorGlow) return;

cursorGlow.style.left =
e.clientX + "px";

cursorGlow.style.top =
e.clientY + "px";

}
);

// =======================
// PARALLAX BACKGROUND
// =======================

document.addEventListener(
"mousemove",
(e)=>{

const x =

(window.innerWidth/2
- e.clientX) / 80;

const y =

(window.innerHeight/2
- e.clientY) / 80;

document.body.style.backgroundPosition =

`${50+x}% ${50+y}%`;

}
);

// =======================
// CARD HOVER 3D
// =======================

const cards =
document.querySelectorAll(
".album-card"
);

cards.forEach(card=>{

card.addEventListener(
"mousemove",
(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateY =

((x / rect.width)
- 0.5) * 14;

const rotateX =

((y / rect.height)
- 0.5) * -14;

card.style.transform =

`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
scale(1.04)
`;

});

card.addEventListener(
"mouseleave",
()=>{

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

// =======================
// HERO FADE IN
// =======================

const heroContent =
document.querySelector(
".hero-content"
);

if(heroContent){

heroContent.style.opacity = "0";

heroContent.style.transform =
"translateY(40px)";

heroContent.style.transition =
"all 1.2s ease";

window.addEventListener(
"load",
()=>{

setTimeout(()=>{

heroContent.style.opacity = "1";

heroContent.style.transform =
"translateY(0px)";

},300);

});

}

// =======================
// ALBUM FADE IN
// =======================

cards.forEach((card,index)=>{

card.style.opacity = "0";

card.style.transform =
"translateY(50px)";

card.style.transition =
"all .8s ease";

setTimeout(()=>{

card.style.opacity = "1";

card.style.transform =
"translateY(0px)";

},500 + (index * 200));

});

// =======================
// PRELOAD IMAGES
// =======================

const imgs =
document.querySelectorAll(
"img"
);

imgs.forEach(img=>{

const image =
new Image();

image.src = img.src;

});

// =======================
// SMOOTH OPEN LINKS
// =======================

document.querySelectorAll(
".album-card"
).forEach(link=>{

link.addEventListener(
"click",
()=>{

link.style.opacity = ".8";

});

});

// =======================
// MOBILE OPTIMIZATION
// =======================

if(window.innerWidth < 768){

document.body.classList.add(
"mobile"
);

}

// =======================
// CONSOLE
// =======================

console.log(
"2WAY MEMORIES V10 Loaded"
);
