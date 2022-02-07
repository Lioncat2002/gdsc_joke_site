document.addEventListener('DOMContentLoaded', function() {
    
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});

});
function hover(element) {

    element.setAttribute('src','https://i.redd.it/8btmhq88z5s71.jpg')    
    
}
function unhover(element) {

    element.setAttribute('src','https://popcat.click/twitter-card.jpg')   
    
}

function rotate(element){
    element.setAttribute('class','rotate')
}
function normal(element){
    const images=["./assets/cat.png","./assets/cat2.png","./assets/cat3.png","./assets/cat4.png"]
    let index=Math.floor(Math.random()*images.length)
    element.setAttribute('class','normal')
    element.setAttribute('src',images[index])

}