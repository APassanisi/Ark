//Namespace
var ARK3 = ARK3 || {};

//Armory Module
ARK3.ARMORY = (function () {

    //Weapon constructor
    function Weapon(itemName, damage, description, worth) {
        this.itemName = itemName;
        this.damage = damage;
        this.description = description;
        this.worth = worth;
    }

    //Armor constructor
    function Armor(itemName, ac, agiMod, description, worth) {
        this.itemName = itemName;
        this.ac = ac;
        this.agiMod = agiMod;
        this.description = description;
        this.worth = worth;
    }

    return {

        //Weapon construction
        longsword: new Weapon("Longsword", "1D8"),
        magic: new Weapon("Magic", "4D3"),
        dagger: new Weapon("Dagger", "2D6"),
        axe: new Weapon("Axe", "1D6"),
        pistols: new Weapon("Pistols", "2D4"),

        //Armor construction
        clothCap: new Armor("Cloth cap", 0, 1),
        clothRobe: new Armor("Cloth robe", 1, 2),
        clothSlippers: new Armor("Cloth slippers", 0, 1),
        leatherHood: new Armor("Leather hood", 1, 0),
        leatherJerkin: new Armor("Leather jerkin", 2, 1),
        leatherBoots: new Armor("Leather boots", 0, 0),
        chainHelm: new Armor("Chain helm", 2, -1),
        chainShirt: new Armor("Chain shirt", 3, -2),
        chainBoots: new Armor("Chain boots", 1, -1),
        ironHelm: new Armor("Iron helm", 3, -2),
        ironBreastplate: new Armor("Iron breastplate", 4, -3),
        ironBoots: new Armor("Iron boots", 2, -2)

    };

})();

//Options for character customization
ARK3.characterOptions = {
	raceArray : [
	    {
	        race: 'human',
	        str: 11,
	        sta: 11,
	        agi: 11,
	        wit: 11,
	        per: 11,
	        lck: 11,
	        description: 'Human Human Human Human Human Human Human Human Human Human'
	    }, {
	        race: 'robot',
	        str: 11,
	        sta: 11,
	        agi: 11,
	        wit: 16,
	        per: 5,
	        lck: 11,
	        description: 'Robot Robot Robot Robot Robot Robot Robot Robot Robot Robot Robot'
	    }, {
	        race: 'barbarian',
	        str: 11,
	        sta: 16,
	        agi: 11,
	        wit: 11,
	        per: 5,
	        lck: 11,
	        description: 'Barbarian Barbarian Barbarian Barbarian Barbarian Barbarian Barbarian'
	    }, {
	        race: 'dwarf',
	        str: 13,
	        sta: 13,
	        agi: 11,
	        wit: 8,
	        per: 8,
	        lck: 11,
	        description: 'Dwarf Dwarf Dwarf Dwarf Dwarf Dwarf Dwarf Dwarf Dwarf Dwarf Dwarf Dwarf'
	    }, {
	        race: 'elf',
	        str: 8,
	        sta: 8,
	        agi: 13,
	        wit: 13,
	        per: 11,
	        lck: 11,
	        description: 'Elf Elf Elf Elf Elf Elf Elf Elf Elf Elf Elf Elf Elf Elf Elf Elf Elf Elf'
	    }
	],

	professionArray : [
	    {
	        profession: 'warrior',
	        strBonus: 2,
	        staBonus: 1,
	        agiBonus: 1,
	        witBonus: 0,
	        perBonus: 0,
	        lckBonus: 0,
	        head: ARK3.ARMORY.chainHelm,
	        chest: ARK3.ARMORY.chainShirt,
	        feet: ARK3.ARMORY.chainBoots,
	        weapon: ARK3.ARMORY.longsword,
	        description: 'warrior warrior warrior warrior warrior warrior warrior warrior warrior'
	    }, {
	        profession: 'mage',
	        strBonus: 0,
	        staBonus: 1,
	        agiBonus: 0,
	        witBonus: 2,
	        perBonus: 1,
	        lckBonus: 0,
	        head: ARK3.ARMORY.clothCap,
	        chest: ARK3.ARMORY.clothRobe,
	        feet: ARK3.ARMORY.clothSlippers,
	        weapon: ARK3.ARMORY.magic,
	        description: 'mage mage mage mage mage mage mage mage mage mage mage mage mage mage mage mage mage'
	    }, {
	        profession: 'thief',
	        strBonus: 0,
	        staBonus: 1,
	        agiBonus: 2,
	        witBonus: 0,
	        perBonus: 0,
	        lckBonus: 2,
	        head: ARK3.ARMORY.clothCap,
	        chest: ARK3.ARMORY.leatherJerkin,
	        feet: ARK3.ARMORY.clothSlippers,
	        weapon: ARK3.ARMORY.dagger,
	        description: 'thief thief thief thief thief thief thief thief thief thief thief thief thief'
	    }, {
	        profession: 'explorer',
	        strBonus: 2,
	        staBonus: 0,
	        agiBonus: 0,
	        witBonus: 0,
	        perBonus: 1,
	        lckBonus: 1,
	        head: ARK3.ARMORY.leatherHood,
	        chest: ARK3.ARMORY.leatherJerkin,
	        feet: ARK3.ARMORY.leatherBoots,
	        weapon: ARK3.ARMORY.axe,
	        description: 'explorer explorer explorer explorer explorer explorer explorer explorer explorer'
	    }, {
	        profession: 'detective',
	        strBonus: 0,
	        staBonus: 0,
	        agiBonus: 1,
	        witBonus: 0,
	        perBonus: 2,
	        lckBonus: 1,
	        head: ARK3.ARMORY.leatherHood,
	        chest: ARK3.ARMORY.leatherJerkin,
	        feet: ARK3.ARMORY.leatherBoots,
	        weapon: ARK3.ARMORY.pistols,
	        description: 'detective detective detective detective detective detective detective detective'
	    }
	],

	hairStyleArray : [
		'Normal',
		'Messy',
		'Long',
		'Bald',
		'Braid'
	],

	hairColorArray : [
		'Brown',
		'Black',
		'Ginger',
		'Blonde',
		'Gray'
	],

	faceArray : [
		'Passive',
		'Excited',
		'Angry',
		'Happy',
		'Tired'
	],

	clothesColorArray : [
		'Blue',
		'Green',
		'Red',
		'Yellow',
		'Purple'
	],

	skinColorArray : [
		'Pale',
		'Light',
		'Medium',
		'Tan',
		'Dark'
	]
};

