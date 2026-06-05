/* Scroll Progress */

#scrollProgress{

position:fixed;

top:0;
left:0;

height:4px;

width:0;

background:

linear-gradient(
90deg,
#ffd86a,
#ff8fc0,
#53e6ff
);

z-index:999999;

}

/* Cursor Glow */

#cursorGlow{

position:fixed;

width:180px;
height:180px;

border-radius:50%;

background:

radial-gradient(
circle,
rgba(255,255,255,.12),
transparent 70%
);

pointer-events:none;

transform:
translate(-50%,-50%);

z-index:3;

}
