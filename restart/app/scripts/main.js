$(document).ready(function () {
    'use strict';

    //Initializer - Fills app-container with homepage content.
    var init = function init () {
        $('.home').addClass('active');
        $('.app-container').load('includes/home.html')
            .fadeIn();
    };

    //Ajax loaders for navbar pages.
    $('.home').click(function (event) {
        event.preventDefault();
        $('.nav li').removeClass('active');
        $(this).addClass('active');
        $('.app-container').hide()
            .load('includes/home.html')
            .fadeIn();
    });

    $('.gameguide').on('click', function (event) {
        event.preventDefault();
        $('.nav li').removeClass('active');
        $(this).addClass('active');
        $('.app-container').hide()
            .load('includes/gameguide.html')
            .fadeIn();
    });

    $('.charactercreator').on('click', function (event) {
        event.preventDefault();
        $('.nav li').removeClass('active');
        $(this).addClass('active');
        $('.app-container').hide()
            .load('includes/charactercreator.html')
            .fadeIn();
    });


    //Game guide ajax calls for content.
    // var guideTab = function guideTab() {
    //     $('.guide-topics li').removeClass('active');
    //     $(this).addClass('active');
    // };

    $(document).on('click', '.races', function () {
        // guideTab();
        $('.guide-topics li').removeClass('active');
        $(this).addClass('active');
        $('.guide-page').hide()
            .load('includes/gameguidepages/races.html')
            .fadeIn();
    });

    $(document).on('click', '.professions', function () {
        // guideTab();
        $('.guide-topics li').removeClass('active');
        $(this).addClass('active');
        $('.guide-page').hide()
            .load('includes/gameguidepages/professions.html')
            .fadeIn();
    });

    $(document).on('click', '.game-mechanics', function () {
        // guideTab();
        $('.guide-topics li').removeClass('active');
        $(this).addClass('active');
        $('.guide-page').hide()
            .load('includes/gameguidepages/gamemechanics.html')
            .fadeIn();
    });

    init();
});