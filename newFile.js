document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('filled');
                } else {
                    s.classList.remove('filled');
                }
            });
        });
    });
});
let menuIcon=document.querySelector('#menu-icon');
let nav=document.querySelector('.nav');
let section=document.querySelector('section');
let navLinks=document.querySelector('hed nav a');
window.onscroll=()=>{
    section.forEach(sec => {
        let top=window.scrollY;
        let offest=sec.offestTop - 150;
        let height=sec.offestHeight;
        let id=sec.getAttribute('id');
        if(top >= offest && top < offest + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('hed nav a [herf*=' + id +']').classList.add('active')
            })
        }
    })
}