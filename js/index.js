// $(document).ready(function () {
//     let carousal = $(".carousal-items");
//     let carousal_items = $(".carousal-item");
//     const leftButton = $("#left");
//     const rightButton = $("#right");

//     let scrollPos = 0;
//     if (scrollPos >= 0) leftButton.hide();

//     leftButton.click(function () {
//     scrollPos += carousal.width();
//     if (scrollPos >= 0) {
//     leftButton.hide();
//     scrollPos = 0;
//     }
//     rightButton.show(); 
//     carousal.css("transform", "translate3d(" + scrollPos + "px, 0px, 0px)");
//     });

//     rightButton.click((e) => {
//     scrollPos -= carousal.width();
//     if (scrollPos <= -(carousal_items.innerHeight() - 2) * 15) rightButton.hide();
//     leftButton.show();
//     carousal.css("transform", "translate3d(" + scrollPos + "px, 0px, 0px)");
//     });
//     });

$(document).ready(function(){
    var owl = $(".owl-carousel").owlCarousel({
        items: 3, // or whatever number of items you want to show
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

    $("#left").click(function() {
        owl.trigger('prev.owl.carousel');
    });

    $("#right").click(function() {
        owl.trigger('next.owl.carousel');
    });
});


const boxes = document.querySelectorAll('.info_boxes ul li');

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        boxes.forEach(b => {
            if (b !== box) {
                b.classList.remove('active');
            }
        });
        box.classList.add('active');
    });

    box.addEventListener('mouseleave', () => {
        box.classList.remove('active');
        // Optionally, reset the default active box
        const activeBox = document.querySelector('.info_boxes ul li.active');
        if (!activeBox) {
            boxes[1].classList.add('active'); // Set your default box here
        }
    });
});

