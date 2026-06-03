document.addEventListener("DOMContentLoaded", () => {
    
    // ระบบคลิกที่ลูกศรเพื่อเลื่อนแถบม้วนฟิล์มสไลเดอร์ซ้าย-ขวา
    const filmTrack = document.getElementById('filmTrack');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    if (filmTrack && leftArrow && rightArrow) {
        const scrollAmount = 300; 

        leftArrow.addEventListener('click', () => {
            filmTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        rightArrow.addEventListener('click', () => {
            filmTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

});

// ฟังชั่นสลับเปิด-ปิดเพลงสำหรับปุ่มบนเมนูบาร์
function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    if (audio) {
        if (audio.paused) {
            audio.play().catch(err => console.log("Audio playback waiting for user interaction."));
        } else {
            audio.pause();
        }
    }
}
