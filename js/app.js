$(document).foundation();
$('li').mouseover(function(e)
{
    e.stopPropagation();
    $(this).addClass('lihover');
});

$('li').mouseout(function()
{
    $(this).removeClass('lihover');
});