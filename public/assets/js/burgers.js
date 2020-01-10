$(function () {

    $(".devour").on("click", function (event) {
        var id = $(this).attr('id');

        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(function () {
            location.reload();
        });
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#new-burger").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            location.reload();
        });
    });

});
