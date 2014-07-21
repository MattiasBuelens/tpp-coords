var game = 'x';
var bounds =                [  0,   0,   319, 239];
var ref_key = {
	"\\w+":	"ID of button",
	"END":	"End of flow",
	"NEW":	"Unimplemented (TODO)",
	"   ":	"Unknown (FIXME)",
};

var coords = {
"Battle": {
	"id": "b",
	"Battle": {
		"id": "b",
		"Fight":            { "id": "f", "coords": [  0,  29,   319, 179], "ref": ["bf", "br"]  },
		"Bag":              { "id": "b", "coords": [  0, 180,    99, 239], "ref": "bg"  },
		"Run":              { "id": "r", "coords": [109, 189,   209, 239], "ref": "END" },
		"Pokémon":          { "id": "p", "coords": [219, 180,   319, 239], "ref": "bp"  },
	},
	"Fight": {
		"id": "f",
		"Attack 1":         { "id": "1", "coords": [  0,  39,   159,  99], "ref": ["END", "bd", "bt"] },
		"Attack 2":         { "id": "2", "coords": [160,  39,   319,  99], "ref": ["END", "bd", "bt"] },
		"Attack 3":         { "id": "3", "coords": [  0, 100,   159, 159], "ref": ["END", "bd", "bt"] },
		"Attack 4":         { "id": "4", "coords": [160, 100,   319, 159], "ref": ["END", "bd", "bt"] },
		"Shift":            { "id": "s", "coords": [  0, 179,    99, 239], "ref": "END" }, // Triple battle
		"Cancel":           { "id": "x", "coords": [219, 179,   319, 239], "ref": "bb"  },
	},
	"Rotation battle": {
		"id": "r",
		"Attack 1":         { "id": "1", "coords": [  0,  39,   159,  99], "ref": "END" },
		"Attack 2":         { "id": "2", "coords": [160,  39,   319,  99], "ref": "END" },
		"Attack 3":         { "id": "3", "coords": [  0, 100,   159, 159], "ref": "END" },
		"Attack 4":         { "id": "4", "coords": [160, 100,   319, 159], "ref": "END" },
		"Rotate Left":      { "id": "j", "coords": [  0, 189,    99, 239], "ref": "END" },
		"Rotate Right":     { "id": "k", "coords": [100, 189,   199, 239], "ref": "END" },
		"Cancel":           { "id": "x", "coords": [219, 179,   319, 239], "ref": "bb"  },
	},
	"Double battle": {
		"id": "d",
		"Foe 1":            { "id": "1", "coords": [  0,  39,   158, 109], "ref": "END" },
		"Foe 2":            { "id": "2", "coords": [159,  39,   319, 109], "ref": "END" },
		"Ally 1":           { "id": "a", "coords": [  0, 110,   158, 159], "ref": "END" },
		"Ally 2":           { "id": "b", "coords": [159, 110,   319, 159], "ref": "END" },
		"Cancel":           { "id": "x", "coords": [219, 179,   319, 239], "ref": "bf"  },
	},
	"Triple battle": {
		"id": "t",
		"Foe 1":            { "id": "1", "coords": [  9,  39,   108, 109], "ref": "END" },
		"Foe 2":            { "id": "2", "coords": [109,  39,   208, 109], "ref": "END" },
		"Foe 3":            { "id": "3", "coords": [209,  39,   309, 109], "ref": "END" },
		"Ally 1":           { "id": "a", "coords": [  9, 110,   109, 159], "ref": "END" },
		"Ally 2":           { "id": "b", "coords": [110, 110,   209, 159], "ref": "END" },
		"Ally 3":           { "id": "c", "coords": [210, 110,   309, 159], "ref": "END" },
		"Cancel":           { "id": "x", "coords": [219, 179,   319, 239], "ref": "bf"  },
	},
	"Bag": {
		"id": "g",
		"Restore":          { "id": "r", "coords": [  0,   9,   158,  88], "ref": "bq"  },
		"Balls":            { "id": "b", "coords": [159,   9,   319,  88], "ref": "bq"  },
		"Status":           { "id": "s", "coords": [  0,  99,   158, 178], "ref": "bq"  },
		"Battle items":     { "id": "i", "coords": [159,  99,   319, 178], "ref": "bq"  },
		"Last used":        { "id": "u", "coords": [  9, 189,   258, 239], "ref": "bi"  },
		"Cancel":           { "id": "x", "coords": [269, 189,   319, 239], "ref": "bb"  },
	},
	"Pocket": {
		"id": "q",
		"Item 1":           { "id": "1", "coords": [  0,   9,   158,  68], "ref": "bi"  },
		"Item 2":           { "id": "2", "coords": [159,   9,   319,  68], "ref": "bi"  },
		"Item 3":           { "id": "3", "coords": [  0,  69,   158, 128], "ref": "bi"  },
		"Item 4":           { "id": "4", "coords": [159,  69,   319, 128], "ref": "bi"  },
		"Item 5":           { "id": "5", "coords": [  0, 129,   158, 188], "ref": "bi"  },
		"Item 6":           { "id": "6", "coords": [159, 129,   319, 188], "ref": "bi"  },
		"Previous":         { "id": "j", "coords": [  0, 189,    48, 239], "ref": "bq"  },
		"Next":             { "id": "k", "coords": [ 49, 189,    98, 239], "ref": "bq"  },
		"Cancel":           { "id": "x", "coords": [269, 189,   319, 239], "ref": "bg"  },
	},
	"Item": {
		"id": "i",
		"Use":              { "id": "u", "coords": [  9, 189,   258, 239], "ref": "END" },
		"Cancel":           { "id": "x", "coords": [269, 189,   319, 239], "ref": "bq"  },
	},
	"Pokémon": { // Also for "use item on"
		"id": "p",
		"Pokémon 1":        { "id": "1", "coords": [  0,   0,   158,  59], "ref": "bs"  },
		"Pokémon 2":        { "id": "2", "coords": [159,   9,   319,  68], "ref": "bs"  },
		"Pokémon 3":        { "id": "3", "coords": [  0,  60,   158, 118], "ref": "bs"  },
		"Pokémon 4":        { "id": "4", "coords": [159,  69,   319, 128], "ref": "bs"  },
		"Pokémon 5":        { "id": "5", "coords": [  0, 119,   158, 178], "ref": "bs"  },
		"Pokémon 6":        { "id": "6", "coords": [159, 129,   319, 188], "ref": "bs"  },
		"Cancel":           { "id": "x", "coords": [269, 189,   319, 239], "ref": "bb"  },
	},
	"Switch": {
		"id": "s",
		"Switch":           { "id": "s", "coords": [ 64,  29,   253, 163], "ref": "END" },
		"Summary":          { "id": "w", "coords": [  0, 189,   128, 239], "ref": "NEW" },
		"Check moves":      { "id": "m", "coords": [129, 189,   258, 239], "ref": "NEW" },
		"Cancel":           { "id": "x", "coords": [269, 189,   319, 239], "ref": "bp"  },
	},
	"Nickname": {
		"id": "n",
		"Yes":              { "id": "y", "coords": [  0,  39,   319,  99], "ref": "zk"  },
		"No":               { "id": "x", "coords": [  0, 100,   319, 159], "ref": "END" },
	},
	"Delete move": {
		"id": "o",
		"Forget":           { "id": "f", "coords": [  0,  39,   319,  99], "ref": "bl"  },
		"Keep old":         { "id": "k", "coords": [  0, 100,   319, 159], "ref": "bu"  },
	},
	"Give up move": {
		"id": "u",
		"Give up":          { "id": "g", "coords": [  0,  39,   319,  99], "ref": "END" },
		"Don't give up":    { "id": "d", "coords": [  0, 100,   319, 159], "ref": "bo"  },
	},
	"Replace move": {
		"id": "l",
		"Move 1":           { "id": "1", "coords": [  0,  59,   158, 118], "ref": "be"  },
		"Move 2":           { "id": "2", "coords": [159,  59,   319, 118], "ref": "be"  },
		"Move 3":           { "id": "3", "coords": [  0, 119,   158, 178], "ref": "be"  },
		"Move 4":           { "id": "4", "coords": [159, 119,   319, 178], "ref": "be"  },
		"New move":         { "id": "m", "coords": [ 79, 179,   238, 239], "ref": "NEW" },
		"Cancel":           { "id": "x", "coords": [269, 189,   319, 239], "ref": "bo"  },
	},
	"Forget move": {
		"id": "e",
		"Forget":           { "id": "f", "coords": [  0, 189,   258, 239], "ref": "END" },
		"Cancel":           { "id": "x", "coords": [269, 189,   319, 239], "ref": "bl"  },
	},
},
"Overworld": {
	"id": "o",
	"Overworld": {
		"id": "a",
		"Pokémon":          { "id": "p", "coords": [  6,  43,   153,  76], "ref": "op"  },
		"Pokédex":          { "id": "d", "coords": [166,  43,   313,  76], "ref": "NEW" },
		"Bag":              { "id": "b", "coords": [  6, 103,   153, 136], "ref": "ob"  },
		"Trainer card":     { "id": "c", "coords": [166, 103,   313, 136], "ref": "NEW" },
		"Save":             { "id": "s", "coords": [  6, 163,   153, 196], "ref": "NEW" },
		"Options":          { "id": "o", "coords": [166, 163,   313, 196], "ref": "oo"  },
		"Quit":             { "id": "q", "coords": [285, 210,   312, 239], "ref": "END" },
	},
	"Bag": {
		"id": "b",
		"Items":            { "id": "A", "coords": [  1,   4,    32,  35], "ref": "   " },
		"Medicine":         { "id": "B", "coords": [ 33,   4,    64,  35], "ref": "   " },
		"TMs":              { "id": "C", "coords": [ 65,   4,    96,  35], "ref": "   " },
		"Berries":          { "id": "D", "coords": [ 97,   4,   128,  35], "ref": "   " },
		"Key items":        { "id": "E", "coords": [129,   4,   160,  35], "ref": "   " },
		"Item 1":           { "id": "a", "coords": [161,  15,   312,  44], "ref": "oi"  },
		"Item 2":           { "id": "b", "coords": [161,  45,   312,  74], "ref": "oi"  },
		"Item 3":           { "id": "c", "coords": [161,  75,   312, 104], "ref": "oi"  },
		"Item 4":           { "id": "d", "coords": [161, 105,   312, 134], "ref": "oi"  },
		"Item 5":           { "id": "e", "coords": [161, 135,   312, 164], "ref": "oi"  },
		"Item 6":           { "id": "f", "coords": [161, 165,   312, 194], "ref": "oi"  },
		"Pokémon 1":        { "id": "1", "coords": [  3,  41,   154,  73], "ref": "   " },
		"Pokémon 2":        { "id": "2", "coords": [  3,  74,   154, 106], "ref": "   " },
		"Pokémon 3":        { "id": "3", "coords": [  3, 107,   154, 139], "ref": "   " },
		"Pokémon 4":        { "id": "4", "coords": [  3, 140,   154, 172], "ref": "   " },
		"Pokémon 5":        { "id": "5", "coords": [  3, 173,   154, 205], "ref": "   " },
		"Pokémon 6":        { "id": "6", "coords": [  3, 206,   154, 238], "ref": "   " },
		"Scroll":           { "id": "i", "coords": [313,  19,   319, 190], "ref": "   " },
		"Last used":        { "id": "m", "coords": [165, 210,   194, 239], "ref": "   " },
		"Sort":             { "id": "l", "coords": [205, 210,   234, 239], "ref": "NEW" },
		"Quit":             { "id": "q", "coords": [245, 210,   274, 239], "ref": "END" },
		"Cancel":           { "id": "x", "coords": [285, 210,   314, 239], "ref": "oa"  },
	},
	"Bag item": {
		"id": "i",
		"Use":              { "id": "u", "coords": [230, 120,   319, 149], "ref": "   " },
		"Give":             { "id": "g", "coords": [230, 150,   319, 179], "ref": "   " },
		"Discard":          { "id": "t", "coords": [230, 180,   319, 209], "ref": "ot"  },
		"Cancel":           { "id": "x", "coords": [230, 210,   319, 239], "ref": "ob"  },
	},
	"Key item": {
		"id": "k",
		"Use":              { "id": "u", "coords": [230, 150,   319, 179], "ref": "   " }, // "Walk" when on bike
		"Register":         { "id": "r", "coords": [230, 180,   319, 209], "ref": "   " },
		"Cancel":           { "id": "x", "coords": [230, 210,   319, 239], "ref": "ob"  },
	},
	"TM item": {
		"id": "h",
		"Use":              { "id": "u", "coords": [230, 180,   319, 209], "ref": "oH" },
		"Cancel":           { "id": "x", "coords": [230, 210,   319, 239], "ref": "ob"  },
	},
	"TM Pokémon": {
		"id": "H",
		"Pokémon 1":        { "id": "1", "coords": [  3,  41,   154,  73], "ref": "oC"  },
		"Pokémon 2":        { "id": "2", "coords": [  3,  74,   154, 106], "ref": "oC"  },
		"Pokémon 3":        { "id": "3", "coords": [  3, 107,   154, 139], "ref": "oC"  },
		"Pokémon 4":        { "id": "4", "coords": [  3, 140,   154, 172], "ref": "oC"  },
		"Pokémon 5":        { "id": "5", "coords": [  3, 173,   154, 205], "ref": "oC"  },
		"Pokémon 6":        { "id": "6", "coords": [  3, 206,   154, 238], "ref": "oC"  },
		"Cancel":           { "id": "x", "coords": [285, 210,   314, 239], "ref": "END" },
	},
	"TM teach": {
		"id": "C",
		"Yes":              { "id": "y", "coords": [230,  70,   319,  99], "ref": "oL"  },
		"No":               { "id": "x", "coords": [230, 100,   319, 129], "ref": "END" },
	},
	"TM delete": {
		"id": "L",
		"Yes":              { "id": "y", "coords": [230,  70,   319,  99], "ref": "ol"  },
		"No":               { "id": "x", "coords": [230, 100,   319, 129], "ref": "om"  },
	},
	"TM move": {
		"id": "l",
		"Move 1":           { "id": "1", "coords": [142,   0,   316,  39], "ref": "   " },
		"Move 2":           { "id": "2", "coords": [142,  40,   316,  79], "ref": "   " },
		"Move 3":           { "id": "3", "coords": [142,  80,   316, 119], "ref": "   " },
		"Move 4":           { "id": "4", "coords": [142, 120,   316, 169], "ref": "   " },
		"Forget":           { "id": "f", "coords": [142, 170,   316, 209], "ref": "END" },
		"Cancel":           { "id": "x", "coords": [280, 210,   309, 239], "ref": "END" },
	},
	"TM give up": {
		"id": "m",
		"Yes":              { "id": "y", "coords": [230,  70,   319,  99], "ref": "END" },
		"No":               { "id": "x", "coords": [230, 100,   319, 129], "ref": "oL"  },
	},
	"Trash count": {
		"id": "t",
		"Trash":            { "id": "t", "coords": [208,  87,   314, 143], "ref": "ou"  },
		"More":             { "id": "j", "coords": [208, 144,   314, 171], "ref": "   " },
		"Less":             { "id": "k", "coords": [208, 172,   314, 199], "ref": "   " },
		"Cancel":           { "id": "x", "coords": [283, 200,   312, 229], "ref": "ob"  },
	},
	"Trash confirm": {
		"id": "u",
		"Yes":              { "id": "y", "coords": [230,  70,   319,  99], "ref": "END" },
		"No":               { "id": "x", "coords": [230, 100,   319, 129], "ref": "ob"  },
	},
	"Pokémon": {
		"id": "p",
		"Pokémon 1":        { "id": "1", "coords": [  0,   9,   159,  69], "ref": "od"  },
		"Pokémon 2":        { "id": "2", "coords": [160,  19,   319,  79], "ref": "od"  },
		"Pokémon 3":        { "id": "3", "coords": [  0,  70,   159, 129], "ref": "od"  },
		"Pokémon 4":        { "id": "4", "coords": [160,  80,   319, 139], "ref": "od"  },
		"Pokémon 5":        { "id": "5", "coords": [  0, 130,   159, 189], "ref": "od"  },
		"Pokémon 6":        { "id": "6", "coords": [160, 140,   319, 199], "ref": "od"  },
		"Register":         { "id": "r", "coords": [229, 209,   258, 239], "ref": "   " },
		"Quit":             { "id": "q", "coords": [259, 209,   278, 239], "ref": "END" },
		"Cancel":           { "id": "x", "coords": [279, 209,   309, 239], "ref": "oa"  },
	},
	"Pokémon Do": {
		"id": "d",
		"Summary":          { "id": "w", "coords": [189,   0,   319,  29], "ref": "   " },
		"Move 1":           { "id": "1", "coords": [189,  30,   319,  59], "ref": "   " },
		"Move 2":           { "id": "2", "coords": [189,  60,   319,  89], "ref": "   " },
		"Move 3":           { "id": "3", "coords": [189,  90,   319, 119], "ref": "   " },
		"Move 4":           { "id": "4", "coords": [189, 120,   319, 149], "ref": "   " },
		"Switch":           { "id": "s", "coords": [189, 150,   319, 179], "ref": "   " },
		"Item":             { "id": "i", "coords": [189, 180,   319, 209], "ref": "oj"  },
		"Quit":             { "id": "q", "coords": [189, 210,   319, 239], "ref": "op"  },
	},
	"Pokémon Item": {
		"id": "j",
		"Give":             { "id": "g", "coords": [189, 119,   319, 149], "ref": "   " }, // "Read" when holding mail
		"Take":             { "id": "t", "coords": [189, 150,   319, 179], "ref": "   " },
		"Move":             { "id": "m", "coords": [189, 180,   319, 209], "ref": "   " },
		"Quit":             { "id": "q", "coords": [189, 210,   319, 239], "ref": "op"  },
	},
	"Options": {
		"id": "o",
		"Speed Slow":       { "id": "s", "coords": [139,  29,   199,  59], "ref": "   " },
		"Speed Mid":        { "id": "m", "coords": [200,  29,   259,  59], "ref": "   " },
		"Speed Fast":       { "id": "f", "coords": [260,  29,   319,  59], "ref": "   " },
		"Scene On":         { "id": "A", "coords": [139,  60,   229,  89], "ref": "   " },
		"Scene Off":        { "id": "a", "coords": [230,  60,   319,  89], "ref": "   " },
		"Style Shift":      { "id": "B", "coords": [139,  90,   229, 119], "ref": "   " },
		"Style Set":        { "id": "b", "coords": [230,  90,   319, 119], "ref": "   " },
		"Sound Stereo":     { "id": "C", "coords": [139, 120,   229, 149], "ref": "   " },
		"Sound Mono":       { "id": "c", "coords": [230, 120,   319, 149], "ref": "   " },
		"IR Save":          { "id": "D", "coords": [139, 150,   229, 179], "ref": "   " },
		"IR No Save":       { "id": "d", "coords": [230, 150,   319, 179], "ref": "   " },
		"Register":         { "id": "r", "coords": [ 59, 214,    89, 239], "ref": "   " },
		"Quit":             { "id": "q", "coords": [ 99, 209,   129, 239], "ref": "   " },
		"Confirm":          { "id": "u", "coords": [139, 209,   229, 239], "ref": "END" },
		"Cancel":           { "id": "X", "coords": [230, 209,   319, 239], "ref": "oO"  }, // Button label is actually "Quit"
	},
	"Options save": {
		"id": "O",
		"Save Yes":         { "id": "y", "coords": [189,  59,   319,  89], "ref": "END" },
		"Save No":          { "id": "n", "coords": [189,  90,   319, 119], "ref": "END" },
	},
},
"PC": {
	"id": "p",
	"Deposit": {
		"id": "d",
		"Pokémon 1":        { "id": "1", "coords": [ 36,  69,    65,  98], "ref": "   " },
		"Pokémon 2":        { "id": "2", "coords": [ 81,  79,   110, 108], "ref": "   " },
		"Pokémon 3":        { "id": "3", "coords": [ 36, 109,    65, 138], "ref": "   " },
		"Pokémon 4":        { "id": "4", "coords": [ 81, 119,   110, 148], "ref": "   " },
		"Pokémon 5":        { "id": "5", "coords": [ 36, 149,    65, 178], "ref": "   " },
		"Pokémon 6":        { "id": "6", "coords": [ 81, 159,   110, 188], "ref": "   " },
		"Deposit":          { "id": "d", "coords": [209,  49,   319,  78], "ref": "   " },
		"Summary":          { "id": "w", "coords": [209,  79,   319, 108], "ref": "   " },
		"Marking":          { "id": "m", "coords": [209, 109,   319, 138], "ref": "   " },
		"Release":          { "id": "r", "coords": [209, 139,   319, 168], "ref": "pr"  },
		"Cancel":           { "id": "x", "coords": [209, 169,   319, 198], "ref": "   " },
		"Exit PC":          { "id": "z", "coords": [249, 209,   278, 239], "ref": "   " },
		"Quit":             { "id": "q", "coords": [289, 209,   319, 239], "ref": "   " },
	},
	"Withdraw": {
		"id": "w",
		"Withdraw":         { "id": "d", "coords": [209,  49,   319,  78], "ref": "   " },
		"Summary":          { "id": "w", "coords": [209,  79,   319, 108], "ref": "   " },
		"Marking":          { "id": "m", "coords": [209, 109,   319, 138], "ref": "   " },
		"Release":          { "id": "r", "coords": [209, 139,   319, 168], "ref": "pr"  },
		"Cancel":           { "id": "x", "coords": [209, 169,   319, 198], "ref": "   " },
		"Exit PC":          { "id": "z", "coords": [249, 209,   278, 239], "ref": "   " },
		"Quit":             { "id": "q", "coords": [289, 209,   319, 239], "ref": "   " },
	},
	"Release": {
		"id": "r",
		"Release Yes":      { "id": "y", "coords": [239, 119,   319, 149], "ref": "   " },
		"Release No":       { "id": "x", "coords": [239, 150,   319, 179], "ref": "   " },
	},
	"Box": {
		"id": "b",
		"Previous box":     { "id": "j", "coords": [  6,  21,    31,  46], "ref": "   " },
		"Next box":         { "id": "k", "coords": [175,  21,   200,  46], "ref": "   " },
		"Slot 1 (1,1)":     { "id": "1", "coords": [ 14,  49,    43,  78], "ref": "   " },
		"Slot 2 (1,2)":     { "id": "2", "coords": [ 44,  49,    73,  78], "ref": "   " },
		"Slot 3 (1,3)":     { "id": "3", "coords": [ 74,  49,   103,  78], "ref": "   " },
		"Slot 4 (1,4)":     { "id": "4", "coords": [104,  49,   133,  78], "ref": "   " },
		"Slot 5 (1,5)":     { "id": "5", "coords": [134,  49,   163,  78], "ref": "   " },
		"Slot 6 (1,6)":     { "id": "6", "coords": [164,  49,   193,  78], "ref": "   " },
		"Slot 7 (2,1)":     { "id": "7", "coords": [ 14,  79,    43, 108], "ref": "   " },
		"Slot 8 (2,2)":     { "id": "8", "coords": [ 44,  79,    73, 108], "ref": "   " },
		"Slot 9 (2,3)":     { "id": "9", "coords": [ 74,  79,   103, 108], "ref": "   " },
		"Slot 10 (2,4)":    { "id": "A", "coords": [104,  79,   133, 108], "ref": "   " },
		"Slot 11 (2,5)":    { "id": "B", "coords": [134,  79,   163, 108], "ref": "   " },
		"Slot 12 (2,6)":    { "id": "C", "coords": [164,  79,   193, 108], "ref": "   " },
		"Slot 13 (3,1)":    { "id": "D", "coords": [ 14, 109,    43, 138], "ref": "   " },
		"Slot 14 (3,2)":    { "id": "E", "coords": [ 44, 109,    73, 138], "ref": "   " },
		"Slot 15 (3,3)":    { "id": "F", "coords": [ 74, 109,   103, 138], "ref": "   " },
		"Slot 16 (3,4)":    { "id": "G", "coords": [104, 109,   133, 138], "ref": "   " },
		"Slot 17 (3,5)":    { "id": "H", "coords": [134, 109,   163, 138], "ref": "   " },
		"Slot 18 (3,6)":    { "id": "I", "coords": [164, 109,   193, 138], "ref": "   " },
		"Slot 19 (4,1)":    { "id": "J", "coords": [ 14, 139,    43, 168], "ref": "   " },
		"Slot 20 (4,2)":    { "id": "K", "coords": [ 44, 139,    73, 168], "ref": "   " },
		"Slot 21 (4,3)":    { "id": "L", "coords": [ 74, 139,   103, 168], "ref": "   " },
		"Slot 22 (4,4)":    { "id": "M", "coords": [104, 139,   133, 168], "ref": "   " },
		"Slot 23 (4,5)":    { "id": "N", "coords": [134, 139,   163, 168], "ref": "   " },
		"Slot 24 (4,6)":    { "id": "O", "coords": [164, 139,   193, 168], "ref": "   " },
		"Slot 25 (5,1)":    { "id": "P", "coords": [ 14, 169,    43, 198], "ref": "   " },
		"Slot 26 (5,2)":    { "id": "Q", "coords": [ 44, 169,    73, 198], "ref": "   " },
		"Slot 27 (5,3)":    { "id": "R", "coords": [ 74, 169,   103, 198], "ref": "   " },
		"Slot 28 (5,4)":    { "id": "S", "coords": [104, 169,   133, 198], "ref": "   " },
		"Slot 29 (5,5)":    { "id": "T", "coords": [134, 169,   163, 198], "ref": "   " },
		"Slot 30 (5,6)":    { "id": "U", "coords": [164, 169,   193, 198], "ref": "   " },
	},
},
"Misc": { /* (nicknames, Pokéathlon, etc.) */
	"id": "z",
	"Fly": {
		"id": "f",
		"Aspertia City":    { "id": "A", "coords": [  6, 185,    26, 195], "ref": "   " },
		"Floccesy Town":    { "id": "B", "coords": [ 30, 153,    50, 163], "ref": "   " },
		"Virbank City":     { "id": "C", "coords": [ 75, 153,    95, 163], "ref": "   " },
		"Pokéstar Studios": { "id": "D", "coords": [ 69, 138,    89, 148], "ref": "   " },
		"Castelia City":    { "id": "E", "coords": [154, 156,   174, 166], "ref": "   " },
		"Join Avenue 1":    { "id": "F", "coords": [163, 125,   174, 133], "ref": "   " },
		"Join Avenue 2":    { "id": "1", "coords": [154, 124,   174, 124], "ref": "   " },
		"Join Avenue 3":    { "id": "2", "coords": [154, 134,   174, 134], "ref": "   " },
		"Nimbasa City":     { "id": "G", "coords": [154, 108,   174, 118], "ref": "   " },
		"Driftveil City":   { "id": "H", "coords": [ 81, 108,   101, 118], "ref": "   " },
		"PWT":              { "id": "I", "coords": [ 85, 123,   105, 133], "ref": "   " },
		"Mistralton City":  { "id": "J", "coords": [ 39,  78,    59,  88], "ref": "   " },
		"Lentimas Town":    { "id": "K", "coords": [223,  78,   243,  88], "ref": "   " },
		"Undella Town":     { "id": "L", "coords": [269,  78,   289,  88], "ref": "   " },
		"Lacunosa Town":    { "id": "M", "coords": [226,  48,   246,  58], "ref": "   " },
		"Opelucid City":    { "id": "N", "coords": [154,  48,   174,  58], "ref": "   " },
		"Humilau City":     { "id": "O", "coords": [283,  39,   303,  49], "ref": "   " },
		"Victory Road 1":   { "id": "P", "coords": [223,  14,   239,  23], "ref": "   " },
		"Victory Road 2":   { "id": "3", "coords": [219,  24,   239,  24], "ref": "   " },
		"Pokémon League":   { "id": "Q", "coords": [201,  13,   221,  23], "ref": "   " },
		"Nuvema Town":      { "id": "R", "coords": [279, 191,   299, 201], "ref": "   " },
		"Accumula Town":    { "id": "S", "coords": [279, 166,   299, 176], "ref": "   " },
		"Striaton City":    { "id": "T", "coords": [274, 141,   294, 151], "ref": "   " },
		"Nacrene City":     { "id": "U", "coords": [243, 141,   263, 151], "ref": "   " },
		"Icirrus City":     { "id": "V", "coords": [ 81,  48,   101,  58], "ref": "   " },
		"Black City":       { "id": "W", "coords": [226, 108,   246, 118], "ref": "   " },
		"Quit":             { "id": "q", "coords": [249, 209,   279, 239], "ref": "   " },
		"Cancel":           { "id": "x", "coords": [289, 209,   319, 239], "ref": "   " },
	},
	"Name lower": {
		"id": "k",
		"A":                { "id": "A", "coords": [ 29,  49,    49,  79], "ref": "   " },
		"B":                { "id": "B", "coords": [ 50,  49,    69,  79], "ref": "   " },
		"C":                { "id": "C", "coords": [ 70,  49,    89,  79], "ref": "   " },
		"D":                { "id": "D", "coords": [ 90,  49,   109,  79], "ref": "   " },
		"E":                { "id": "E", "coords": [110,  49,   129,  79], "ref": "   " },
		"F":                { "id": "F", "coords": [130,  49,   149,  79], "ref": "   " },
		"G":                { "id": "G", "coords": [150,  49,   169,  79], "ref": "   " },
		"H":                { "id": "H", "coords": [170,  49,   189,  79], "ref": "   " },
		"I":                { "id": "I", "coords": [190,  49,   209,  79], "ref": "   " },
		"J":                { "id": "J", "coords": [210,  49,   229,  79], "ref": "   " },
		",":                { "id": "c", "coords": [250,  49,   269,  79], "ref": "   " },
		".":                { "id": "d", "coords": [270,  49,   289,  79], "ref": "   " },
		"K":                { "id": "K", "coords": [ 29,  80,    49, 109], "ref": "   " },
		"L":                { "id": "L", "coords": [ 50,  80,    69, 109], "ref": "   " },
		"M":                { "id": "M", "coords": [ 70,  80,    89, 109], "ref": "   " },
		"N":                { "id": "N", "coords": [ 90,  80,   109, 109], "ref": "   " },
		"O":                { "id": "O", "coords": [110,  80,   129, 109], "ref": "   " },
		"P":                { "id": "P", "coords": [130,  80,   149, 109], "ref": "   " },
		"Q":                { "id": "Q", "coords": [150,  80,   169, 109], "ref": "   " },
		"R":                { "id": "R", "coords": [170,  80,   189, 109], "ref": "   " },
		"S":                { "id": "S", "coords": [190,  80,   209, 109], "ref": "   " },
		"T":                { "id": "T", "coords": [210,  80,   229, 109], "ref": "   " },
		"'":                { "id": "a", "coords": [250,  80,   269, 109], "ref": "   " },
		"-":                { "id": "b", "coords": [270,  80,   289, 109], "ref": "   " },
		"U":                { "id": "U", "coords": [ 29, 110,    49, 139], "ref": "   " },
		"V":                { "id": "V", "coords": [ 50, 110,    69, 139], "ref": "   " },
		"W":                { "id": "W", "coords": [ 70, 110,    89, 139], "ref": "   " },
		"X":                { "id": "X", "coords": [ 90, 110,   109, 139], "ref": "   " },
		"Y":                { "id": "Y", "coords": [110, 110,   129, 139], "ref": "   " },
		"Z":                { "id": "Z", "coords": [130, 110,   149, 139], "ref": "   " },
		"♂":                { "id": "e", "coords": [250, 110,   269, 139], "ref": "   " },
		"♀":                { "id": "f", "coords": [270, 110,   289, 139], "ref": "   " },
		"0":                { "id": "0", "coords": [ 29, 170,    49, 199], "ref": "   " },
		"1":                { "id": "1", "coords": [ 50, 170,    69, 199], "ref": "   " },
		"2":                { "id": "2", "coords": [ 70, 170,    89, 199], "ref": "   " },
		"3":                { "id": "3", "coords": [ 90, 170,   109, 199], "ref": "   " },
		"4":                { "id": "4", "coords": [110, 170,   129, 199], "ref": "   " },
		"5":                { "id": "5", "coords": [130, 170,   149, 199], "ref": "   " },
		"6":                { "id": "6", "coords": [150, 170,   169, 199], "ref": "   " },
		"7":                { "id": "7", "coords": [170, 170,   189, 199], "ref": "   " },
		"8":                { "id": "8", "coords": [190, 170,   209, 199], "ref": "   " },
		"9":                { "id": "9", "coords": [210, 170,   229, 199], "ref": "   " },
		"Upper":            { "id": "u", "coords": [ 29, 200,    59, 229], "ref": "   " },
		"Lower":            { "id": "l", "coords": [ 60, 200,    89, 229], "ref": "   " },
		"Others":           { "id": "o", "coords": [ 90, 200,   119, 229], "ref": "   " },
		"Qwerty":           { "id": "q", "coords": [120, 200,   149, 229], "ref": "   " },
		"Delete":           { "id": "z", "coords": [150, 200,   219, 229], "ref": "   " },
		"OK":               { "id": "y", "coords": [220, 200,   289, 229], "ref": "   " },
	},
	"Daycare store": {
		"id": "d",
		"Store":            { "id": "s", "coords": [189, 149,   319, 179], "ref": "   " },
		"Summary":          { "id": "w", "coords": [189, 180,   319, 209], "ref": "   " },
		"Quit":             { "id": "q", "coords": [189, 210,   319, 239], "ref": "   " },
	},
	"Starters": {
		"id": "s",
		"Snivy":            { "id": "A", "coords": [ 41,  79,   106, 144], "ref": "   " },
		"Tepig":            { "id": "B", "coords": [128,  79,   191, 144], "ref": "   " },
		"Oshawott":         { "id": "C", "coords": [216,  79,   281, 144], "ref": "   " },
		"Pick":             { "id": "p", "coords": [ 89, 209,   228, 239], "ref": "zS"  },
	},
	"Starters pick": {
		"id": "S",
		"Pick Yes":         { "id": "y", "coords": [229, 109,   319, 139], "ref": "END" },
		"Pick No":          { "id": "x", "coords": [229, 140,   319, 169], "ref": "zs"  },
	},
},
};