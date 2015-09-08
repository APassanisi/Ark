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
    //Wizard weapons
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

    var humanDescripton = 'Humans are probably the most numerous and wide spread race. Perhaps well aided by their flexibility and self sufficiency they have expanded at a rate not matched by any other race, and place considerable value on the merits of exploration and discovery.';

    var robotDescripton = 'Robots are constructs of metal and gears. Their origins as a race are mostly unknown, even to them. They constantly repair themselves, and as long as they can acquire the necessary parts, are immune to aging. Robot communities are uncommon, and exist mainly to offer maintanaince. Most of the other organic races feel uncomfortable with allowing them to participate in their own communities.';

    var barbarianDescripton = 'Barbarians are generally characterized as a rough, somewhat primitive people, and while their society has advanced beyond a tribal level, they maintain many aspects of tribal culture even today. They are naturally warlike and have a strong affinity for combat. Barbarians also have a strong sense of loyalty, honor, and justice, and admire these qualities in others. They are generally not a deeply intellectual or philisophical race, and even the religious among them tend to prefer simple, physical pleasures to intensive study or mental challenges.';

    var dwarfDescripton = 'The dwarves are an old, hardy race, older than the humans and possibly even older than the elves. They live within the earth, in a harmony that often boggles more surface-bound races - even a hill dwarf can sniff a handful of dirt and tell whether it would be good for planting crops, for example. Their mountain cousins, meanwhile, have such a keen sense of the stone around them that they can tell worked stone from natural hollows, and even how far down they are.';

    var elfDescripton = 'The Elves’ very slenderness tends to make them seem taller than Humans, though their actual size varies depending on where they call home. The most common variety hail from forests, but ones living in mountains or seas are not unknown. Wherever they come from, they all share an affinity for nature and a sense of duty toward the animals and things of their native environment.';

    var warriorDescripton = 'Some take up arms for glory, wealth, or revenge. Others do battle to prove themselves, to protect others, or because they know nothing else. Still others learn the ways of weaponcraft to hone their bodies in battle and prove their mettle in the forge of war. Lords of the battlefield, warriors are a disparate lot, training with many weapons or just one, perfecting the uses of armor, learning the fighting techniques of exotic masters, and studying the art of combat, all to shape themselves into living weapons. Far more than mere thugs, these skilled warriors reveal the true deadliness of their weapons, turning hunks of metal into arms capable of taming kingdoms, slaughtering monsters, and rousing the hearts of armies. Soldiers, knights, hunters, and artists of war, warriors are unparalleled champions, and woe to those who dare stand against them.';

    var wizardDescripton = 'Beyond the veil of the mundane hide the secrets of absolute power. The works of beings beyond mortals, the legends of realms where gods and spirits tread, the lore of creations both wondrous and terrible—such mysteries call to those with the ambition and the intellect to rise above the common folk to grasp true might. Such is the path of the wizard. These shrewd magic-users seek, collect, and covet esoteric knowledge, drawing on cultic arts to work wonders beyond the abilities of mere mortals. While some might choose a particular field of magical study and become masters of such powers, others embrace versatility, reveling in the unbounded wonders of all magic. In either case, wizards prove a cunning and potent lot, capable of smiting their foes, empowering their allies, and shaping the world to their every desire.';

    var thiefDescripton = 'Life is an endless adventure for those who live by their wits. Ever just one step ahead of danger, thieves bank on their cunning, skill, and charm to bend fate to their favor. Never knowing what to expect, they prepare for everything, becoming masters of a wide variety of skills, training themselves to be adept manipulators, agile acrobats, shadowy stalkers, or masters of any of dozens of other professions or talents. Thieves and gamblers, fast talkers and diplomats, bandits and bounty hunters, and explorers and investigators all might be considered thieves, as well as countless other professions that rely upon wits, prowess, or luck. Although many thieves favor cities and the innumerable opportunities of civilization, some embrace lives on the road, journeying far, meeting exotic people, and facing fantastic danger in pursuit of equally fantastic riches. In the end, any who desire to shape their fates and live life on their own terms might come to be called thieves.';

    var explorerDescripton = 'Explorers take pride in discovering the unknown and finding places and things no one else has seen. Often found in the wilds, explorers make excellent hunters.Knowledgeable, patient, and skilled hunters, explorers hound man, beast, and monster alike, gaining insight into the way of the predator, skill in varied environments, and ever more lethal martial prowess. While some track man-eating creatures to protect the frontier, others pursue more cunning game—even fugitives among their own people.';

    var detectiveDescripton = 'Whether on the trail of a fugitive, a long-lost treasure trove, or a criminal mastermind, detectives are motivated by an intense curiosity about the world and use knowledge of it as a weapon. Mixing gumption and learnedness into a personal alchemy of daring, detectives are full of surprises. Observing the world around them, they gain valuable knowledge about the situation theyre in, process that information using inspiration and deduction, and cut to the quick of the matter in unexpected ways. Detectives are always evaluating situations they encounter, sizing up potential foes, and looking out for secret dangers, all while using their vast knowledge and powers of perception to find solutions to the most perplexing problems.';

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
            description: 'You are a Human. ' + humanDescripton
        }, {
            race: 'robot',
            str: 11,
            sta: 11,
            agi: 11,
            wit: 16,
            per: 5,
            lck: 11,
            description: 'You are a Robot. ' + robotDescripton
        }, {
            race: 'barbarian',
            str: 11,
            sta: 16,
            agi: 11,
            wit: 11,
            per: 5,
            lck: 11,
            description: 'You are a Barbarian. ' + barbarianDescripton
        }, {
            race: 'dwarf',
            str: 13,
            sta: 13,
            agi: 11,
            wit: 8,
            per: 8,
            lck: 11,
            description: 'You are a Dwarf. ' + dwarfDescripton
        }, {
            race: 'elf',
            str: 8,
            sta: 8,
            agi: 13,
            wit: 13,
            per: 11,
            lck: 11,
            description: 'You are a Elf. ' + elfDescripton
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
            description: 'You are a warrior. ' + warriorDescripton
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
            description: 'You are a wizard. ' + wizardDescripton
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
            description: 'You are a thief. ' + thiefDescripton
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
            description: 'You are a explorer. ' + explorerDescripton
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
            description: 'You are a detective. ' + detectiveDescripton
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
