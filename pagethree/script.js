function hidePreloader() {
    setTimeout(function () {
        document.querySelector(".preloader").style.display = "none";
    }, 2000);
}

window.addEventListener("load", hidePreloader);

$(document).ready(function () {
    $("#search").focus(function () {
        $(".search-box").addClass("border-searching");
        $(".search-icon").addClass("si-rotate");
    });
    $("#search").blur(function () {
        $(".search-box").removeClass("border-searching");
        $(".search-icon").removeClass("si-rotate");
    });
    $("#search").keyup(function () {
        if ($(this).val().length > 0) {
            $(".go-icon").addClass("go-in");
        } else {
            $(".go-icon").removeClass("go-in");
        }
    });
    $(".go-icon").click(function () {
        $(".search-form").submit();
    });
});

$(document).ready(function () {
    var body = $("body");
    var menu = $(".menu-icon");
    var menuItems = $(".nav__list-item");

    menu.on("click", function () {
        body.toggleClass("nav-active");
    });
});
var video = document.getElementById("overlayVideo");
var btn = document.getElementById("videoControlBtn");

function toggleVideo() {
    if (video.paused) {
        video.play();
        btn.classList.add("playing");
        btn.setAttribute("aria-label", "Pause Video");
    } else {
        video.pause();
        btn.classList.remove("playing");
        btn.setAttribute("aria-label", "Play Video");
    }

    var icon = btn.classList.contains("playing")
        ? "pauseVideo.svg"
        : "playVideo.svg";
    btn.style.backgroundImage = `url(${icon})`;
}

document.addEventListener("DOMContentLoaded", function () {
    var tabPanes = document.getElementsByClassName("tab-pane");
    for (var i = 0; i < tabPanes.length; i++) {
        tabPanes[i].style.display = "none";
    }
});

function changeTab(index) {
    var buttonBoxes = document.getElementsByClassName("button-box");
    var tabPanes = document.getElementsByClassName("tab-pane");

    for (var i = 0; i < buttonBoxes.length; i++) {
        buttonBoxes[i].classList.remove("active");
    }

    for (var j = 0; j < tabPanes.length; j++) {
        tabPanes[j].style.display = "none";
    }

    buttonBoxes[index].classList.add("active");
    tabPanes[index].style.display = "block";
}

(function ($) {
    "use strict";
    s();
    for (
        var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
        a >= 0;
        a--
    ) {
        o(r[a]);
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
    }

    var app = (function () {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var init = function init() {
            body = document.querySelector("body");
            menu = document.querySelector(".menu-icon");
            menuItems = document.querySelectorAll(".nav__list-item");
            applyListeners();
        };
        var applyListeners = function applyListeners() {
            menu.addEventListener("click", function () {
                return toggleClass(body, "nav-active");
            });
        };
        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass))
                element.classList.remove(stringClass);
            else element.classList.add(stringClass);
        };
        init();
    })();
})(jQuery);
$(document).ready(function () {
    var body = $("body");
    var menu = $(".menu-icon");
    var menuItems = $(".nav__list-item");

    menu.on("click", function () {
        body.toggleClass("nav-active");
        menu.toggleClass("close-icon");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var tabPanes = document.getElementsByClassName("tab-pane");
    for (var i = 0; i < tabPanes.length; i++) {
        tabPanes[i].style.display = "none";
    }
});

function changeTab(index) {
    var buttonBoxes = document.getElementsByClassName("button-box");
    var tabPanes = document.getElementsByClassName("tab-pane");

    for (var i = 0; i < buttonBoxes.length; i++) {
        buttonBoxes[i].classList.remove("active");
    }

    for (var j = 0; j < tabPanes.length; j++) {
        tabPanes[j].style.display = "none";
    }

    buttonBoxes[index].classList.add("active");
    tabPanes[index].style.display = "block";
}

function getDoctorAvailability() {
    var specialty = document.getElementById("specialty").value;

    var doctors = [
        {
            name: "Adel Gamel",
            specialty: "cardiology",
            availability: "10:00 AM - 12:00 PM",
        },
        {
            name: "Mohamed Khaled",
            specialty: "dermatology",
            availability: "2:00 PM - 4:00 PM",
        },
        {
            name: "Ashraf Essam",
            specialty: "cardiology",
            availability: "9:00 AM - 11:00 AM",
        },
        {
            name: "Noha Ahmed",
            specialty: "endocrinology",
            availability: "1:00 PM - 3:00 PM",
        },
        {
            name: "Habiba Loai",
            specialty: "dermatology",
            availability: "10:00 AM - 12:00 PM",
        },
        {
            name: "Mahmoud Moustafa",
            specialty: "cardiology",
            availability: "2:00 PM - 4:00 PM",
        },
    ];

    var doctorNamesBody = document.getElementById("doctorNamesBody");
    var availabilityBody = document.getElementById("availabilityBody");
    var tablesContainer = document.getElementById("tablesContainer");

    doctorNamesBody.innerHTML = "";
    availabilityBody.innerHTML = "";

    var filteredDoctors = doctors.filter(function (doctor) {
        return doctor.specialty === specialty;
    });

    for (var i = 0; i < filteredDoctors.length; i++) {
        var doctor = filteredDoctors[i];

        var nameRow = document.createElement("tr");
        var nameCell = document.createElement("td");
        nameCell.innerText = doctor.name;
        nameRow.appendChild(nameCell);
        doctorNamesBody.appendChild(nameRow);

        var availabilityRow = document.createElement("tr");
        var availabilityCell = document.createElement("td");
        availabilityCell.innerText = doctor.availability;
        availabilityRow.appendChild(availabilityCell);
        availabilityBody.appendChild(availabilityRow);
    }

    if (filteredDoctors.length > 0) {
        tablesContainer.style.display = "block";
    } else {
        tablesContainer.style.display = "none";
    }
}

const yesRadio = document.getElementById("yes");
const noRadio = document.getElementById("no");

yesRadio.addEventListener("change", handleSmartwatchSelection);
noRadio.addEventListener("change", handleSmartwatchSelection);

function handleSmartwatchSelection() {
    if (yesRadio.checked) {
        console.log("User has a smartwatch");
    } else if (noRadio.checked) {
        console.log("User does not have a smartwatch");
    }
}
