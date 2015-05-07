var ARK3 = ARK3 || {};

ARK3.Model = (function ($) {

    'use strict';

    var character = {};

    var Weapon = function Weapon(itemName, damage, ac, agiBonus, description, worth) {
        this.itemName = itemName;
        this.damage = damage;
        this.ac = ac;
        this.agiBonus = agiBonus;
        this.description = description;
        this.worth = worth;
    };

    var Armor = function Armor(itemName, ac, agiBonus, description, worth) {
        this.itemName = itemName;
        this.ac = ac;
        this.agiBonus = agiBonus;
        this.description = description;
        this.worth = worth;
    };

    //Warrior weapons
    var longsword = new Weapon('Longsword', '1D8', 0, 0);
    var swordAndShield = new Weapon('Sword and Shield', '1D6', 1, -1);
    //wizard weapons
    var fire = new Weapon('Fire', '4D3', 0, 0);
    var ice = new Weapon('Ice', '4D3', 0, 0);
    //Thief weapons
    var dagger = new Weapon('Dagger', '1D6', 0, 0);
    var dualDaggers = new Weapon('Dual Daggers', '2D3', 0, 0);
    //Explorer weapons
    var axe = new Weapon('Axe', '1D6', 0, 0);
    var shortSword = new Weapon('Short Sword', '1D6', 0, 0);
    //Detective weapons
    var pistols = new Weapon('Pistols', '2D4', 0, 0);
    var fists = new Weapon('Fists', '2D4', 0, 0);

    //Armor
    var clothCap = new Armor('Cloth cap', 0, 1);
    var clothRobe = new Armor('Cloth robe', 1, 2);
    var clothSlippers = new Armor('Cloth slippers', 0, 1);
    var leatherHood = new Armor('Leather hood', 1, 0);
    var leatherJerkin = new Armor('Leather jerkin', 2, 1);
    var leatherBoots = new Armor('Leather boots', 0, 0);
    var chainHelm = new Armor('Chain helm', 2, -1);
    var chainShirt = new Armor('Chain shirt', 3, -2);
    var chainBoots = new Armor('Chain boots', 1, -1);
    //Not using iron set yet
    // var ironHelm = new Armor('Iron helm', 3, -2);
    // var ironBreastplate = new Armor('Iron breastplate', 4, -3);
    // var ironBoots = new Armor('Iron boots', 2, -2);

    var characterOptions = {

        genderArray: [
            'male',
            'female'
        ],

        raceArray: [{
            race: 'human',
            str: 11,
            sta: 11,
            agi: 11,
            wit: 11,
            per: 11,
            lck: 11,
            description: 'You are a Human.'
        }, {
            race: 'robot',
            str: 11,
            sta: 11,
            agi: 11,
            wit: 16,
            per: 5,
            lck: 11,
            description: 'You are a Robot.'
        }, {
            race: 'barbarian',
            str: 11,
            sta: 16,
            agi: 11,
            wit: 11,
            per: 5,
            lck: 11,
            description: 'You are a Barbarian.'
        }, {
            race: 'dwarf',
            str: 13,
            sta: 13,
            agi: 11,
            wit: 8,
            per: 8,
            lck: 11,
            description: 'You are a Dwarf.'
        }, {
            race: 'elf',
            str: 8,
            sta: 8,
            agi: 13,
            wit: 13,
            per: 11,
            lck: 11,
            description: 'You are an Elf.'
        }],

        weaponsArray: [
            [longsword, swordAndShield],
            [fire, ice],
            [dagger, dualDaggers],
            [axe, shortSword],
            [pistols, fists]
        ],

        professionArray: [{
            profession: 'warrior',
            strBonus: 2,
            staBonus: 1,
            agiBonus: 1,
            witBonus: 0,
            perBonus: 0,
            lckBonus: 0,
            head: chainHelm,
            chest: chainShirt,
            feet: chainBoots,
            weapon: longsword,
            description: 'You are a warrior.'
        }, {
            profession: 'wizard',
            strBonus: 0,
            staBonus: 1,
            agiBonus: 0,
            witBonus: 2,
            perBonus: 1,
            lckBonus: 0,
            head: clothCap,
            chest: clothRobe,
            feet: clothSlippers,
            weapon: fire,
            description: 'You are a wizard.'
        }, {
            profession: 'thief',
            strBonus: 0,
            staBonus: 1,
            agiBonus: 2,
            witBonus: 0,
            perBonus: 0,
            lckBonus: 2,
            head: clothCap,
            chest: leatherJerkin,
            feet: clothSlippers,
            weapon: dagger,
            description: 'You are a thief.'
        }, {
            profession: 'explorer',
            strBonus: 2,
            staBonus: 0,
            agiBonus: 0,
            witBonus: 0,
            perBonus: 1,
            lckBonus: 1,
            head: leatherHood,
            chest: leatherJerkin,
            feet: leatherBoots,
            weapon: axe,
            description: 'You are a explorer.'
        }, {
            profession: 'detective',
            strBonus: 0,
            staBonus: 0,
            agiBonus: 1,
            witBonus: 0,
            perBonus: 2,
            lckBonus: 1,
            head: leatherHood,
            chest: leatherJerkin,
            feet: leatherBoots,
            weapon: pistols,
            description: 'You are a detective.'
        }],

        hairColorArray: [
            'Brown',
            'Black',
            'Ginger',
            'Blonde',
            'Gray'
        ],

        clothesColor1Array: [
            'Blue',
            'Green',
            'Red',
            'Yellow',
            'Light Brown'
        ],

        clothesColor2Array: [
            'Dark Blue',
            'Dark Green',
            'Dark Red',
            'Dark Yellow',
            'Dark Brown'
        ],

        skinColorArray: [
            'Pale',
            'Light',
            'Medium',
            'Tan',
            'Dark'
        ]

    };

    var agiFromArmorSetter = function agiFromArmorsetter() {
        var agiFromArmor;

        function calcAgiFromArmor() {
            agiFromArmor = 0;
            agiFromArmor += character.head.agiBonus;
            agiFromArmor += character.chest.agiBonus;
            agiFromArmor += character.feet.agiBonus;
            agiFromArmor += character.weapon.agiBonus;
            return agiFromArmor;
        }
        character.agi += calcAgiFromArmor();
    };

    var statModSetter = function statModSetter() {
        function calcMod(stat) {
            var mod = 0;
            if (stat === 3) {
                mod = -3;
            } else if (stat >= 4 && stat <= 5) {
                mod = -2;
            } else if (stat >= 6 && stat <= 8) {
                mod = -1;
            } else if (stat >= 13 && stat <= 14) {
                mod = 1;
            } else if (stat >= 15 && stat <= 17) {
                mod = 2;
            } else if (stat === 18) {
                mod = 3;
            } else {
                mod = 0;
            }
            return mod;
        }
        character.strmod = calcMod(character.str);
        character.stamod = calcMod(character.sta);
        character.agimod = calcMod(character.agi);
        character.witmod = calcMod(character.wit);
        character.permod = calcMod(character.per);
        character.lckmod = calcMod(character.lck);
    };

    var acSetter = function acSetter() {
        function calcAC() {
            var ac = 0;
            ac += character.head.ac;
            ac += character.chest.ac;
            ac += character.feet.ac;
            ac += character.agimod;
            ac += character.weapon.ac;
            return ac;
        }
        character.ac = calcAC();
    };

    var hpSetter = function hpSetter() {
        function calcHP() {
            var hp = 4;
            hp += character.stamod;
            return hp;
        }
        character.hp = calcHP();
    };

    var statSetter = function statSetter() {
        agiFromArmorSetter();
        statModSetter();
        acSetter();
        hpSetter();
    };



    return {

        genderSetter: function genderSetter() {
            var i;
            for (i = 0; i < characterOptions.genderArray.length; i++) {
                if ($('#button-' + characterOptions.genderArray[i]).is(':checked')) {
                    character.gender = characterOptions.genderArray[i];
                }
            }
        },

        raceSetter: function raceSetter() {
            var i;
            for (i = 0; i < characterOptions.raceArray.length; i++) {
                if ($('#button-' + characterOptions.raceArray[i].race).is(':checked')) {
                    character.str = characterOptions.raceArray[i].str;
                    character.sta = characterOptions.raceArray[i].sta;
                    character.agi = characterOptions.raceArray[i].agi;
                    character.wit = characterOptions.raceArray[i].wit;
                    character.per = characterOptions.raceArray[i].per;
                    character.lck = characterOptions.raceArray[i].lck;
                    character.race = characterOptions.raceArray[i].race;
                    character.raceDescription = characterOptions.raceArray[i].description;
                }
            }
        },

        professionSetter: function professionSetter() {
            var i;
            for (i = 0; i < characterOptions.professionArray.length; i++) {
                if ($('#button-' + characterOptions.professionArray[i].profession).is(':checked')) {
                    //this.raceSetter();
                    character.str += characterOptions.professionArray[i].strBonus;
                    character.sta += characterOptions.professionArray[i].staBonus;
                    character.agi += characterOptions.professionArray[i].agiBonus;
                    character.wit += characterOptions.professionArray[i].witBonus;
                    character.per += characterOptions.professionArray[i].perBonus;
                    character.lck += characterOptions.professionArray[i].lckBonus;
                    character.head = characterOptions.professionArray[i].head;
                    character.chest = characterOptions.professionArray[i].chest;
                    character.feet = characterOptions.professionArray[i].feet;
                    character.weapon = characterOptions.professionArray[i].weapon;
                    character.profession = characterOptions.professionArray[i].profession;
                    character.professionDescription = characterOptions.professionArray[i].description;
                }
            }
            statSetter();
        },

        hairColorSetter: function hairColorSetter() {
            var i;
            for (i = 0; i < characterOptions.hairColorArray.length; i++) {
                if ($('#button-' + characterOptions.hairColorArray[i]).is(':checked')) {
                    character.hairColor = characterOptions.hairColorArray[i];
                }
            }
        },

        clothesColor1Setter: function clothesColor1Setter() {
            var i;
            for (i = 0; i < characterOptions.clothesColor1Array.length; i++) {
                if ($('#button-' + characterOptions.clothesColor1Array[i]).is(':checked')) {
                    character.clothesColor1 = characterOptions.clothesColor1Array[i];
                }
            }
        },

        clothesColor2Setter: function clothesColor2Setter() {
            var i;
            for (i = 0; i < characterOptions.clothesColor2Array.length; i++) {
                if ($('#button-' + characterOptions.clothesColor2Array[i]).is(':checked')) {
                    character.clothesColor2 = characterOptions.clothesColor2Array[i];
                }
            }
        },

        skinColorSetter: function skinColorSetter() {
            var i;
            for (i = 0; i < characterOptions.skinColorArray.length; i++) {
                if ($('#button-' + characterOptions.skinColorArray[i]).is(':checked')) {
                    character.skinColor = characterOptions.skinColorArray[i];
                }
            }
        },

        weaponSetter: function weaponSetter() {
            var weaponOptions;
            var i;
            if (character.profession === 'warrior') {
                weaponOptions = characterOptions.weaponsArray[0];
            } else if (character.profession === 'wizard') {
                weaponOptions = characterOptions.weaponsArray[1];
            } else if (character.profession === 'thief') {
                weaponOptions = characterOptions.weaponsArray[2];
            } else if (character.profession === 'explorer') {
                weaponOptions = characterOptions.weaponsArray[3];
            } else {
                weaponOptions = characterOptions.weaponsArray[4];
            }

            for (i = 0; i < weaponOptions.length; i++) {
                if ($('#button-weapon-1').is(':checked')) {
                    character.weapon = weaponOptions[0];
                } else {
                    character.weapon = weaponOptions[1];
                }
            }

        },

        setCharacter: function setCharacter() {
            this.genderSetter();
            this.raceSetter();
            this.professionSetter();
            this.hairColorSetter();
            this.clothesColor1Setter();
            this.clothesColor2Setter();
            this.skinColorSetter();
            this.weaponSetter();
        },

        character: character,

        init: function init() {
            this.setCharacter();
        }

    };

}(jQuery));
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
            $('.detail-options li').removeClass('active');
            $('.button-haircolor').addClass('active');
            ARK3.View.changeHaircolorOnCycle('left');
            ARK3.Model.hairColorSetter();
        });
        $('.button-haircolor-right').click(function () {
            $('.detail-options li').removeClass('active');
            $('.button-haircolor').addClass('active');
            ARK3.View.changeHaircolorOnCycle('right');
            ARK3.Model.hairColorSetter();
        });
        $('.button-clothescolor1-left').click(function () {
            $('.detail-options li').removeClass('active');
            $('.button-clothescolor1').addClass('active');
            ARK3.View.changeClothesColor1OnCycle('left');
            ARK3.Model.clothesColor1Setter();
        });
        $('.button-clothescolor1-right').click(function () {
            $('.detail-options li').removeClass('active');
            $('.button-clothescolor1').addClass('active');
            ARK3.View.changeClothesColor1OnCycle('right');
            ARK3.Model.clothesColor1Setter();
        });
        $('.button-clothescolor2-left').click(function () {
            $('.detail-options li').removeClass('active');
            $('.button-clothescolor2').addClass('active');
            ARK3.View.changeClothesColor2OnCycle('left');
            ARK3.Model.clothesColor2Setter();
        });
        $('.button-clothescolor2-right').click(function () {
            $('.detail-options li').removeClass('active');
            $('.button-clothescolor2').addClass('active');
            ARK3.View.changeClothesColor2OnCycle('right');
            ARK3.Model.clothesColor2Setter();
        });
        $('.button-skincolor-left').click(function () {
            $('.detail-options li').removeClass('active');
            $('.button-skincolor').addClass('active');
            ARK3.View.changeSkinColorOnCycle('left');
            ARK3.Model.skinColorSetter();
        });
        $('.button-skincolor-right').click(function () {
            $('.detail-options li').removeClass('active');
            $('.button-skincolor').addClass('active');
            ARK3.View.changeSkinColorOnCycle('right');
            ARK3.Model.skinColorSetter();
        });
        $('.button-weapon-left').click(function () {
            $('.detail-options li').removeClass('active');
            $('.button-weapon').addClass('active');
            ARK3.View.changeWeaponOnCycle('left');
            ARK3.Model.weaponSetter();
        });
        $('.button-weapon-right').click(function () {
            $('.detail-options li').removeClass('active');
            $('.button-weapon').addClass('active');
            ARK3.View.changeWeaponOnCycle('right');
            ARK3.Model.weaponSetter();
        });
        $('.button-name, #name').click(function () {
            $('.finalize-options li:not(.button-save').removeClass('active');
            $('.button-name').addClass('active');
        });
        $('.button-biography, #biography').click(function () {
            $('.finalize-options li:not(.button-save').removeClass('active');
            $('.button-biography').addClass('active');
        });
        $('.button-save').click(function () {

        });
        $('.nav').click(function () {
            var $this = this;
            ARK3.View.buttonClickEffect($this);
            ARK3.Model.setCharacter();
            ARK3.View.renderCharacter();
        });

        //Inventory for mobile view click
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


        //Tooltip stuff
        $('img, div').powerTip({
            followMouse: true
        });

        $('.hp-img').data('powertip', '<b>This is how many hit points you have.</b><br>' +
            'Your Stamina modifier increases your hit points.');

        $('.ac-img').data('powertip', '<b>This is your armor class.</b><br>' +
            'Your AC is calculated from your armor quality and AGI modifier.');

        $('.stat-str, .value-str').data('powertip', '<b>This is your Strength attribute.</b>');

        $('.stat-sta, .value-sta').data('powertip', '<b>This is your Stamina attribute.</b>');

        $('.stat-agi, .value-agi').data('powertip', '<b>This is your Agility attribute.</b>');

        $('.stat-wit, .value-wit').data('powertip', '<b>This is your Strength attribute.</b>');

        $('.stat-per, .value-per').data('powertip', '<b>This is your Personality attribute.</b>');

        $('.stat-lck, .value-lck').data('powertip', '<b>This is your Luck attribute.</b>');


        $('.value-strmod').data('powertip', '<b>This is your Strength modifier.</b><br>' +
            'Your modifier determines how well you perform<br>' +
            'in skill-checks based on that stat');

        $('.value-stamod').data('powertip', '<b>This is your Stamina modifier.</b><br>' +
            'Your modifier determines how well you perform<br>' +
            'in skill-checks based on that stat');

        $('.value-agimod').data('powertip', '<b>This is your Agility modifier.</b><br>' +
            'Your modifier determines how well you perform<br>' +
            'in skill-checks based on that stat');

        $('.value-witmod').data('powertip', '<b>This is your Strength modifier.</b><br>' +
            'Your modifier determines how well you perform<br>' +
            'in skill-checks based on that stat');

        $('.value-permod').data('powertip', '<b>This is your Personality modifier.</b><br>' +
            'Your modifier determines how well you perform<br>' +
            'in skill-checks based on that stat');

        $('.value-lckmod').data('powertip', '<b>This is your Luck modifier.</b><br>' +
            'Your modifier determines how well you perform<br>' +
            'in skill-checks based on that stat');

    };

    return {

        init: init

    };

}(jQuery));
$(document).ready(function () {

    'use strict';

    ARK3.Model.init();
    ARK3.View.init();
    ARK3.Controller.init();

    //Ajax loader for game guide content
    $(document).on('click', '.races', function () {
        // guideTab();
        $('.guide-topics li').removeClass('active');
        $(this).addClass('active');
        $('.guide-page').hide()
            .load('races.html')
            .fadeIn();
    });

    $(document).on('click', '.professions', function () {
        // guideTab();
        $('.guide-topics li').removeClass('active');
        $(this).addClass('active');
        $('.guide-page').hide()
            .load('professions.html')
            .fadeIn();
    });

    $(document).on('click', '.game-mechanics', function () {
        // guideTab();
        $('.guide-topics li').removeClass('active');
        $(this).addClass('active');
        $('.guide-page').hide()
            .load('gamemechanics.html')
            .fadeIn();
    });

});

