$(document).foundation();
$("a.boton").hover(
    function () {
        $(this).html(function (i, origText) {
            return "<i class='fi-check'> </i>" + origText;
        });
    },
    function () {
        $(this).find("i").remove();
    }
);