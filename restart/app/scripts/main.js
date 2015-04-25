$(document).ready(function () {
    'use strict';

    //Ajax loader for game guide content
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

    ARK3.Model.init();
    ARK3.View.init();
    ARK3.Controller.init();
    
});