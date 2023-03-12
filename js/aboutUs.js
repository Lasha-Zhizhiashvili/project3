let track = document.querySelector('.box6')
let slides = Array.from(track.children)
let dotsnav = document.querySelector('.btn-div')
let dots = Array.from(dotsnav.children)

let slidessize = slides[0].getBoundingClientRect().width

let setSlidesPosition = (slide, index) =>{
    slide.style.left = slidessize * index + 'px';
}

slides.forEach(setSlidesPosition);

let moveToSlide = (track, currentSlide, targetSlide) =>{
    track.style.transform = 'translateX(-'+ targetSlide.style.left + ')'
    currentSlide.classList.remove('current')
    targetSlide.classList.add('current')
}

dotsnav.addEventListener('click', e => {
    let targetdot = e.target.closest('button');
    
    if (!targetdot){
        return;
    }else{
        let currentSlide = track.querySelector('.current');
        let currentDot = dotsnav.querySelector('.active');
        let targetIndex = dots.findIndex(dot => dot === targetdot);
        let targetSlide = slides[targetIndex];
        moveToSlide(track, currentSlide, targetSlide);

        currentDot.classList.remove('active')
        targetdot.classList.add('active');
        
    }
})

let nav = document.querySelector('.nav-ul')

nav.addEventListener('click', e =>{
    let targetdiv = e.target.closest('a')
    if (!targetdiv){
        return;
    }else{
        let currentdot = document.querySelector('.activee');
        currentdot.classList.remove('activee')
        targetdiv.classList.add('activee')
    }
})



