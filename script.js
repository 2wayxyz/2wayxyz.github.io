document.addEventListener("DOMContentLoaded", () => {
    
    // ระบบคลิกเลื่อนม้วนฟิล์มสไลเดอร์ซ้าย-ขวา (Film Carousel Slider)
    const filmTrack = document.getElementById('filmTrack');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');

    if (filmTrack && prevArrow && nextArrow) {
        const scrollAmount = 300; 

        prevArrow.addEventListener('click', () => {
            filmTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextArrow.addEventListener('click', () => {
            filmTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

});
