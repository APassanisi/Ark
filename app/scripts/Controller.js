var ARK3 = ARK3 || {};

ARK3.Controller = (function ($) {

    'use strict';

    var init = function () {

        $('.button-basic').click(function () {
            $('.progression li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.hideProgressPanels();
            ARK3.View.showBasicPanels();
        });
        $('.button-detail').click(function () {
            $('.progression li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.hideProgressPanels();
            ARK3.View.showDetailPanels();
        });
        $('.button-finalize').click(function () {
            $('.progression li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.hideProgressPanels();
            ARK3.View.showFinalizePanels();
        });
        $('.button-male').click(function () {
            $('.gender-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('male');
            ARK3.Model.genderSetter();
        });
        $('.button-female').click(function () {
            $('.gender-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('female');
            ARK3.Model.genderSetter();
        });
        $('.button-human').click(function () {
            $('.race-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('human');
            ARK3.Model.raceSetter();
        });
        $('.button-robot').click(function () {
            $('.race-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('robot');
            ARK3.Model.raceSetter();
        });
        $('.button-barbarian').click(function () {
            $('.race-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('barbarian');
            ARK3.Model.raceSetter();
        });
        $('.button-dwarf').click(function () {
            $('.race-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('dwarf');
            ARK3.Model.raceSetter();
        });
        $('.button-elf').click(function () {
            $('.race-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('elf');
            ARK3.Model.raceSetter();
        });
        $('.button-warrior').click(function () {
            $('.profession-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('warrior');
            ARK3.Model.professionSetter();
        });
        $('.button-wizard').click(function () {
            $('.profession-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('wizard');
            ARK3.Model.professionSetter();
        });
        $('.button-thief').click(function () {
            $('.profession-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('thief');
            ARK3.Model.professionSetter();
        });
        $('.button-explorer').click(function () {
            $('.profession-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('explorer');
            ARK3.Model.professionSetter();
        });
        $('.button-detective').click(function () {
            $('.profession-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('detective');
            ARK3.Model.professionSetter();
        });
        $('.button-haircolor-left').click(function () {
            ARK3.View.changeHaircolorOnCycle('left');
            ARK3.Model.hairColorSetter();
        });
        $('.button-haircolor-right').click(function () {
            ARK3.View.changeHaircolorOnCycle('right');
            ARK3.Model.hairColorSetter();
        });
        $('.button-clothescolor1-left').click(function () {
            ARK3.View.changeClothesColor1OnCycle('left');
            ARK3.Model.clothesColor1Setter();
        });
        $('.button-clothescolor1-right').click(function () {
            ARK3.View.changeClothesColor1OnCycle('right');
            ARK3.Model.clothesColor1Setter();
        });
        $('.button-clothescolor2-left').click(function () {
            ARK3.View.changeClothesColor2OnCycle('left');
            ARK3.Model.clothesColor2Setter();
        });
        $('.button-clothescolor2-right').click(function () {
            ARK3.View.changeClothesColor2OnCycle('right');
            ARK3.Model.clothesColor2Setter();
        });
        $('.button-skincolor-left').click(function () {
            ARK3.View.changeSkinColorOnCycle('left');
            ARK3.Model.skinColorSetter();
        });
        $('.button-skincolor-right').click(function () {
            ARK3.View.changeSkinColorOnCycle('right');
            ARK3.Model.skinColorSetter();
        });
        $('.button-weapon-left').click(function () {
            ARK3.View.changeWeaponOnCycle('left');
            ARK3.Model.weaponSetter();
        });
        $('.button-weapon-right').click(function () {
            ARK3.View.changeWeaponOnCycle('right');
            ARK3.Model.weaponSetter();
        });
        $('.right-cycle > li > a, .left-cycle > li > a').click(function () {
            $(this).blur();
        });
        $('.inventory > div').click(function () {
            $('this').addClass('active');
        });
        $('.button-save').click(function () {

        });
        //selector string for character render
        var $renderString = '.gender-options li, .race-options li, .profession-options li, .left-cycle li, .right-cycle li';
        $($renderString).click(function () {
            var $this = this;
            ARK3.View.buttonClickEffect($this);
            ARK3.Model.setCharacter();
            ARK3.View.renderCharacter();
        });
        //Inventory
        $('.head').click(function () {
            ARK3.View.renderInventoryItem('head');
        });
        $('.chest').click(function () {
            ARK3.View.renderInventoryItem('chest');
        });
        $('.feet').click(function () {
            ARK3.View.renderInventoryItem('feet');
        });
        $('.weapon').click(function () {
            ARK3.View.renderInventoryItem('weapon');
        });

    };

    return {

        init: init

    };

}(jQuery));
