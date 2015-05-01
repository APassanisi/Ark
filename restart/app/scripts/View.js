var ARK3 = ARK3 || {};

ARK3.View = (function ($) {

    'use strict';

    //Keep counters outside functions to save spot
    var hairstyleCounter = 0;
    var haircolorCounter = 0;
    var clothescolor1Counter = 0;
    var clothescolor2Counter = 0;
    var skincolorCounter = 0;
    var weaponCounter = 0;

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

        changeFormOnClick: function changeFormOnClick(selection) {
            $('#button-' + selection).prop('checked', true);
        },

        changeHairstyleOnCycle: function changeHairstyleOnCycle(direction) {
            var hairstyles = [
                '#button-Normal',
                '#button-Messy',
                '#button-Long',
                '#button-Bald',
                '#button-Braid'
            ];

            if (direction === 'right') {
                hairstyleCounter = (hairstyleCounter + 1) % hairstyles.length;
                $(hairstyles[hairstyleCounter]).prop('checked', true);
            } else {
                if (hairstyleCounter === 0) {
                    hairstyleCounter = hairstyles.length;
                }
                hairstyleCounter = (hairstyleCounter - 1) % hairstyles.length;
                $(hairstyles[hairstyleCounter]).prop('checked', true);
            }
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
                '#button-Passive',
                '#button-Excited',
                '#button-Angry',
                '#button-Happy',
                '#button-Tired'
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
                '#button-DarkPurple'
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
                    $('.value-str').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
                }
                if (ARK3.Model.character.sta === i) {
                    $('.value-sta').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
                }
                if (ARK3.Model.character.agi === i) {
                    $('.value-agi').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
                }
                if (ARK3.Model.character.wit === i) {
                    $('.value-wit').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
                }
                if (ARK3.Model.character.per === i) {
                    $('.value-per').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
                }
                if (ARK3.Model.character.lck === i) {
                    $('.value-lck').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
                }
            }
        },

        renderMods: function renderMods() {
            var i;
            for (i = -4; i <= 4; i++) {
                if (ARK3.Model.character.strmod === i) {
                    $('.value-strmod').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
                }
                if (ARK3.Model.character.stamod === i) {
                    $('.value-stamod').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
                }
                if (ARK3.Model.character.agimod === i) {
                    $('.value-agimod').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
                }
                if (ARK3.Model.character.witmod === i) {
                    $('.value-witmod').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
                }
                if (ARK3.Model.character.permod === i) {
                    $('.value-permod').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
                }
                if (ARK3.Model.character.lckmod === i) {
                    $('.value-lckmod').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
                }
            }
        },

        renderCharacterDisplay: function renderCharacterDisplay() {
            //Load SVG
            var srcDirectory = 'includes/SVG/';
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
                .load(characterString, null, function() {
                    $('polygon[fill="#B3B3B3"]').attr('class', 'clothescolor1');
                    $('polygon[fill="#8C8C8C"]').attr('class', 'clothescolor2');
                    $('polygon[fill="#C7B570"]').attr('class', 'skincolor');
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

