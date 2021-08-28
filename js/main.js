$(function(){
    
    $('.search-icon').click(function(e){
        e.stopPropagation();
       
        if($('.search-icon').hasClass('open')){
             $('.search-form').removeClass('open');
        } else{
            $('.search-form').addClass('open');
        }
    });

    $('body').click(function(){
        $('.search-form').removeClass('open');
    });

    // Owl Carousel 

    $('.owl-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop:true,
        margin:0,
        dots: true,
        nav:true,
        singleItem:true,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout:6000,
        navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1024:{
                items:1
            }
        }
    });

    $('.video-icon').click(function(){                    
        $('.popup').addClass('open');
        $('body , html').css('overflow' , 'hidden');
    });
    
    $('.close-box').click(function(){
        $('.popup').removeClass('open');
        $('body , html').css('overflow' , 'auto');
    });



    
// Features Icon
    $(window).on('scroll' , function(){
 
        if( $(this).scrollTop() > $('.features').offset().top ){
    
                    var scr = $(this).scrollTop() - $('.features').offset().top ;
    
                $('.logo-icons').css({transform:'translateY('+scr+'px)'});
            }
    });

// Counter

var maxNumber  = 70;
var number     = 0;
$(window).on('scroll' , function(){
 
    if( $(this).scrollTop() > ($('.features').offset().top) - 600 ){
       var intval =  setInterval(() => {
            if(number > maxNumber){
                clearInterval(intval);
            }else{
                $('.number').html(number)
                number++
            }
        }, 350);
        
        }
});


// Slider Project

$('.project-slider').owlCarousel({
    loop:true,
    margin:0,
    dots: true,
    smartSpeed: 500,
    autoplay: true,
    autoplayTimeout:6000,
    responsive:{

       0:{
           items:1
       },
       1024:{
        items:3
       }
   }
});


// Accordion

$('.accordion-title').click(function(){

    $(this).next().slideToggle(600);
    $(this).toggleClass('open');
    
    if($(this).hasClass('open')){
        $(this).find('i').attr('class' , 'fa fa-minus');
    } else{
        $(this).find('i').attr('class' , 'fa fa-plus');
    }
    $(this).parent().siblings().find('.accordion-content').slideUp(600);

});

if( $('.clients-carousel-imagesss').length ){
    var clientImages = $('.clients-carousel-imagesss');
    var clientText = $('.clients-content-carousel');

    clientImages.owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout:5000,
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 3,
        dots: false,
        nav:false,
        center: true,
    }).on('click' ,'.owl-item',function () {

        clientImages.trigger('to.owl.carousel', [$(this).index(), 300]);
      }).on('changed.owl.carousel' , function(e){

        clientText.trigger('to.owl.carousel' , e.item.index,500);
        
      });


      clientText.owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout:5000,
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 1,
        dots: false,
        nav:false,
    });
}


$('.partner-slider').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items : 1,
        },
        700:{
            items : 3,
        },
        1000:{
            items : 5,
        }
    }
})


// Fixed Header
$(window).on('scroll' , function(){

        if($(this).scrollTop()>= $('.main-menu').offset().top){
            $('.fixed-header').addClass('active');
        } else{
            $('.fixed-header').removeClass('active');
        }
});


// Custom Wow Animation
$(window).on('scroll' , function(){

    var blogOffset = $('.blog').offset().top;
    if($(this).scrollTop() >= blogOffset - 250 ){
        
        $('.blog .col-6').each(function(){

            $(this).addClass('animated').css({
                transitionDelay:$(this).data('delay')
            })
        });
    } else{
    
    $('.blog .col-6').removeClass('animated');
    }
    });

   $(window).on('scroll' , function(){

    if($(this).scrollTop() >= 320){
        $('.btn-top-scroll').addClass('show');
    }else{
        $('.btn-top-scroll').removeClass('show');
    }
   })

   $('.btn-top-scroll ').on('click' , function () {

    $('html , body').animate({
        scrollTop: '0'
    }, 700)

     });

     $('.fa-bars').on('click' , function () { 
         $('.mobile-menu , .overlay').addClass('open');
      });
      $('.overlay , .btnClose').on('click' , function(){

        $('.overlay , .mobile-menu').removeClass('open');
      });

      $('.has-children > a').click(function (e) { 
          e.preventDefault();
          $(this).toggleClass('color');
          $(this).parent().find('> span').toggleClass('active');
          $(this).parent().find('> .sub-menu').slideToggle(300);
       });



    //    Loader



    
