var ARK3 = ARK3 || {};

ARK3.characterOptions = (function() {

	characterOptions = {

		genderArray : [
			'male',
			'female'
		],

		raceArray : [
		    {
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
		        head: ARK3.armory.chainHelm,
		        chest: ARK3.armory.chainShirt,
		        feet: ARK3.armory.chainBoots,
		        weapon: ARK3.armory.longsword,
		        description: 'You are a warrior.'
		    }, {
		        profession: 'mage',
		        strBonus: 0,
		        staBonus: 1,
		        agiBonus: 0,
		        witBonus: 2,
		        perBonus: 1,
		        lckBonus: 0,
		        head: ARK3.armory.clothCap,
		        chest: ARK3.armory.clothRobe,
		        feet: ARK3.armory.clothSlippers,
		        weapon: ARK3.armory.magic,
		        description: 'You are a mage.'
		    }, {
		        profession: 'thief',
		        strBonus: 0,
		        staBonus: 1,
		        agiBonus: 2,
		        witBonus: 0,
		        perBonus: 0,
		        lckBonus: 2,
		        head: ARK3.armory.clothCap,
		        chest: ARK3.armory.leatherJerkin,
		        feet: ARK3.armory.clothSlippers,
		        weapon: ARK3.armory.dagger,
		        description: 'You are a thief.'
		    }, {
		        profession: 'explorer',
		        strBonus: 2,
		        staBonus: 0,
		        agiBonus: 0,
		        witBonus: 0,
		        perBonus: 1,
		        lckBonus: 1,
		        head: ARK3.armory.leatherHood,
		        chest: ARK3.armory.leatherJerkin,
		        feet: ARK3.armory.leatherBoots,
		        weapon: ARK3.armory.axe,
		        description: 'You are a explorer.'
		    }, {
		        profession: 'detective',
		        strBonus: 0,
		        staBonus: 0,
		        agiBonus: 1,
		        witBonus: 0,
		        perBonus: 2,
		        lckBonus: 1,
		        head: ARK3.armory.leatherHood,
		        chest: ARK3.armory.leatherJerkin,
		        feet: ARK3.armory.leatherBoots,
		        weapon: ARK3.armory.pistols,
		        description: 'You are a detective.'
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

	return characterOptions;

})();