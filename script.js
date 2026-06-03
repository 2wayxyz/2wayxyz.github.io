document.addEventListener("DOMContentLoaded", () => {
    
    // === 1. ระบบควบคุมการเลื่อนม้วนฟิล์มสไลเดอร์ (Film Slide Click Controls) ===
    const filmTrack = document.getElementById('filmTrack');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');

    if (filmTrack && prevArrow && nextArrow) {
        const scrollDistance = 340; // ระยะการเลื่อนพิกเซลต่อการคลิก 1 ครั้ง

        // คลิกปุ่มลูกศรซ้าย
        prevArrow.addEventListener('click', () => {
            filmTrack.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
        });

        // คลิกปุ่มลูกศรขวา
        nextArrow.addEventListener('click', () => {
            filmTrack.scrollBy({ left: scrollDistance, behavior: 'smooth' });
        });

        // === 2. ระบบ Drag-to-Scroll (คลิกเมาส์ค้างแล้วลากซ้าย-ขวาเพื่อเลื่อนดูฟิล์ม) ===
        let isMousedown = false;
        let startXPosition;
        let currentScrollLeft;

        filmTrack.addEventListener('mousedown', (e) => {
            isMousedown = true;
            filmTrack.style.cursor = 'grabbing';
            startXPosition = e.pageX - filmTrack.offsetLeft;
            currentScrollLeft = filmTrack.scrollLeft;
        });

        filmTrack.addEventListener('mouseleave', () => {
            isMousedown = false;
            filmTrack.style.cursor = 'grab';
        });

        filmTrack.addEventListener('mouseup', () => {
            isMousedown = false;
            filmTrack.style.cursor = 'grab';
        });

        filmTrack.addEventListener('mousemove', (e) => {
            if (!isMousedown) return;
            e.preventDefault();
            const x = e.pageX - filmTrack.offsetLeft;
            const walkDistance = (x - startXPosition) * 1.6; // ปรับตัวคูณเพื่อเพิ่มความไวตอนลากเมาส์
            filmTrack.scrollLeft = currentScrollLeft - walkDistance;
        });
    }

});
