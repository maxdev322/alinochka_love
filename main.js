$(function () {
    // console.log('hi');   
    // $('.nose__trigger').hover(
    //     function () {
    //         console.log('hi');
    //         $('.nose__cursor').css('display', 'block')
    //         $('.nose__trigger').css('opacity', '0')
    //     }, function () {
    //         console.log('bye');
    //         $('.nose__cursor').css('display', 'none')
    //         $('.nose__trigger').css('opacity', '1')
    //     }
    // )
    $('.nose__trigger').touchstart(
        function (e, touch) {
            $('.nose__cursor').css('display', 'block')
            $('.nose__trigger').css('opacity', '0')
        }
    )
    $('.nose__trigger').touchend(
        function (e, touch) {
            $('.nose__cursor').css('display', 'none')
            $('.nose__trigger').css('opacity', '1')
        }
    )
})