document.addEventListener("DOMContentLoaded", () => {
    
    // === 1. ระบบจัดการสไลเดอร์ม้วนฟิล์ม (Film Strip Slider Logic) ===
    const filmTrack = document.getElementById('filmTrack');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (filmTrack && prevBtn && nextBtn) {
        const scrollDistance = 330; // จำนวนพิกเซลในการกดเลื่อนแต่ละครั้ง

        // ฟังก์ชันเลื่อนเมื่อคลิกปุ่มลูกศร
        prevBtn.addEventListener('click', () => {
            filmTrack.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            filmTrack.scrollBy({ left: scrollDistance, behavior: 'smooth' });
        });

        // === 2. ระบบ Drag-to-Scroll (คลิกเมาส์ค้างแล้วลากซ้าย-ขวา) ===
        let isMousedown = false;
        let startX;
        let scrollLeftVal;

        filmTrack.addEventListener('mousedown', (e) => {
            isMousedown = true;
            filmTrack.style.cursor = 'grabbing';
            startX = e.pageX - filmTrack.offsetLeft;
            scrollLeftVal = filmTrack.scrollLeft;
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
            const walk = (x - startX) * 1.6; // ปรับตัวคูณเพื่อเพิ่มความไวในการลากได้ตามชอบ
            filmTrack.scrollLeft = scrollLeftVal - walk;
        });
    }

});
