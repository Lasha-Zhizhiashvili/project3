for(const card of document.querySelectorAll('.read')) {
    card.onmousemove = e => HandleOnMouseMove(e);
}


const HandleOnMouseMove = e => {

    document.querySelector('.read').style.backgroundColor = '#20484F';
    document.querySelector('.read h3').style.color = '#FFFFFF';
    document.querySelector('.read h6').style.color = '#FFFFFF';
    document.querySelector('.read button').style.color = '#072125';
    document.querySelector('.read button').style.backgroundColor = '#B8E4DA';
    document.querySelector('.read ul li').style.color = '#FFFFFF'
    
}