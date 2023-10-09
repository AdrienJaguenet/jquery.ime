( function ( $ ) {
	'use strict';

	var kaiTilde = {
		id: 'kai-tilde',
		name: 'kai-tilde',
		description: 'Karai-Karai input keyboard',
		date: '2023-10-08',
		URL: 'https://github.com/wikimedia/jquery.ime',
		author: 'Adrien Jaguenet based on Amir E. Aharoni\'s Hausa keyboard',
		license: 'GPLv3',
		version: '1.0',
		maxKeyLength: 2,
		patterns: [
			// base Hausa combinations 
			[ '~B', 'Ɓ' ],
			[ '~b', 'ɓ' ],
			[ '~D', 'Ɗ' ],
			[ '~d', 'ɗ' ],
			[ '~E', 'Ɛ' ],
			[ '~e', 'ɛ' ],
			[ '~K', 'Ƙ' ],
			[ '~k', 'ƙ' ],
			[ '~R', 'R̃' ],
			[ '~r', 'r̃' ],
			[ '~Y', 'Ƴ' ],
			[ '~y', 'ƴ' ],
			[ '~\\\\', '\u0300' ], // Combining grave
			[ '~/', '\u0301' ], // Combining acute
			[ '~\\^', '\u0302' ], // Combining circumflex
			// added Karai-Karai tilde combinations for consonants
			[ '~S', 'Ş'],
			[ '~s', 'ş'],
			[ '~Z', 'Ž'],
			[ '~z', 'ž'],
			[ '~C', 'Ç'],
			[ '~c', 'ç'],

			// acute + macron combinations on A, E, I, O, U
			[ '`-A', 'A\u0300\u0304'],
			[ '`-a', 'a\u0300\u0304'],
			[ '`-E', 'E\u0300\u0304'],
			[ '`-e', 'e\u0300\u0304'],
			[ '`-I', 'I\u0300\u0304'],
			[ '`-i', 'i\u0300\u0304'],
			[ '`-O', 'O\u0300\u0304'],
			[ '`-o', 'o\u0300\u0304'],
			[ '`-U', 'U\u0300\u0304'],
			[ '`-u', 'u\u0300\u0304'],

			// base accents on vowels
			// grave
			['`A', 'À'],
			['`a', 'à'],
			['`E', 'È'],
			['`e', 'è'],
			['`I', 'Ì'],
			['`i', 'ì'],
			['`O', 'Ò'],
			['`o', 'ò'],
			['`U', 'Ù'],
			['`u', 'ù'],

			// acute
			['\'A', 'Á'],
			['\'a', 'á'],
			['\'E', 'É'],
			['\'e', 'é'],
			['\'I', 'Í'],
			['\'i', 'í'],
			['\'O', 'Ó'],
			['\'o', 'ó'],
			['\'U', 'Ú'],
			['\'u', 'ú'],

			// circumflex
			['^A', 'Â'],
			['^a', 'â'],
			['^E', 'Ê'],
			['^e', 'ê'],
			['^I', 'Î'],
			['^i', 'î'],
			['^O', 'Ô'],
			['^o', 'ô'],
			['^U', 'Û'],
			['^u', 'û'],

			// macron
			['-A', 'Ā'],
			['-a', 'ā'],
			['-E', 'Ē'],
			['-e', 'ē'],
			['-I', 'Ī'],
			['-i', 'ī'],
			['-O', 'Ō'],
			['-o', 'ō'],
			['-U', 'Ū'],
			['-u', 'ū'],
		]
	};

	$.ime.register( kaiTilde );
}( jQuery ) );
