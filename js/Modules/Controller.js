var ARK3 = ARK3 || {};

ARK3.Controller = (function ($) {

    var init = function () {

        $('.button-basic').click(function () {
            ARK3.View.hideProgressPanels();
            ARK3.View.showBasicPanels();
        });
        $('.button-detail').click(function () {
            ARK3.View.hideProgressPanels();
            ARK3.View.showDetailPanels();
        });
        $('.button-finalize').click(function () {
            ARK3.View.hideProgressPanels();
            ARK3.View.showFinalizePanels();
        });
        $('.button-male').click(function () {
            ARK3.View.changeFormOnClick('male');
            ARK3.Model.genderSetter();
        });
        $('.button-female').click(function () {
            ARK3.View.changeFormOnClick('female');
            ARK3.Model.genderSetter();
        });
        $('.button-human').click(function () {
            ARK3.View.changeFormOnClick('human');
            ARK3.Model.raceSetter();
        });
        $('.button-robot').click(function () {
            ARK3.View.changeFormOnClick('robot');
            ARK3.Model.raceSetter();
        });
        $('.button-barbarian').click(function () {
            ARK3.View.changeFormOnClick('barbarian');
            ARK3.Model.raceSetter();
        });
        $('.button-dwarf').click(function () {
            ARK3.View.changeFormOnClick('dwarf');
            ARK3.Model.raceSetter();
        });
        $('.button-elf').click(function () {
            ARK3.View.changeFormOnClick('elf');
            ARK3.Model.raceSetter();
        });
        $('.button-warrior').click(function () {
            ARK3.View.changeFormOnClick('warrior');
            ARK3.Model.professionSetter();
        });
        $('.button-mage').click(function () {
            ARK3.View.changeFormOnClick('mage');
            ARK3.Model.professionSetter();
        });
        $('.button-thief').click(function () {
            ARK3.View.changeFormOnClick('thief');
            ARK3.Model.professionSetter();
        });
        $('.button-explorer').click(function () {
            ARK3.View.changeFormOnClick('explorer');
            ARK3.Model.professionSetter();
        });
        $('.button-detective').click(function () {
            ARK3.View.changeFormOnClick('detective');
            ARK3.Model.professionSetter();
        });
        $('.button-hairstyle-left').click(function () {
            ARK3.View.changeHairstyleOnCycle('left');
            ARK3.Model.hairStyleSetter();
        });
        $('.button-hairstyle-right').click(function () {
            ARK3.View.changeHairstyleOnCycle('right');
            ARK3.Model.hairStyleSetter();
        });
        $('.button-haircolor-left').click(function () {
            ARK3.View.changeHaircolorOnCycle('left');
            ARK3.Model.hairColorSetter();
        });
        $('.button-haircolor-right').click(function () {
            ARK3.View.changeHaircolorOnCycle('right');
            ARK3.Model.hairColorSetter();
        });
        $('.button-face-left').click(function () {
            ARK3.View.changeFacesOnCycle('left');
            ARK3.Model.faceSetter();
        });
        $('.button-face-right').click(function () {
            ARK3.View.changeFacesOnCycle('right');
            ARK3.Model.faceSetter();
        });
        $('.button-clothescolor-left').click(function () {
            ARK3.View.changeClothesColorOnCycle('left');
            ARK3.Model.clothesColorSetter();
        });
        $('.button-clothescolor-right').click(function () {
            ARK3.View.changeClothesColorOnCycle('right');
            ARK3.Model.clothesColorSetter();
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
        $('img').click(function () {
            var $this = this;
            ARK3.View.buttonClickEffect($this);
            ARK3.Model.setCharacter();
            ARK3.View.displayCharacter();
        });


        //Tooltip stuff
        $('img').powerTip({
            followMouse: true
        });

        $('.stat-str').data('powertipjq', $([
            '<p><b>This is your Strength attribute.</b></p>',
            '<p>It determines how strong you are in skill-checks.</p>',
            ].join('\n')
        ));

        $('.stat-sta').data('powertipjq', $([
            '<p><b>This is your Strength attribute.</b></p>',
            '<p>It determines how strong you are in skill-checks.</p>',
            ].join('\n')
        ));

        $('.stat-agi').data('powertipjq', $([
            '<p><b>This is your Strength attribute.</b></p>',
            '<p>It determines how strong you are in skill-checks.</p>',
            ].join('\n')
        ));

        $('.stat-wit').data('powertipjq', $([
            '<p><b>This is your Strength attribute.</b></p>',
            '<p>It determines how strong you are in skill-checks.</p>',
            ].join('\n')
        ));

        $('.stat-per').data('powertipjq', $([
            '<p><b>This is your Strength attribute.</b></p>',
            '<p>It determines how strong you are in skill-checks.</p>',
            ].join('\n')
        ));

        $('.stat-lck').data('powertipjq', $([
            '<p><b>This is your Strength attribute.</b></p>',
            '<p>It determines how strong you are in skill-checks.</p>',
            ].join('\n')
        ));

    };

    return {

        init: init

    };

}(jQuery));

$(document).ready(function () {
    ARK3.Controller.init();
});