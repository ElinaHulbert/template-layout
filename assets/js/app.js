$(function(){

    var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();
// Fixed header
    checkScroll(scrollOffset);

    $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });
    function checkScroll(scrollOffset){
        // console.log(scrollOffset)
        if(scrollOffset>=introH){
            header.addClass("fixed");
        } else{
            header.removeClass("fixed");
        }
    }

// Smooth scroll

    $("[data-scroll]").on("click", function(event){ //checking for a click of an element with data-scroll attribute
        event.preventDefault(); //preventing the default behaviour for links so the page won't update
        var $this = $(this),
            blockId = $this.data("scroll"), //get the id of the clicked element
            blockOffset = $(blockId).offset().top -40;

        $("#nav a").removeClass("active")
        $this.addClass=("active");
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
        
    });

// Menu nav toggle
$("#nav_toggle").on("click", function(event){
    event.preventDefault();
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
});
// Collapse
$("[data-collapse]").on("click", function(event){
    event.preventDefault();

    var $this = $(this),
    blockId = $this.data("collapse");
    $(blockId).slideToggle();
    $this.toggleClass("active");
});
    
// Slider
$("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

});
