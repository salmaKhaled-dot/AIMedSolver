$(document).ready(function () {
    var signUp = $(".signup-but");
    var logIn = $(".login-but");

    signUp.on("click", function () {
        $(".login").fadeOut("slow").css("display", "none");
        $(".sign-up").fadeIn("slow");

        $(".form-container").animate({ left: "10px" }, "slow");
    });

    logIn.on("click", function () {
        $(".login").fadeIn("slow");
        $(".sign-up").fadeOut("slow").css("display", "none");

        $(".form-container").animate({ left: "400px" }, "slow");
    });

    $(".sign-up .form-btn").on("click", function () {
        removeErrorMessages($(".sign-up"));
        if (!validateForm($(".sign-up"))) {
            return false;
        }
    });

    $(".login .form-btn").on("click", function () {
        removeErrorMessages($(".login"));
        if (!validateForm($(".login"))) {
            return false;
        }
    });
});

function validateForm(form) {
    var isValid = true;
    var requiredInputs = form.find("input[required]").get().reverse();
    $(requiredInputs).each(function () {
        if ($(this).val().trim() === "") {
            isValid = false;
            var errorMsg = "This field is required.";
            $(this).siblings(".error-message").remove();
            $(this).after('<div class="error-message">' + errorMsg + "</div>");
        }
    });
    return isValid;
}

function removeErrorMessages(form) {
    form.find(".error-message").remove();
}
$(document).ready(function () {
    var signUp = $(".signup-but");
    var logIn = $(".login-but");

    signUp.on("click", function () {
        $(".login").fadeOut("slow").css("display", "none");
        $(".sign-up").fadeIn("slow");

        $(".form-container").animate({ left: "10px" }, "slow");
    });

    logIn.on("click", function () {
        $(".login").fadeIn("slow");
        $(".sign-up").fadeOut("slow").css("display", "none");

        $(".form-container").animate({ left: "400px" }, "slow");
    });

    $(".sign-up .form-btn").on("click", function () {
        removeErrorMessages($(".sign-up"));

        const fullName = $("#user").val();
        const email = $("#email").val();
        const password = $("#pass").val();

        $.ajax({
            url: "/signup",
            method: "POST",
            data: { fullName, email, password },
            success: function (response) {
                alert(response.message);
            },
            error: function (error) {
                alert(error.responseJSON.message);
            },
        });
    });

    $(".login .form-btn").on("click", function () {
        removeErrorMessages($(".login"));

        const email = $("#email").val();
        const password = $("#pass").val();

        $.ajax({
            url: "/login",
            method: "POST",
            data: { email, password },
            success: function (response) {
                alert(response.message);
            },
            error: function (error) {
                alert(error.responseJSON.message);
            },
        });
    });
});

function removeErrorMessages(form) {
    form.find(".error-message").remove();
}
