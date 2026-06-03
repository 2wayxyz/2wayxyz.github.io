/* LEAVES */

.leaf-container{
position:fixed;
inset:0;
pointer-events:none;
z-index:5;
overflow:hidden;
}

.leaf{
position:absolute;
top:-100px;
animation:leafFall linear infinite;
opacity:.7;
}

@keyframes leafFall{

0%{
transform:
translateY(-100px)
translateX(0)
rotate(0deg);
}

100%{
transform:
translateY(120vh)
translateX(200px)
rotate(360deg);
}

}

/* REVEAL */

.hidden{
opacity:0;
transform:translateY(50px);
transition:all 1s ease;
}

.show{
opacity:1;
transform:translateY(0);
}

/* SPARKLES */

.sparkle{
position:fixed;
width:4px;
height:4px;

background:white;

border-radius:50%;

pointer-events:none;

opacity:.5;

animation:sparkle 5s infinite;
}

@keyframes sparkle{

0%,100%{
opacity:0;
transform:scale(0);
}

50%{
opacity:1;
transform:scale(1.5);
}

}
