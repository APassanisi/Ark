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

    $('.gameguide').click(function (event) {
        event.preventDefault();
        $('.nav li').removeClass('active');
        $(this).addClass('active');
        $('.app-container').hide()
            .load('includes/gameguide.html')
            .fadeIn();
    });

    $('.charactercreator').click(function (event) {
        event.preventDefault();
        $('.nav li').removeClass('active');
        $(this).addClass('active');
        $('.app-container').hide()
            .load('includes/charactercreator.html')
            .fadeIn();
    });

    //Game guide ajax calls for content.
    $('.races').click(function () {
        $('.guide-topics li').removeClass('active');
        $(this).addClass('active');
        $('.guide-page').hide()
            .load('/gameguidepages/races.html')
            .fadeIn();
    });

    $('.professions').click(function () {
        $('.guide-topics li').removeClass('active');
        $(this).addClass('active');
        $('.guide-page').hide()
            .load('/gameguidepages/professions.html')
            .fadeIn();
    });

    $('.game-mechanics').click(function () {
        $('.guide-topics li').removeClass('active');
        $(this).addClass('active');
        $('.guide-page').hide()
            .load('/gameguidepages/gamemechanics.html')
            .fadeIn();
    });

    init();
});