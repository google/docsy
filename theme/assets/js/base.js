/*
 * Copyright 2018 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

(function($) {

    'use strict';

    $(function() {
        $('[data-bs-toggle="tooltip"]').tooltip();
        $('[data-bs-toggle="popover"]').popover();

        $('.popover-dismiss').popover({
            trigger: 'focus'
        })
    });


    function bottomPos(element) {
        return element.offset().top + element.outerHeight();
    }

    // Navbar transparency over cover images
    $(function () {
      const promo = $('.js-td-cover');
      if (!promo.length) return;
      const navbar = $('.js-navbar-scroll');
      if (!navbar.length) return;

      const threshold = Math.ceil(navbar.outerHeight());

      function adjustNavbarTransparency() {
        const promoOffset = bottomPos(promo);
        const navbarOffset = navbar.offset().top;
        navbar.toggleClass('td-navbar-transparent', (promoOffset - navbarOffset) >= threshold);
      }

      adjustNavbarTransparency();
      $(window).on('scroll', adjustNavbarTransparency);
    });

        // Navbar overflow detection with scroll indicators
    function checkNavbarOverflow() {
        const navbarNav = $('.navbar-nav');
        const container = $('#main_navbar');
        const navbarContainer = $('.td-navbar-container');

        if (navbarNav.length) {
            const navElement = navbarNav[0];
            const isOverflowing = navElement.scrollWidth > navElement.clientWidth;

            // console.log('Overflow check:', {
            //     scrollWidth: navElement.scrollWidth,
            //     clientWidth: navElement.clientWidth,
            //     isOverflowing: isOverflowing
            // });

            if (isOverflowing) {
                container.addClass('td-navbar-nav-scroll--indicator');
                navbarContainer.addClass('navbar-is-overflowing');

                // Add click handlers
                container.find('.scroll-left').on('click', function() {
                    navbarNav.animate({scrollLeft: '-=100'}, 300);
                });

                container.find('.scroll-right').on('click', function() {
                    navbarNav.animate({scrollLeft: '+=100'}, 300);
                });

                // Update indicator visibility based on scroll position
                updateScrollIndicators();
            } else {
                container.removeClass('td-navbar-nav-scroll--indicator');
                navbarContainer.removeClass('navbar-is-overflowing');
            }
        }
    }

    function updateScrollIndicators() {
        const navbarNav = $('.navbar-nav');
        const leftIndicator = $('.scroll-left');
        const rightIndicator = $('.scroll-right');

        if (navbarNav.length) {
            const navElement = navbarNav[0];
            const scrollLeft = navElement.scrollLeft;
            const maxScroll = navElement.scrollWidth - navElement.clientWidth;

            // Show/hide left indicator
            if (scrollLeft <= 0) {
                leftIndicator.removeClass('visible');
            } else {
                leftIndicator.addClass('visible');
            }

            // Show/hide right indicator
            if (scrollLeft >= maxScroll) {
                rightIndicator.removeClass('visible');
            } else {
                rightIndicator.addClass('visible');
            }
        }
    }

    // Check overflow on page load and window resize
    $(function() {
        checkNavbarOverflow();
        $(window).on('resize', checkNavbarOverflow);

        // Update indicators on scroll
        $('.navbar-nav').on('scroll', updateScrollIndicators);
    });


}(jQuery));
