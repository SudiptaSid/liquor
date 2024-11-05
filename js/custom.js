// Menu Toggle
$(".menu_toggle").click(function(){
    $(".menu").toggleClass("view_menu");
});
$(".menu_toggle").click(function(){
    $(".menu_toggle").toggleClass("menu_toggle_i");
});
// Banner Slider
$('#banner_slider').owlCarousel({
    margin:0,
    items: 1,
    nav:false,
    navText : ["<i class='flaticon-back'></i>","<i class='flaticon-next'></i>"], 
    dots:false,
    loop:true,
    autoplay: true,
    autoplayTimeout: 100000000,
    autoplayHoverPause: true
})
// Tooltip
$(document).ready(function(){
    $(".c_tooltip").tooltip();
});
// Testimonial Slider
$('#testi_slider').owlCarousel({
    margin:10,
    items: 1,
    nav:true,
    navText : ["<i class='fa fa-angle-up'></i>","<i class='fa fa-angle-down'></i>"], 
    dots:false,
    loop:true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    animateOut: 'flipOutX',
    animateIn: 'flipInX',
})
// Slide Toggle
$(document).ready(function(){
    $(".ye_2001").click(function(){
        $(".ye_2001").toggleClass("color1");
        $(".grid_2001").slideToggle(".color");
        $(".grid_2001").show();
    });
    $(".ye_1999").click(function(){
        $(".ye_1999").toggleClass("color1");
        $(".grid_1999").slideToggle(".color");
        $(".grid_1999").show();
    });
    $(".ye_2002_05").click(function(){
        $(".ye_2002_05").toggleClass("color1");
        $(".grid_2002_05").slideToggle(".color");
        $(".grid_2002_05").show();
    });
    $(".ye_1980").click(function(){
        $(".ye_1980").toggleClass("color1");
        $(".grid_1980").slideToggle(".color");
        $(".grid_1980").show();
    });
    $(".ye_2016").click(function(){
        $(".ye_2016").toggleClass("color1");
        $(".grid_2016").slideToggle(".color");
        $(".grid_2016").show();
    });
});
