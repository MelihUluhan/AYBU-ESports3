/*Adds options to the select input on the form.*/
$(function () {
    var topics = [
        "General Question",
        "Sponsorship Request",
        "Technical Support",
        "Tournament Request",
        "General Request",
        "Other"
    ];

    $("#about").append('<option value="" selected disabled>Subject what you want to contact</option>');

    topics.forEach(function (topic) {
        $("#about").append('<option value="' + topic + '">' + topic + '</option>');
    });

});