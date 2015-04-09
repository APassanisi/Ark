var ARK3 = ARK3 || {};

ARK3.characterBuilder = (function ($, genderArray, raceArray, professionArray, hairStyleArray, hairColorArray, faceArray, clothesColorArray, skinColorArray) {

    //Private

    var character = {};

    function genderSetter() {
        var i;
        for (i = 0; i < genderArray.length; i++) {
            if ($('#button-' + genderArray[i]).is(':checked')) {
                character.gender = genderArray[i];
            }
        }
    }

    function raceSetter() {
        var i;
        for (i = 0; i < raceArray.length; i++) {
            if ($('#button-' + raceArray[i].race).is(':checked')) {
                character.str = raceArray[i].str;
                character.sta = raceArray[i].sta;
                character.agi = raceArray[i].agi;
                character.wit = raceArray[i].wit;
                character.per = raceArray[i].per;
                character.lck = raceArray[i].lck;
                character.race = raceArray[i].race;
                character.raceDescription = raceArray[i].description;
            }
        }
    }

    function professionSetter() {
        var i;
        for (i = 0; i < professionArray.length; i++) {
            if ($('#button-' + professionArray[i].profession).is(':checked')) {
                character.str += professionArray[i].strBonus;
                character.sta += professionArray[i].staBonus;
                character.agi += professionArray[i].agiBonus;
                character.wit += professionArray[i].witBonus;
                character.per += professionArray[i].perBonus;
                character.lck += professionArray[i].lckBonus;
                character.head = professionArray[i].head;
                character.chest = professionArray[i].chest;
                character.feet = professionArray[i].feet;
                character.weapon = professionArray[i].weapon;
                character.profession = professionArray[i].profession;
                character.professionDescription = professionArray[i].description;
            }
        }
    }

    function agiFromArmorSetter() {
        var agiFromArmor;
        (function () {
            agiFromArmor = 0;
            agiFromArmor += character.head.agiBonus;
            agiFromArmor += character.chest.agiBonus;
            agiFromArmor += character.feet.agiBonus;
            return agiFromArmor;
        })();

        character.agi += agiFromArmor;
    }

    function statModSetter() {
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
        };
    
        character.strmod = calcMod(character.str);
        character.stamod = calcMod(character.sta);
        character.agimod = calcMod(character.agi);
        character.witmod = calcMod(character.wit);
        character.permod = calcMod(character.per);
        character.lckmod = calcMod(character.lck);
    }

    function acSetter() {
        function calcAC() {
            var ac = 0;
            ac += character.head.ac;
            ac += character.chest.ac;
            ac += character.feet.ac;
            ac += character.agimod;
            return ac;
        };
        character.ac = calcAC();
    }

    function extraStatSetter() {
        agiFromArmorSetter();
        statModSetter();
        acSetter();
    }

    //Public

    return {

        characterSetter: function () {
            genderSetter();
            raceSetter();
            professionSetter();
            extraStatSetter();
        },

        hairStyleSetter: function () {
            var i;
            for (i = 0; i < hairStyleArray.length; i++) {
                if ($('#button-' + hairStyleArray[i]).is(':checked')) {
                    character.hairStyle = hairStyleArray[i];
                }
            };
        },

        hairColorSetter: function () {
            var i;
            for (i = 0; i < hairColorArray.length; i++) {
                if ($('#button-' + hairColorArray[i]).is(':checked')) {
                    character.hairColor = hairColorArray[i];
                }
            }
        },

        faceSetter: function () {
            var i;
            for (i = 0; i < faceArray.length; i++) {
                if ($('#button-' + faceArray[i]).is(':checked')) {
                    character.face = faceArray[i];
                }
            }
        },

        clothesColorSetter: function () {
            var i;
            for (i = 0; i < clothesColorArray.length; i++) {
                if ($('#button-' + clothesColorArray[i]).is(':checked')) {
                    character.clothesColor = clothesColorArray[i];
                }
            }
        },

        skinColorSetter: function () {
            var i;
            for (i = 0; i < skinColorArray.length; i++) {
                if ($('#button-' + skinColorArray[i]).is(':checked')) {
                    character.skinColor = skinColorArray[i];
                }
            }
        },

        character: character
    };

})($, ARK3.characterOptions.genderArray, ARK3.characterOptions.raceArray, ARK3.characterOptions.professionArray, ARK3.characterOptions.hairStyleArray, ARK3.characterOptions.hairColorArray, ARK3.characterOptions.faceArray, ARK3.characterOptions.clothesColorArray, ARK3.characterOptions.skinColorArray);
