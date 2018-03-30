let slideIndex = 0,slides,smallIndex = 0,smallSlides;

/**
 * @nevaap class for all nevaap configurations
 */
class nevaap{

    constructor(){
        slides = document.getElementsByClassName("slide-big");
        smallSlides = document.getElementsByClassName("slide-small");
        this.bigSlider();
        this.smallgSlider();
    }

    // noinspection InfiniteRecursionJS
    bigSlider(){
        let x;

        for (x = 0; x < slides.length; x++){
            slides[x].style.display = 'none';
        }

        slideIndex++;

        if(slideIndex > slides.length){
            slideIndex = 1;
        }

        slides[slideIndex-1].style.display = "block";

        setInterval(this.bigSlider,8000);
    }
    
    smallgSlider(){
        let x;

        for (x = 0; x < smallSlides.length; x++){
            smallSlides[x].style.display = 'none';
        }

        smallIndex++;

        if(smallIndex > smallSlides.length){
            smallIndex = 1;
        }

        smallSlides[smallIndex-1].style.display = "block";

        setInterval(this.smallgSlider,12000);
    }
}

new nevaap();

