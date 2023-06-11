$(function () {
    /* Creating an array for Autocomplete and I wrote the faculty names in it.*/
    var faculties = [
        "Faculty Of Dentistry",
        "Faculty of Aviation and Space Sciences",
        "Faculty Of Law",
        "Faculty of Islamic Sciences",
        "Faculty of Business",
        "Faculty of Architecture and Fine Arts",
        "Faculty of Engineering and Natural Sciences",
        "Faculty Of Health Sciences",
        "Faculty Of Medicine",
        "Other"];
    /*I added the autocomplete attribute to the input namely #faculty id..*/
    $("#faculty").autocomplete({
        source: faculties
    });

});

/*I used the datepicker() function, which is part of the jQuery UI library, to create a date picker.*/
$(function () {
    $("#birthday").datepicker({
        maxDate: -1
    });
});

/*I added the click event to the element with the #dialog id and created a dialog box to create a message.*/
$(function () {
    $("#dialog").click(function () {
        $("<p>If you encounter any problems while filling out the form or have any questions you want to ask, you can contact us on our Contact Us page. Do not forget that the AYBU-Esports family is always with you <3</p>").dialog({
            title: "HELP",
            width: 400,
            modal: true,
        });
    });
});

$(function () {
    // Here I defined the form validation rules.
    $("#join-form").validate({
        rules: {
            name: {
                required: true
            },
            nickname: {
                required: true
            },
            faculty: {
                required: true
            },
            birthday: {
                required: true
            },
            "student-id": {
                required: true,

            },
            email: {
                required: true,
                email: true
            },
            "phone-number": {
                required: true,
                pattern: /0\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}/
            }
        },
        messages: {
            name: "Please enter your name and surname",
            nickname: "Please enter your nickname",
            faculty: "Please select your faculty",
            birthday: "Please enter your birthday",
            "student-id": {
                required: "Please enter a valid student ID.[1-9]XXXXXXXXXX",
                pattern: "Please enter a valid student ID.[1-9]XXXXXXXXXX"
            },
            email: "Please enter a valid email address",
            "phone-number": {
                required: "Please enter a valid phone number in the format 0(XXX)-XXX-XX-XX.",
                pattern: "Please enter a valid phone number in the format 0(XXX)-XXX-XX-XX."
            }

        },
        function(form) {
            form.submit();
        }
    });
});
