function hamburger (){
    $('.hamburger').on('click', function (){
    $('.menu').toggleClass('open');
});
}


$(function() {
    hamburger();
})

