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