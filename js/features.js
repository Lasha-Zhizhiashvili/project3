let read1 = document.querySelector('.read1')
let butt = Array.from(read1.children)
let readd1 = document.querySelector('.readd1')
let cont = Array.from(readd1.children)


let appear = (currentread, targetread) =>{
    currentread.classList.remove('current')
    targetread.classList.add('current')
}

read1.addEventListener('click', e =>{
    let targetdiv = e.target.closest('div .butt')
    if (!targetdiv){
        return;
    }else{
        let currentread = document.querySelector('.current');
        let currentdot = document.querySelector('.active');
        let targetindex = butt.findIndex(butt => butt === targetdiv);
        let targetread = cont[targetindex];

        appear(currentread, targetread);
        currentdot.classList.remove('active')
        targetdiv.classList.add('active')
    }
})