Loadr = new (function Loadr(id){
    // # Defines
    const max_size = 24;
    const max_particles = 1500;
    const min_vel = 20;
    const max_generation_per_frame = 10;

    // #Variables
// sometimes i wrote code horrible enouhg to make eyes bleed 
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext('2d');
    var height = canvas.height;
    var center_y = height/2;
    var width = canvas.width;
    var center_x = width / 2;
    var animate = true;
    var particles = [];
    var last = Date.now(),now = 0;
    var died = 0,len = 0,dt;

    function isInsideHeart(x,y){
        x = ((x - center_x) / (center_x)) * 3;
        y = ((y - center_y) / (center_y)) * -3;
        // Simplest Equation of lurve
        var x2 = x * x;
      var y2 = y * y;
      // Simplest Equation of lurve
    
  return (Math.pow((x2 + y2 - 1), 3) - (x2 * (y2 * y)) < 0);
    
}
    
function random(size,freq){
        var val = 0;
        var iter = freq;
        
  do{
            size /= iter;
            iter += freq;
            val += size * Math.random();
        }while( size >= 1);
        
  return val;
    }
  
    function Particle(){
        var x = center_x;
        var y = center_y;
        var size = ~~random(max_size,2.4);
        var x_vel = ((max_size + min_vel) - size)/2 - (Math.random() * ((max_size + min_vel) - size));
        var y_vel = ((max_size + min_vel) - size)/2 - (Math.random() * ((max_size + min_vel) - size));
        var nx = x;
  var ny = y;
  var r,g,b,a = 0.05 * size;
  
  this.draw = function(){
    r = ~~( 255 * ( x / width));
    g = ~~( 255 * (1 - ( y / height)));
    b = ~~( 255 - r );
    ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    ctx.beginPath();
    ctx.arc(x,y,size,0, Math.PI*2, true); 
    ctx.closePath();
    ctx.fill();
  }

        this.move = function(dt){

    nx += x_vel * dt;
    ny += y_vel * dt;
    if( !isInsideHeart(nx,ny)){
      if( !isInsideHeart(nx,y)){
        x_vel *= -1;
        return;
      }
              
      if( !isInsideHeart(x,ny)){
                      y_vel *= -1;
                      return;
                }
      // Lets do the crazy furbidden
      x_vel = -1 * y_vel;
      y_vel = -1 * x_vel;
      return;
    }
          
            x = nx;
            y = ny;
        }

    }
    
function movementTick(){
    var len = particles.length;
        var dead = max_particles - len;
        for( var i = 0; i < dead && i < max_generation_per_frame; i++ ){
            particles.push(new Particle());
        }
      
  // Update the date
  now = Date.now();
  dt = last - now;
  dt /= 1000;
  last = now;
  particles.forEach(function(p){
    p.move(dt);
  });
}
  
    function tick(){

        ctx.clearRect(0,0,width,height);
        particles.forEach(function(p){
        p.draw();
      });

        requestAnimationFrame(tick);
    }
    
this.start = function(){

    }
    
this.done = function(){

    }
    
setInterval(movementTick,16);
    tick();

})("loader");

$(document).ready(function(){
    $('.loading-parent').fadeOut(8000 , function(){
        $('body').css("overflow" , "auto")
    });
   
  });


});

