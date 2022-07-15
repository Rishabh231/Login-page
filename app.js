$(document).ready(function(){
    // $('.clicks').on('click', function(){
    //     $('#box').addClass('show');
        

    // })

    $('.submission').on('click', function(){
        $('#box').removeClass('show');
    })
})

var check = false;
$('.clicks').on('click', function () {
    if (!check) {
        $('#box').addClass('show');
        check = true;
    } else {
        $('#box').removeClass('show');
        check = false;
    }
})

$('#close').on('click', function () {
    $('#box').removeClass('show');


})





