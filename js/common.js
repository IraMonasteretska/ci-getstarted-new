$('button[data-modal-close]').click(function() {
    $(this).parents('.gsmoverlay').removeClass('show');
});

$('.gsmodalvindow__back').click(function(e){
    e.preventDefault();
    $(this).parents('.gsmoverlay').removeClass('show');
})

$(document).click(function (event) {
    let $target = $(event.target);
    if (!$target.closest('.gsmodalvindow').length && !$target.closest('.gstartblock__row').length) {
        $('.gsmoverlay').removeClass('show');
    }
});

 



$('.hsopen').click(function(){
    $('.homesolution').addClass('show');
});

$('.bsopen').click(function(){
    $('.businesssolution').addClass('show');
});

$('.joopen').click(function(){
    $('.jobopportunities').addClass('show');
});