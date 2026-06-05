```javascript
// =========================
// 2WAY MEMORIES V11
// =========================

// CURSOR GLOW

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

// =========================
// MUSIC PLAYER
// =========================

const musicBtn =
document.getElementById(
"musicBtn"
);

const bgMusic =
document.getElementById(
"bgMusic"
);

let isPlaying = false;

if(musicBtn && bgMusic){

musicBtn.addEventListener(
"click",
()=>{

if(!isPlaying){

bgMusic.volume = 0.4;

bgMusic.play();

musicBtn.innerHTML =
"❚❚";

isPlaying = true;

}else{

bgMusic.pause();

musicBtn.innerHTML =
"♫";

isPlaying = false;

}

});

}

// =========================
// HERO FADE IN
// =========================

window.addEventListener(
"load",
()=>{

const hero =
document.querySelector(
".hero-content"
);

if(hero){

hero.style.opacity = "0";

hero.style.transform =
"translateY(40px)";

hero.style.transition =
"all 1.2s ease";

setTimeout(()=>{

hero.style.opacity = "1";

hero.style.transform =
"translateY(0px)";

},300);

}

}
);

// =========================
// ALBUM CARD EFFECT
// =========================

const cards =
document.querySelectorAll(
".album-card"
);

cards.forEach((card,index)=>{

card.style.opacity = "0";

card.style.transform =
"translateY(40px)";

card.style.transition =
"all .8s ease";

setTimeout(()=>{

card.style.opacity = "1";

card.style.transform =
"translateY(0px)";

},500 + (index * 150));

});

// =========================
// 3D HOVER
// =========================

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
- 0.5) * 10;

const rotateX =

((y / rect.height)
- 0.5) * -10;

card.style.transform =

`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-6px)
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
`;

});

});

// =========================
// PARALLAX BACKGROUND
// =========================

document.addEventListener(
"mousemove",
(e)=>{

const x =

(window.innerWidth / 2
- e.clientX) / 120;

const y =

(window.innerHeight / 2
- e.clientY) / 120;

document.body.style.backgroundPosition =

`${50 + x}% ${50 + y}%`;

}
);

// =========================
// PRELOAD
// =========================

window.addEventListener(
"load",
()=>{

console.log(
"2WAY MEMORIES V11 Loaded"
);

}
);
```
