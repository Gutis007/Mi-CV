function scrollSlider(scroll){
    let move = document.getElementById("card-slider");
    move.scrollBy({
        left: scroll,
        behavior: 'smooth'
    });
    
}