//Character Module
ARK3.CHARACTER = (function($, raceArray, professionArray, hairStyleArray, hairColorArray, faceArray, clothesColorArray, skinColorArray) {

    var character = {
        str: 0,
        sta: 0,
        agi: 0,
        wit: 0,
        per: 0,
        lck: 0,
        strmod: 0,
        stamod: 0,
        agimod: 0,
        witmod: 0,
        permod: 0,
        lckmod: 0,
        head: null,
        chest: null,
        feet: null,
        weapon: null,
        ac: 0,
        agiFromArmor: 0,
        race: null,
        profession: null,
        raceDescription: null,
        professionDescription: null,
        hairStyle: null,
        hairColor: null,
        face: null,
        clothesColor: null,
        skinColor: null
    };

    //Check race
    $('img').click(function() {
        var i;
        //Race checker loop
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
        };

        //Profession checker loop
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
        };

        //Hair Style Loop
        for (i = 0; i < hairStyleArray.length; i++) {
            if ($('#button-' + hairStyleArray[i]).is(':checked')) {
                character.hairStyle = hairStyleArray[i];
            }
        };

        //Hair Color Loop
        for (i = 0; i < hairColorArray.length; i++) {
            if ($('#button-' + hairColorArray[i]).is(':checked')) {
                character.hairColor = hairColorArray[i];
            }
        };

        //Face Loop
        for (i = 0; i < faceArray.length; i++) {
            if ($('#button-' + faceArray[i]).is(':checked')) {
                character.face = faceArray[i];
            }
        };

        //Clothes Color Loop
        for (i = 0; i < clothesColorArray.length; i++) {
            if ($('#button-' + clothesColorArray[i]).is(':checked')) {
                character.clothesColor = clothesColorArray[i];
            }
        };

        //Skin Color Loop
        for (i = 0; i < skinColorArray.length; i++) {
            if ($('#button-' + skinColorArray[i]).is(':checked')) {
                character.skinColor = skinColorArray[i];
            }
        };



        //Calculate AGI mod from armor
        function calcAgiFromArmor() {
            var agiFromArmor = 0;
            agiFromArmor += character.head.agiMod;
            agiFromArmor += character.chest.agiMod;
            agiFromArmor += character.feet.agiMod;
            return agiFromArmor;
        }
        character.agi += calcAgiFromArmor();

        //Calculate stat modifier values
        function calcMod(stat) {
            var mod = 0;
            if (stat === 3) {
                mod = -3;
            } else if (stat >= 4 && stat <= 5) {
                mod = -2;
            } else if (stat >= 6 && stat <= 8) {
                mod = -1;
            } else if (stat >= 13 && stat <= 15) {
                mod = 1;
            } else if (stat >= 16 && stat <= 17) {
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

        //Calculate and display AC value
        function calcAC() {
            var ac = 0;
            ac += character.head.ac;
            ac += character.chest.ac;
            ac += character.feet.ac;
            ac += character.agimod;
            return ac;
        }
        character.ac = calcAC();


    });

    return character;

    	    

})($, ARK3.characterOptions.raceArray, ARK3.characterOptions.professionArray, ARK3.characterOptions.hairStyleArray, ARK3.characterOptions.hairColorArray, ARK3.characterOptions.faceArray, ARK3.characterOptions.clothesColorArray, ARK3.characterOptions.skinColorArray);
