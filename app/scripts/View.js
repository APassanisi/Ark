var ARK3 = ARK3 || {};

ARK3.View = (function ($) {

    'use strict';

    //Keep counters outside functions to save spot
    var haircolorCounter = 0;
    var clothescolor1Counter = 0;
    var clothescolor2Counter = 0;
    var skincolorCounter = 0;
    var weaponCounter = 0;

    var getColorSelectionValue = function getColorSelectionValue(option) {
        var selection;
        $('.' + option).each(function () {
            var checked = $(this).find('input:radio:checked');
            if (checked.length !== 0) {
                selection =  $(checked).val();
            }
        });
        return selection;
    };

    return {

        buttonClickEffect: function buttonClickEffect(el) {
            $(el).fadeTo(50, 0.5);
            $(el).fadeTo(50, 1);
        },

        hideProgressPanels: function hideProgressPanels() {
            $('.basic-options').hide();
            $('.detail-options').hide();
            $('.finalize-options').hide();
            $('.basic-info').hide();
            $('.detail-info').hide();
            $('.finalize-info').hide();
        },

        showBasicPanels: function showBasicPanels() {
            this.hideProgressPanels();
            $('.basic-options').fadeIn();
            $('.basic-info').fadeIn();
        },

        showDetailPanels: function showDetailPanels() {
            this.hideProgressPanels();
            $('.detail-options').fadeIn();
            $('.detail-info').fadeIn();
        },

        showFinalizePanels: function showFinalizePanels() {
            this.hideProgressPanels();
            $('.finalize-options').fadeIn();
            $('.finalize-info').fadeIn();
        },

        hideNameField: function hideNameField() {
            $('#name').hide();
        },

        hideBiography: function hideBiography() {
            $('#biography').hide();
        },

        showNameField: function showNameField() {
            $('#name').show();
        },

        showBiography: function showBiography() {
            $('#biography').show();
        },

        changeFormOnClick: function changeFormOnClick(selection) {
            $('#button-' + selection).prop('checked', true);
        },

        changeHaircolorOnCycle: function changeHaircolorOnCycle(direction) {
            var haircolors = [
                '#button-Brown',
                '#button-Black',
                '#button-Ginger',
                '#button-Blonde',
                '#button-Gray'
            ];

            if (direction === 'right') {
                haircolorCounter = (haircolorCounter + 1) % haircolors.length;
                $(haircolors[haircolorCounter]).prop('checked', true);
            } else {
                if (haircolorCounter === 0) {
                    haircolorCounter = haircolors.length;
                }
                haircolorCounter = (haircolorCounter - 1) % haircolors.length;
                $(haircolors[haircolorCounter]).prop('checked', true);
            }
        },

        changeClothesColor1OnCycle: function changeClothesColor1OnCycle(direction) {
            var clothescolors1 = [
                '#button-Blue',
                '#button-Green',
                '#button-Red',
                '#button-Yellow',
                '#button-LightBrown'
            ];

            if (direction === 'right') {
                clothescolor1Counter = (clothescolor1Counter + 1) % clothescolors1.length;
                $(clothescolors1[clothescolor1Counter]).prop('checked', true);
            } else {
                if (clothescolor1Counter === 0) {
                    clothescolor1Counter = clothescolors1.length;
                }
                clothescolor1Counter = (clothescolor1Counter - 1) % clothescolors1.length;
                $(clothescolors1[clothescolor1Counter]).prop('checked', true);
            }
        },

        changeClothesColor2OnCycle: function changeClothesColor2OnCycle(direction) {
            var clothescolors2 = [
                '#button-DarkBlue',
                '#button-DarkGreen',
                '#button-DarkRed',
                '#button-DarkYellow',
                '#button-DarkBrown'
            ];

            if (direction === 'right') {
                clothescolor2Counter = (clothescolor2Counter + 1) % clothescolors2.length;
                $(clothescolors2[clothescolor2Counter]).prop('checked', true);
            } else {
                if (clothescolor2Counter === 0) {
                    clothescolor2Counter = clothescolors2.length;
                }
                clothescolor2Counter = (clothescolor2Counter - 1) % clothescolors2.length;
                $(clothescolors2[clothescolor2Counter]).prop('checked', true);
            }
        },

        changeSkinColorOnCycle: function changeSkinColorOnCycle(direction) {
            var skincolors = [
                '#button-Pale',
                '#button-Light',
                '#button-Medium',
                '#button-Tan',
                '#button-Dark'
            ];

            if (direction === 'right') {
                skincolorCounter = (skincolorCounter + 1) % skincolors.length;
                $(skincolors[skincolorCounter]).prop('checked', true);
            } else {
                if (skincolorCounter === 0) {
                    skincolorCounter = skincolors.length;
                }
                skincolorCounter = (skincolorCounter - 1) % skincolors.length;
                $(skincolors[skincolorCounter]).prop('checked', true);
            }
        },

        changeWeaponOnCycle: function changeWeaponOnCycle(direction) {
            var weapons = [
                '#button-weapon-1',
                '#button-weapon-2'
            ];

            if (direction === 'right') {
                weaponCounter = (weaponCounter + 1) % weapons.length;
                $(weapons[weaponCounter]).prop('checked', true);
            } else {
                if (weaponCounter === 0) {
                    weaponCounter = weapons.length;
                }
                weaponCounter = (weaponCounter - 1) % weapons.length;
                $(weapons[weaponCounter]).prop('checked', true);
            }
        },

        renderStats: function renderStats() {
            var i;
            for (i = 3; i <= 18; i++) {
                if (ARK3.Model.character.str === i) {
                    $('.value-str > a').text(i);
                }
                if (ARK3.Model.character.sta === i) {
                    $('.value-sta > a').text(i);
                }
                if (ARK3.Model.character.agi === i) {
                    $('.value-agi > a').text(i);
                }
                if (ARK3.Model.character.wit === i) {
                    $('.value-wit > a').text(i);
                }
                if (ARK3.Model.character.per === i) {
                    $('.value-per > a').text(i);
                }
                if (ARK3.Model.character.lck === i) {
                    $('.value-lck > a').text(i);
                }
            }
        },

        renderMods: function renderMods() {
            var i;
            for (i = -4; i <= 4; i++) {
                if (ARK3.Model.character.strmod === i) {
                    $('.value-strmod > a').text(i);
                }
                if (ARK3.Model.character.stamod === i) {
                    $('.value-stamod > a').text(i);
                }
                if (ARK3.Model.character.agimod === i) {
                    $('.value-agimod > a').text(i);
                }
                if (ARK3.Model.character.witmod === i) {
                    $('.value-witmod > a').text(i);
                }
                if (ARK3.Model.character.permod === i) {
                    $('.value-permod > a').text(i);
                }
                if (ARK3.Model.character.lckmod === i) {
                    $('.value-lckmod > a').text(i);
                }
            }
        },

        renderCharacterDisplay: function renderCharacterDisplay() {
            var $clothescolor1 = getColorSelectionValue('clothescolor1-options-buttons');
            var $clothescolor2 = getColorSelectionValue('clothescolor2-options-buttons');
            var $skincolor = getColorSelectionValue('skincolor-options-buttons');
            var $haircolor = getColorSelectionValue('haircolor-options-buttons');
            //Load SVG
            var srcDirectory = 'images/SVG/';
            var extension = '.svg';
            var characterString = '';
            characterString += ARK3.Model.character.profession;
            characterString += ARK3.Model.character.race;
            if (ARK3.Model.character.race !== 'robot') {
                characterString += ARK3.Model.character.gender;
            }
            characterString += ARK3.Model.character.weapon.itemName;
            characterString = characterString.replace(/\s+/g, '');
            characterString = characterString.toLowerCase();
            characterString = srcDirectory + characterString + extension;
            $('.svg-container').empty()
                .load(characterString, null, function () {
                    $('polygon[fill="#B3B3B3"], rect[fill="#B3B3B3"], path[fill="#B3B3B3"]').css('fill', $clothescolor1);
                    $('polygon[fill="#8C8C8C"], rect[fill="#8C8C8C"], path[fill="#8C8C8C"]').css('fill', $clothescolor2);
                    $('polygon[fill="#C7B570"], rect[fill="#C7B570"], path[fill="#C7B570"]').css('fill', $skincolor);
                    $('polygon[fill="#6D5217"], rect[fill="#6D5217"], path[fill="#6D5217"]').css('fill', $haircolor);
                })
                .hide()
                .fadeIn('fast');
        },

        renderCharacter: function renderCharacter() {
            this.renderStats();
            this.renderMods();
            this.renderCharacterDisplay();
            $('.panel-body').text('Click on an item to view details.');
            $('.inventory div').removeClass('active');
            $('.hp').text(ARK3.Model.character.hp);
            $('.ac').text(ARK3.Model.character.ac);
            $('.raceDescription').text(ARK3.Model.character.raceDescription);
            $('.professionDescription').text(ARK3.Model.character.professionDescription);
            $('.head-name').text('Head: ' + ARK3.Model.character.head.itemName);
            $('.head-ac').text('AC: ' + ARK3.Model.character.head.ac);
            $('.head-agimod').text('AGI bonus: ' + ARK3.Model.character.head.agiBonus);
            $('.chest-name').text('Chest: ' + ARK3.Model.character.chest.itemName);
            $('.chest-ac').text('AC: ' + ARK3.Model.character.chest.ac);
            $('.chest-agimod').text('AGI bonus: ' + ARK3.Model.character.chest.agiBonus);
            $('.feet-name').text('Feet: ' + ARK3.Model.character.feet.itemName);
            $('.feet-ac').text('AC: ' + ARK3.Model.character.feet.ac);
            $('.feet-agimod').text('AGI bonus: ' + ARK3.Model.character.feet.agiBonus);
            $('.weapon-name').text('Weapon: ' + ARK3.Model.character.weapon.itemName);
            $('.weapon-dmg').text('Damage: ' + ARK3.Model.character.weapon.damage);
            $('.weapon-ac').text('AC: ' + ARK3.Model.character.weapon.ac);
            $('.weapon-agimod').text('AGI bonus: ' + ARK3.Model.character.weapon.agiBonus);
        },

        renderInventoryItem: function renderInventoryItem(item) {
            var accessItem = ARK3.Model.character[item];
            var renderItemDetails;
            renderItemDetails = '<b>' + accessItem.itemName + '</b>';
            renderItemDetails += '<br>';
            if (item === 'weapon') {
                renderItemDetails += '<b>DMG: </b>' + accessItem.damage;
                if (accessItem.ac !== 0) {
                    renderItemDetails += '<br>';
                    renderItemDetails += '<b>AC: </b>' + accessItem.ac;
                }
                if (accessItem.agiBonus !== 0) {
                    renderItemDetails += '<br>';
                    renderItemDetails += '<b>AGI bonus: </b>' + accessItem.agiBonus;
                }
            } else {
                renderItemDetails += '<b>AC: </b>' + accessItem.ac;
                renderItemDetails += '<br>';
                renderItemDetails += '<b>AGI bonus: </b>' + accessItem.agiBonus;
            }
            //Figure out better selector
            $('.head, .chest, .feet, .weapon').removeClass('active');
            $('.' + item).addClass('active');
            $('.panel-body').html(renderItemDetails);
        },

        init: function init() {
            //Initial hide of elements
            $('.detail-options').hide();
            $('.detail-info').hide();
            $('.finalize-options').hide();
            $('.finalize-info').hide();
            this.renderCharacter();
        }

    };

}(jQuery));

