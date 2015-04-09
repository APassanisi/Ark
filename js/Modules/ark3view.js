//MOVE INTO MASTER FILE BEFORE LAUNCH
$( document ).ready(function() {

	//Initial character build
	var init = function () {
		displayCharacter();
	};

	//initial hide of elements
	$('.detail-options').hide();
	$('.detail-info').hide();
	$('.finalize-options').hide();
	$('.finalize-info').hide();

	//Panel selectors
	var hideProgressPanels = function () {
		$('.basic-options').hide();
		$('.detail-options').hide();
		$('.finalize-options').hide();
		$('.basic-info').hide();
		$('.detail-info').hide();
		$('.finalize-info').hide();
	};

	$('.button-basic').click(function () {
		hideProgressPanels();
		$('.basic-options').show();
		$('.basic-info').show();
	});

	$('.button-detail').click(function () {
		hideProgressPanels();
		$('.detail-options').show();
		$('.detail-info').show();
	});

	$('.button-finalize').click(function () {
		hideProgressPanels();
		$('.finalize-options').show();
		$('.finalize-info').show();
	});


	//Click the image - Change the radio button.
	$('.button-male').click(function () {
		$('#button-male').prop('checked', true);
	});

	$('.button-female').click(function () {
		$('#button-female').prop('checked', true);
	});

	$('.button-human').click(function () {
		$('#button-human').prop('checked', true);
	});

	$('.button-robot').click(function () {
		$('#button-robot').prop('checked', true);
	});

	$('.button-barbarian').click(function () {
		$('#button-barbarian').prop('checked', true);
	});

	$('.button-dwarf').click(function () {
		$('#button-dwarf').prop('checked', true);
	});

	$('.button-elf').click(function () {
		$('#button-elf').prop('checked', true);
	});

	$('.button-warrior').click(function () {
		$('#button-warrior').prop('checked', true);
	});

	$('.button-mage').click(function () {
		$('#button-mage').prop('checked', true);
	});

	$('.button-thief').click(function () {
		$('#button-thief').prop('checked', true);
	});

	$('.button-explorer').click(function () {
		$('#button-explorer').prop('checked', true);
	});

	$('.button-detective').click(function () {
		$('#button-detective').prop('checked', true);
	});

	//Cycle functions for detail options
	//TODO
	//abstract functions into module

	//Hairstyle Cycle
    var hairstyles = [
    '#button-Normal',
    '#button-Messy',
    '#button-Long',
    '#button-Bald',
    '#button-Braid'
    ];
    var hairstyleCounter = 0;

	$('.button-hairstyle-right').click(function () {
		hairstyleCounter = (hairstyleCounter + 1) % hairstyles.length;
		$(hairstyles[hairstyleCounter]).prop('checked', true);
	});

	$('.button-hairstyle-left').click(function () {
		if (hairstyleCounter === 0) {
			hairstyleCounter = hairstyles.length;
		}
		hairstyleCounter = (hairstyleCounter - 1) % hairstyles.length;
		$(hairstyles[hairstyleCounter]).prop('checked', true);
	});


	//Haircolor Cycle
    var haircolors = [
    '#button-Brown',
    '#button-Black',
    '#button-Ginger',
    '#button-Blonde',
    '#button-Gray'
    ];
    var haircolorCounter = 0;

	$('.button-haircolor-right').click(function () {
		haircolorCounter = (haircolorCounter + 1) % haircolors.length;
		$(haircolors[haircolorCounter]).prop('checked', true);
	});

	$('.button-haircolor-left').click(function () {
		if (haircolorCounter === 0) {
			haircolorCounter = haircolors.length;
		}
		haircolorCounter = (haircolorCounter - 1) % haircolors.length;
		$(haircolors[haircolorCounter]).prop('checked', true);
	});


	//Face Cycle
    var faces = [
    '#button-Passive',
    '#button-Excited',
    '#button-Angry',
    '#button-Happy',
    '#button-Tired'
    ];
    var faceCounter = 0;

	$('.button-face-right').click(function () {
		faceCounter = (faceCounter + 1) % faces.length;
		$(faces[faceCounter]).prop('checked', true);
	});

	$('.button-face-left').click(function () {
		if (faceCounter === 0) {
			faceCounter = faces.length;
		}
		faceCounter = (faceCounter - 1) % faces.length;
		$(faces[faceCounter]).prop('checked', true);
	});


	//Clothes Color Cycle
    var clothescolors = [
    '#button-Blue',
    '#button-Green',
    '#button-Red',
    '#button-Yellow',
    '#button-Purple'
    ];
    var clothescolorCounter = 0;

	$('.button-clothescolor-right').click(function () {
		clothescolorCounter = (clothescolorCounter + 1) % clothescolors.length;
		$(clothescolors[clothescolorCounter]).prop('checked', true);
	});

	$('.button-clothescolor-left').click(function () {
		if (clothescolorCounter === 0) {
			clothescolorCounter = clothescolors.length;
		}
		clothescolorCounter = (clothescolorCounter - 1) % clothescolors.length;
		$(clothescolors[clothescolorCounter]).prop('checked', true);
	});


	//Skincolor Cycle
    var skincolors = [
    '#button-Pale',
    '#button-Light',
    '#button-Medium',
    '#button-Tan',
    '#button-Dark'
    ];
    var skincolorCounter = 0;

	$('.button-skincolor-right').click(function () {
		skincolorCounter = (skincolorCounter + 1) % skincolors.length;
		$(skincolors[skincolorCounter]).prop('checked', true);
	});

	$('.button-skincolor-left').click(function () {
		if (skincolorCounter === 0) {
			skincolorCounter = skincolors.length;
		}
		skincolorCounter = (skincolorCounter - 1) % skincolors.length;
		$(skincolors[skincolorCounter]).prop('checked', true);
	});


	//Weapon Cycle
    var weapons = [
    '#button-weapon-1',
    '#button-weapon-2',
    '#button-weapon-3',
    '#button-weapon-4',
    '#button-weapon-5'
    ];
    var weaponCounter = 0;

	$('.button-weapon-right').click(function () {
		weaponCounter = (weaponCounter + 1) % weapons.length;
		$(weapons[weaponCounter]).prop('checked', true);
	});

	$('.button-weapon-left').click(function () {
		if (weaponCounter === 0) {
			weaponCounter = weapons.length;
		}
		weaponCounter = (weaponCounter - 1) % weapons.length;
		$(weapons[weaponCounter]).prop('checked', true);
	});

	//Button effect on click
	$('img').click(function(){
		$(this).fadeTo(50, 0.5);
		$(this).fadeTo(50, 1);
	});

	//Character Builder Click Handler
	$('.race-button-container img').click(function () {
        ARK3.characterBuilder.characterSetter();
    });

    $('.profession-button-container img').click(function () {
        ARK3.characterBuilder.characterSetter();
    });

    $('.hairstyle-container .button-cycle').click(function () {
        ARK3.characterBuilder.hairStyleSetter();
    });

    $('.haircolor-container .button-cycle').click(function () {
        ARK3.characterBuilder.hairColorSetter();
    });

    $('.face-container .button-cycle').click(function () {
        ARK3.characterBuilder.faceSetter();
    });

    $('.clothescolor-container .button-cycle').click(function () {
        ARK3.characterBuilder.clothesColorSetter();
    });

    $('.skincolor-container .button-cycle').click(function () {
        ARK3.characterBuilder.skinColorSetter();
    });

    function displayStats () {
    	for (var i = 3; i <= 18; i++) {
            if (ARK3.characterBuilder.character.str === i) {
                $('.value-str').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
            }
            if (ARK3.characterBuilder.character.sta === i) {
                $('.value-sta').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
            }
            if (ARK3.characterBuilder.character.agi === i) {
                $('.value-agi').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
            }
            if (ARK3.characterBuilder.character.wit === i) {
                $('.value-wit').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
            }
            if (ARK3.characterBuilder.character.per === i) {
                $('.value-per').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
            }
            if (ARK3.characterBuilder.character.lck === i) {
                $('.value-lck').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
            }
        };
    };

    function displayMods () {
    	for (var i = -4; i <= 4; i++) {
            if (ARK3.characterBuilder.character.strmod === i) {
                $('.value-strmod').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
            }
            if (ARK3.characterBuilder.character.stamod === i) {
                $('.value-stamod').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
            }
            if (ARK3.characterBuilder.character.agimod === i) {
                $('.value-agimod').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
            }
            if (ARK3.characterBuilder.character.witmod === i) {
                $('.value-witmod').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
            }
            if (ARK3.characterBuilder.character.permod === i) {
                $('.value-permod').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
            }
            if (ARK3.characterBuilder.character.lckmod === i) {
                $('.value-lckmod').attr('src', 'img/gameicon/numbers/NumberIcons' + i + '.svg');
            }
        };
    };

    function displayCharacter() {
    	//Race
    	$('.raceDescription').text(ARK3.characterBuilder.character.raceDescription);
    	//Profession
    	$('.professionDescription').text(ARK3.characterBuilder.character.professionDescription);
    	//Stats
    	displayStats();
    	//Modifiers
    	displayMods();
    	////Inventory
    	//Head
    	$('.head-name').text('Head: ' + ARK3.characterBuilder.character.head.itemName);
    	$('.head-ac').text('AC: ' + ARK3.characterBuilder.character.head.ac);
    	$('.head-agimod').text('AGI bonus: ' + ARK3.characterBuilder.character.head.agiBonus);
    	//Chest
    	$('.chest-name').text('Chest: ' + ARK3.characterBuilder.character.chest.itemName);
    	$('.chest-ac').text('AC: ' + ARK3.characterBuilder.character.chest.ac);
    	$('.chest-agimod').text('AGI bonus: ' + ARK3.characterBuilder.character.chest.agiBonus);
    	//Feet
    	$('.feet-name').text('Feet: ' + ARK3.characterBuilder.character.feet.itemName);
    	$('.feet-ac').text('AC: ' + ARK3.characterBuilder.character.feet.ac);
    	$('.feet-agimod').text('AGI bonus: ' + ARK3.characterBuilder.character.feet.agiBonus);
    	//Weapon
    	$('.weapon-name').text('Weapon: ' + ARK3.characterBuilder.character.weapon.itemName);
    	$('.weapon-dmg').text('Damage: ' + ARK3.characterBuilder.character.weapon.damage);
    }

    $('img').click(function (){
    	displayCharacter();
    });

});