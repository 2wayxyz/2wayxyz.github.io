document.addEventListener("DOMContentLoaded", () => {
    
    // === 1. ระบบจัดการสไลเดอร์ม้วนฟิล์ม (Film Strip Slider Logic) ===
    const filmTrack = document.getElementById('filmTrack');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (filmTrack && prevBtn && nextBtn) {
        const scrollDistance = 330; // ระยะเลื่อนพิกเซลต่อการกดปุ่ม 1 ครั้ง

        // เลื่อนเมื่อคลิกปุ่มลูกศร
        prevBtn.addEventListener('click', () => {
            filmTrack.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            filmTrack.scrollBy({ left: scrollDistance, behavior: 'smooth' });
        });

        // === 2. ระบบลากด้วยเมาส์ซ้าย-ขวา (Drag-to-Scroll) ===
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
            const walk = (x - startX) * 1.6; // ปรับความไวการลากตรงตัวเลขท้ายสุด
            filmTrack.scrollLeft = scrollLeftVal - walk;
        });
    }

});
