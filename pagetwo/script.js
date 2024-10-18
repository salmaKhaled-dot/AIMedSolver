$(document).ready(function () {

    var body = $('body');
    var menu = $('.menu-icon');
    var menuItems = $('.nav__list-item');

    menu.on('click', function () {
        body.toggleClass('nav-active');
    });
});


buttons.forEach(function (button) {
    button.addEventListener('mouseenter', function () {
        button.style.backgroundColor = '#000';
        button.style.color = '#fff';
    });

    button.addEventListener('mouseleave', function () {
        button.style.backgroundColor = 'transparent';
        button.style.color = 'inherit';
    });
});

(function ($) {
    "use strict";
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

    var app = function () {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var init = function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            menuItems = document.querySelectorAll('.nav__list-item');
            applyListeners();
        };
        var applyListeners = function applyListeners() {
            menu.addEventListener('click', function () {
                return toggleClass(body, 'nav-active');
            });
        };
        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
        };
        init();
    }();

})(jQuery);
$(document).ready(function () {
    var body = $('body');
    var menu = $('.menu-icon');
    var menuItems = $('.nav__list-item');

    menu.on('click', function () {
        body.toggleClass('nav-active');
        menu.toggleClass('close-icon');
    });
});

const gridItems = document.querySelectorAll('.grid-item1, .grid-item2, .grid-item3, .grid-item4, .grid-item5');

gridItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.1)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});