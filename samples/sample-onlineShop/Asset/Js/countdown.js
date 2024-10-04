var countDownDate = new Date("August 14, 2024 00:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / (1000));

    var countdown = document.getElementsByClassName("countdown");
    for (var i = 0; i < countdown.length; i++) {
        countdown[i].innerHTML = "<p>فرصت باقیمانده تا پایان این پیشنهاد </p>" + "<span class='day badge badge-dark'>" + days + "</span>" + " : <span class='hours badge badge-dark'> " + hours + "</span>" + " : <span class='minutes badge badge-dark'>" + minutes + "</span>" + " : <span class='seconds badge badge-dark'>" + seconds + "</span>"
    }

    var offerExpireText = document.getElementsByClassName("offer-expire-text");
    for (var i = 0; i < offerExpireText.length; i++) {
        offerExpireText[i].style.zIndex = "-1";
    }

    var offerBody=document.getElementsByClassName("offer-body");

    if (distance < 0) {
        clearInterval(x);
        for (var i = 0; i < countdown.length; i++) {
            countdown[i].innerHTML = "";
        }

        for (var i=0;i<offerBody.length;i++){
            offerBody[i].style.filter="blur(2px)";
        }

        for (var i = 0; i < offerExpireText.length; i++) {
            offerExpireText[i].style.zIndex = "1";
            offerExpireText[i].innerHTML = "<span class='badge badge-danger font-size-lg p-3'>مهلت این پیشنهاد به پایان رسیده است </span>"
        }
    }

}, 1000);

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        rtl:true,
        items:6,
        margin:20,
        loop:true,
        // autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        nav:true,

        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                center:true
            },
            600:{
                items:3,
                nav:true,
                center:true
            },
            1000:{
                items:5,
                nav:true,
                loop:true,
                center:true
            }
        }
    })
    
  });