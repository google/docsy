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

(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(function () {
    document
      .querySelectorAll('[data-bs-toggle="tooltip"]')
      .forEach((el) => new bootstrap.Tooltip(el));
    document
      .querySelectorAll('[data-bs-toggle="popover"]')
      .forEach((el) => new bootstrap.Popover(el));
    document
      .querySelectorAll('.popover-dismiss')
      .forEach((el) => new bootstrap.Popover(el, { trigger: 'focus' }));
  });

  // Document-relative top, like jQuery's offset().top.
  function offsetTop(el) {
    return el.getBoundingClientRect().top + window.scrollY;
  }

  function bottomPos(el) {
    return offsetTop(el) + el.offsetHeight;
  }

  // Navbar transparency over cover images
  ready(function () {
    const promo = document.querySelector('.js-td-cover');
    if (!promo) return;
    const navbar = document.querySelector('.js-navbar-scroll');
    if (!navbar) return;

    const threshold = Math.ceil(navbar.offsetHeight);

    function adjustNavbarTransparency() {
      const promoOffset = bottomPos(promo);
      const navbarOffset = offsetTop(navbar);
      navbar.classList.toggle(
        'td-navbar-transparent',
        promoOffset - navbarOffset >= threshold,
      );
    }

    adjustNavbarTransparency();
    window.addEventListener('scroll', adjustNavbarTransparency, {
      passive: true,
    });
  });

  // Navbar overflow detection with scroll indicators
  function checkNavbarOverflow() {
    const navbarNav = document.querySelector('.navbar-nav');
    const container = document.querySelector('#main_navbar');
    const navbarContainer = document.querySelector('.td-navbar-container');
    if (!navbarNav || !container || !navbarContainer) return;

    const isOverflowing = navbarNav.scrollWidth > navbarNav.clientWidth;

    if (isOverflowing) {
      container.classList.add('td-navbar-nav-scroll--indicator');
      navbarContainer.classList.add('navbar-is-overflowing');

      container.querySelectorAll('.scroll-left').forEach((el) => {
        el.addEventListener('click', () => {
          navbarNav.scrollBy({ left: -100, behavior: 'smooth' });
        });
      });
      container.querySelectorAll('.scroll-right').forEach((el) => {
        el.addEventListener('click', () => {
          navbarNav.scrollBy({ left: 100, behavior: 'smooth' });
        });
      });

      updateScrollIndicators();
    } else {
      container.classList.remove('td-navbar-nav-scroll--indicator');
      navbarContainer.classList.remove('navbar-is-overflowing');
    }
  }

  function updateScrollIndicators() {
    const navbarNav = document.querySelector('.navbar-nav');
    if (!navbarNav) return;

    const scrollLeft = navbarNav.scrollLeft;
    const maxScroll = navbarNav.scrollWidth - navbarNav.clientWidth;

    document.querySelectorAll('.scroll-left').forEach((el) => {
      el.classList.toggle('visible', scrollLeft > 0);
    });
    document.querySelectorAll('.scroll-right').forEach((el) => {
      el.classList.toggle('visible', scrollLeft < maxScroll);
    });
  }

  // Check overflow on page load and window resize
  ready(function () {
    checkNavbarOverflow();
    window.addEventListener('resize', checkNavbarOverflow);

    document.querySelectorAll('.navbar-nav').forEach((el) => {
      el.addEventListener('scroll', updateScrollIndicators, { passive: true });
    });
  });
})();
