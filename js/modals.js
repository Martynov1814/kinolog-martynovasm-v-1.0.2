'use strict';

var modals = function modals() {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        var closeClickOverlay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

        var trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();

        trigger.forEach(function (item) {
            item.addEventListener('click', function (e) {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(function (item) {
                    item.style.display = 'none';
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = scroll + 'px';
                // document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', function () {
            windows.forEach(function (item) {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = '0px';
            // document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', function (e) {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(function (item) {
                    item.style.display = 'none';
                });

                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = '0px';
                // document.body.classList.remove('modal-open');
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function () {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }

    function calcScroll() {
        var div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        var scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.popup_open', '.popup_calculator', '.calck__close');
    bindModal('.popup_open_feedback', '.popup_feedback', '.feedback__close');

    // showModalByTime('.popup', 3000);
};

window.addEventListener('DOMContentLoaded', function () {

    // let modalState = {};

    modals();
});
