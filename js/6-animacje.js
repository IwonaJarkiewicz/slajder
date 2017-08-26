$(function () {
    $('h2').click(function () {
        $(this).hide(3000);
    });

    //efekt hide i show
    $('p').hide(3000).show(3000);

    //efekt fadeOut i fadeIn
    $('h1').fadeOut(3000).fadeIn(3000);

    function animacja() {
        console.log('zakoczono pierwszą animację. Zaraz startuje druga');

        $('h3').animate({
            'font-size': '1em',
            'margin': '100px'
        }, 2000, );

    }
    $('h3').animate({
        'font-size': '3em',
        'margin': '100px'
    }, 2000, animacja);

});
