$('a').hover(function () {
    $main_text = $(this).text();
    $(this).text("Akshay");
}, function () {
    $(this).text($main_text);
});

​$(".p").text(function () {
    return $(this).text().replace("contains", "hello everyone");
});​​​​​