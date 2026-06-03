document.addEventListener("DOMContentLoaded", () => {
    
    // === 1. ระบบควบคุมแถบม้วนฟิล์มสไลเดอร์ (Film Slider Controls) ===
    const filmTrack = document.getElementById('filmTrack');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (filmTrack && prevBtn && nextBtn) {
        const scrollStep = 320; // ระยะการเลื่อนพิกเซลต่อการกด 1 ครั้ง

        // คลิกเลื่อนไปทางซ้าย
        prevBtn.addEventListener('click', () => {
            filmTrack.scrollBy({ left: -scrollStep, behavior: 'smooth' });
        });

        // คลิกเลื่อนไปทางขวา
        nextBtn.addEventListener('click', () => {
            filmTrack.scrollBy({ left: scrollStep, behavior: 'smooth' });
        });

        // === 2. ฟังก์ชันคลิกเมาส์ค้างแล้วลากซ้าย-ขวาเพื่อเลื่อน (Drag-to-Scroll) ===
        let isPressed = false;
        let startXPosition;
        let initialScrollLeft;

        filmTrack.addEventListener('mousedown', (e) => {
            isPressed = true;
            filmTrack.style.cursor = 'grabbing';
            startXPosition = e.pageX - filmTrack.offsetLeft;
            initialScrollLeft = filmTrack.scrollLeft;
        });

        filmTrack.addEventListener('mouseleave', () => {
            isPressed = false;
            filmTrack.style.cursor = 'grab';
        });

        filmTrack.addEventListener('mouseup', () => {
            isPressed = false;
            filmTrack.style.cursor = 'grab';
        });

        filmTrack.addEventListener('mousemove', (e) => {
            if (!isPressed) return;
            e.preventDefault();
            const currentX = e.pageX - filmTrack.offsetLeft;
            const distanceMoved = (currentX - startXPosition) * 1.5; // ปรับความเร็วลากตรงคูณตัวเลขท้าย
            filmTrack.scrollLeft = initialScrollLeft - distanceMoved;
        });
    }

});
