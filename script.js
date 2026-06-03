document.addEventListener("DOMContentLoaded", () => {
    
    // จัดการระบบสไลด์การ์ดความทรงจำม้วนฟิล์มซ้าย-ขวาผ่านปุ่มลูกศร
    const filmTrack = document.getElementById('filmTrack');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    if (filmTrack && leftArrow && rightArrow) {
        const scrollAmount = 300; // ระยะการเลื่อนพิกเซลต่อการกดหนึ่งครั้ง

        leftArrow.addEventListener('click', () => {
            filmTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        rightArrow.addEventListener('click', () => {
            filmTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

});

// ฟังก์ชันเปิด-ปิดเสียงเพลงพื้นหลังของเว็บไซต์
function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    if (audio) {
        if (audio.paused) {
            audio.play().catch(err => console.log("รอการตอบรับจากผู้ใช้เพื่อเล่นเสียง"));
        } else {
            audio.pause();
        }
    }
}
