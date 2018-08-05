$(function () {
    document.querySelector('html').style.fontSize=window.screen.width/20+'px';

    window.addEventListener('resize',function () {
        document.querySelector('html').style.fontSize=window.screen.width/20+'px';
    });


    var swiper=new Swiper('.waimai-container',{
        direction: 'vertical',
        onSlideChangeEnd: function(swiper){
            $('.waimai-container .swiper-slide').eq(swiper.activeIndex).addClass('animate').siblings().removeClass('animate');

            if(swiper.activeIndex==2){
                $('.waimai-container .swiper-slide').eq(swiper.activeIndex).addClass('swiper-no-swiping');
            }
            if(swiper.activeIndex!=2){
                $('.page3 .bear').attr('style','');
                $('.page3 .bear-box div').attr('style','');
                $('.page3 .normal-pic div').attr('style','');
                $('.page3 .hit-card-box div').attr('style','');
            }
        },
    })
    setTimeout(function () {
        $('.loading').addClass('animate');
        $('.loading .step').on('animationend',function () {
            $('.loading').fadeOut(1000,function () {
                $('.welcome').addClass('animate');
            })
        })
    },1000);
    $('.btn-box').on('click',function () {
        $('.bear-box .bear').css('animation','beardisapper 1s forwards')
        setTimeout(function () {
            $('.welcome').fadeOut(1000,function () {
                $('.waimai-container .page1').addClass('animate');
            })
        },1000)

    })

    $('.swiper-wrapper .page3').click(function () {
        var index =0;
        var timer=null;
        $('.swiper-wrapper .page3 .bear').css('animation','none');
        timer=setInterval(function () {
            $('.swiper-wrapper .page3 .bear-box div').css('opacity',0);
            $('.swiper-wrapper .page3 .bear-box div').eq(index).css('opacity',1);
            $('.swiper-wrapper .page3 .normal-pic div').eq(index).css({
                'animation':'none',
                'opacity':0
            });
            $('.swiper-wrapper .page3 .hit-card-box div').eq(index).css('opacity',1);
            if(index==2){
                $('.swiper-wrapper .page3 .hit-card-box div').css('animation','beardisapper 1s forwards');
                $('.swiper-wrapper .page3').removeClass('swiper-no-swiping');
                clearInterval(timer);
            }
            index++;
        },1000);
    })


    var audio=document.querySelector('audio');
    var audiobtn=document.querySelector('.audiobtn');

    audiobtn.onclick=function () {
        if(audio.paused==true){
            audio.play();
            $('.audiobtn').css('background-image', 'url("image/play.png")');
        }else{
            audio.pause();
            $('.audiobtn').css('background-image', 'url("image/pause.png")');
        }
    }
})