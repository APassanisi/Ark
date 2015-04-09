//MOVE INTO MASTER FILE BEFORE LAUNCH
$( document ).ready(function() {

	//initial hide of elements
	$('.detail-options').hide();
	$('.detail-info').hide();
	$('.finalize-options').hide();
	$('.finalize-info').hide();

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
		$("#button-male").prop("checked", true);
	});

	$('.button-female').click(function () {
		$("#button-female").prop("checked", true);
	});

	$('.button-human').click(function () {
		$("#button-human").prop("checked", true);
	});

	$('.button-robot').click(function () {
		$("#button-robot").prop("checked", true);
	});

	$('.button-barbarian').click(function () {
		$("#button-barbarian").prop("checked", true);
	});

	$('.button-dwarf').click(function () {
		$("#button-dwarf").prop("checked", true);
	});

	$('.button-elf').click(function () {
		$("#button-elf").prop("checked", true);
	});

	$('.button-warrior').click(function () {
		$("#button-warrior").prop("checked", true);
	});

	$('.button-mage').click(function () {
		$("#button-mage").prop("checked", true);
	});

	$('.button-thief').click(function () {
		$("#button-thief").prop("checked", true);
	});

	$('.button-explorer').click(function () {
		$("#button-explorer").prop("checked", true);
	});

	$('.button-detective').click(function () {
		$("#button-detective").prop("checked", true);
	});


	//Cycle functions for detail options

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
		$(hairstyles[hairstyleCounter]).prop("checked", true);
	});

	$('.button-hairstyle-left').click(function () {
		if (hairstyleCounter === 0) {
			hairstyleCounter = hairstyles.length;
		}
		hairstyleCounter = (hairstyleCounter - 1) % hairstyles.length;
		$(hairstyles[hairstyleCounter]).prop("checked", true);
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
		$(haircolors[haircolorCounter]).prop("checked", true);
	});

	$('.button-haircolor-left').click(function () {
		if (haircolorCounter === 0) {
			haircolorCounter = haircolors.length;
		}
		haircolorCounter = (haircolorCounter - 1) % haircolors.length;
		$(haircolors[haircolorCounter]).prop("checked", true);
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
		$(faces[faceCounter]).prop("checked", true);
	});

	$('.button-face-left').click(function () {
		if (faceCounter === 0) {
			faceCounter = faces.length;
		}
		faceCounter = (faceCounter - 1) % faces.length;
		$(faces[faceCounter]).prop("checked", true);
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
		$(clothescolors[clothescolorCounter]).prop("checked", true);
	});

	$('.button-clothescolor-left').click(function () {
		if (clothescolorCounter === 0) {
			clothescolorCounter = clothescolors.length;
		}
		clothescolorCounter = (clothescolorCounter - 1) % clothescolors.length;
		$(clothescolors[clothescolorCounter]).prop("checked", true);
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
		$(skincolors[skincolorCounter]).prop("checked", true);
	});

	$('.button-skincolor-left').click(function () {
		if (skincolorCounter === 0) {
			skincolorCounter = skincolors.length;
		}
		skincolorCounter = (skincolorCounter - 1) % skincolors.length;
		$(skincolors[skincolorCounter]).prop("checked", true);
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
		$(weapons[weaponCounter]).prop("checked", true);
	});

	$('.button-weapon-left').click(function () {
		if (weaponCounter === 0) {
			weaponCounter = weapons.length;
		}
		weaponCounter = (weaponCounter - 1) % weapons.length;
		$(weapons[weaponCounter]).prop("checked", true);
	});

	// var statDisplay = function (stat) {
	// 	var i,
	// 	for (i = 3; i <= 18; i++) {
	// 		if ((ARK3.CHARACTER. + stat) === i) {
	// 			$('.value-' + stat).attr('src', 'img/gameicon/numbers/Number-Icons-' + i + '.svg');
	// 		}
	// 	}
	// };

	// var statTypeArray = [
	// 	'str',
	// 	'sta',
	// 	'agi',
	// 	'wit',
	// 	'per',
	// 	'lck'
	// ];

	// for (var i = 0; i < statTypeArray.length; i++) {
	// 	statDisplay(statTypeArray[i]);
	// }

	// $('img').click(function () {
	// 	for (var i = 3; i <= 18; i++) {
 //            if (ARK3.CHARACTER.str === i) {
 //                $('.value-str').attr('src', 'img/gameicon/numbers/Number-Icons-' + i + '.svg');
 //            }
 //            if (ARK3.CHARACTER.sta === i) {
 //                $('.value-sta').attr('src', 'img/gameicon/numbers/Number-Icons-' + i + '.svg');
 //            }
 //            if (ARK3.CHARACTER.agi === i) {
 //                $('.value-agi').attr('src', 'img/gameicon/numbers/Number-Icons-' + i + '.svg');
 //            }
 //            if (ARK3.CHARACTER.wit === i) {
 //                $('.value-wit').attr('src', 'img/gameicon/numbers/Number-Icons-' + i + '.svg');
 //            }
 //            if (ARK3.CHARACTER.per === i) {
 //                $('.value-per').attr('src', 'img/gameicon/numbers/Number-Icons-' + i + '.svg');
 //            }
 //            if (ARK3.CHARACTER.lck === i) {
 //                $('.value-lck').attr('src', 'img/gameicon/numbers/Number-Icons-' + i + '.svg');
 //            }
 //        };
	// });
});