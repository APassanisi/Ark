$(document).ready(function () {

    'use strict';

    ARK3.Model.init();
    ARK3.View.init();
    ARK3.Controller.init();

    //Ajax loader for game guide content
    $(document).on('click', '.races', function () {
        $('.guide-topics li').removeClass('active');
        $(this).addClass('active');
        $('.guide-page').hide()
            .load('races.html')
            .fadeIn();
    });

    $(document).on('click', '.professions', function () {
        $('.guide-topics li').removeClass('active');
        $(this).addClass('active');
        $('.guide-page').hide()
            .load('professions.html')
            .fadeIn();
    });

    $(document).on('click', '.game-mechanics', function () {
        $('.guide-topics li').removeClass('active');
        $(this).addClass('active');
        $('.guide-page').hide()
            .load('gamemechanics.html')
            .fadeIn();
    });

});

