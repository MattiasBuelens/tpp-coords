var game = 'black2';
var bounds =                [  0,   0,   255, 191];
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
		"Fight":            { "id": "f", "coords": [  0,  23,   255, 143], "ref": "bf"  },
		"Bag":              { "id": "b", "coords": [  0, 144,    79, 191], "ref": "bg"  },
		"Run":              { "id": "r", "coords": [ 87, 151,   167, 191], "ref": "END" },
		"Pokémon":          { "id": "p", "coords": [175, 144,   255, 191], "ref": "bp"  },
	},
	"Fight": {
		"id": "f",
		"Attack 1":         { "id": "1", "coords": [  0,  31,   127,  79], "ref": "bd"  },
		"Attack 2":         { "id": "2", "coords": [128,  31,   255,  79], "ref": "bd"  },
		"Attack 3":         { "id": "3", "coords": [  0,  80,   127, 127], "ref": "bd"  },
		"Attack 4":         { "id": "4", "coords": [128,  80,   255, 127], "ref": "bd"  },
		"Rotate Left":      { "id": "j", "coords": [  0, 151,    79, 191], "ref": "   " },
		"Rotate Right":     { "id": "k", "coords": [ 80, 151,   159, 191], "ref": "   " },
		"Cancel":           { "id": "x", "coords": [175, 143,   255, 191], "ref": "bb"  },
	},
	"Double battle": {
		"id": "d",
		"Foe 1":            { "id": "1", "coords": [  0,  31,   126,  87], "ref": "END" },
		"Foe 2":            { "id": "2", "coords": [127,  31,   255,  87], "ref": "END" },
		"Ally 1":           { "id": "a", "coords": [  0,  88,   126, 127], "ref": "END" },
		"Ally 2":           { "id": "b", "coords": [127,  88,   255, 127], "ref": "END" },
		"Cancel":           { "id": "x", "coords": [175, 143,   255, 191], "ref": "bf"  },
	},
	"Bag": {
		"id": "g",
		"Restore":          { "id": "r", "coords": [  0,   7,   126,  70], "ref": "bq"  },
		"Balls":            { "id": "b", "coords": [127,   7,   255,  70], "ref": "bq"  },
		"Status":           { "id": "s", "coords": [  0,  79,   126, 142], "ref": "bq"  },
		"Battle items":     { "id": "i", "coords": [127,  79,   255, 142], "ref": "bq"  },
		"Last used":        { "id": "u", "coords": [  7, 151,   206, 191], "ref": "bi"  },
		"Cancel":           { "id": "x", "coords": [215, 151,   255, 191], "ref": "bb"  },
	},
	"Pocket": {
		"id": "q",
		"Item 1":           { "id": "1", "coords": [  0,   7,   126,  54], "ref": "bi"  },
		"Item 2":           { "id": "2", "coords": [127,   7,   255,  54], "ref": "bi"  },
		"Item 3":           { "id": "3", "coords": [  0,  55,   126, 102], "ref": "bi"  },
		"Item 4":           { "id": "4", "coords": [127,  55,   255, 102], "ref": "bi"  },
		"Item 5":           { "id": "5", "coords": [  0, 103,   126, 150], "ref": "bi"  },
		"Item 6":           { "id": "6", "coords": [127, 103,   255, 150], "ref": "bi"  },
		"Previous":         { "id": "j", "coords": [  0, 151,    38, 191], "ref": "bq"  },
		"Next":             { "id": "k", "coords": [ 39, 151,    78, 191], "ref": "bq"  },
		"Cancel":           { "id": "x", "coords": [215, 151,   255, 191], "ref": "bg"  },
	},
	"Item": {
		"id": "i",
		"Use":              { "id": "u", "coords": [  7, 151,   206, 191], "ref": "END" },
		"Cancel":           { "id": "x", "coords": [215, 151,   255, 191], "ref": "bq"  },
	},
	"Pokémon": { // Also for "use item on"
		"id": "p",
		"Pokémon 1":        { "id": "1", "coords": [  0,   0,   126,  47], "ref": "bs"  },
		"Pokémon 2":        { "id": "2", "coords": [127,   7,   255,  54], "ref": "bs"  },
		"Pokémon 3":        { "id": "3", "coords": [  0,  48,   126,  94], "ref": "bs"  },
		"Pokémon 4":        { "id": "4", "coords": [127,  55,   255, 102], "ref": "bs"  },
		"Pokémon 5":        { "id": "5", "coords": [  0,  95,   126, 142], "ref": "bs"  },
		"Pokémon 6":        { "id": "6", "coords": [127, 103,   255, 150], "ref": "bs"  },
		"Cancel":           { "id": "x", "coords": [215, 151,   255, 191], "ref": "bb"  },
	},
	"Switch": {
		"id": "s",
		"Switch":           { "id": "s", "coords": [ 51,  23,   202, 130], "ref": "END" },
		"Summary":          { "id": "w", "coords": [  0, 151,   102, 191], "ref": "NEW" },
		"Check moves":      { "id": "m", "coords": [103, 151,   206, 191], "ref": "bc"  },
		"Cancel":           { "id": "x", "coords": [215, 151,   255, 191], "ref": "bp"  },
	},
	"Check moves": { // Almost the same as "Summary"
		"id": "c",
		"Move 1":           { "id": "1", "coords": [  0,  47,   126,  94], "ref": "bm"  },
		"Move 2":           { "id": "2", "coords": [127,  47,   253,  94], "ref": "bm"  },
		"Move 3":           { "id": "3", "coords": [  0,  95,   126, 142], "ref": "bm"  },
		"Move 4":           { "id": "4", "coords": [127,  95,   253, 142], "ref": "bm"  },
		"Previous":         { "id": "j", "coords": [  0, 151,    38, 191], "ref": "bc"  },
		"Next":             { "id": "k", "coords": [ 39, 151,    78, 191], "ref": "bc"  },
		"Summary":          { "id": "w", "coords": [ 95, 151,   198, 191], "ref": "NEW" },
		"Cancel":           { "id": "x", "coords": [215, 151,   255, 191], "ref": "bs"  },
	},
	"Move": {
		"id": "m",
		"Slot 1":           { "id": "1", "coords": [ 87, 151,   126, 166], "ref": "bm"  },
		"Slot 2":           { "id": "2", "coords": [127, 151,   166, 166], "ref": "bm"  },
		"Slot 3":           { "id": "3", "coords": [ 87, 167,   126, 182], "ref": "bm"  },
		"Slot 4":           { "id": "4", "coords": [127, 167,   166, 182], "ref": "bm"  },
		"Cancel":           { "id": "x", "coords": [215, 151,   255, 191], "ref": "bc"  },
	},
},
"Overworld": {
	"id": "o",
	"Overworld": {
		"id": "a",
		"Pokémon":          { "id": "p", "coords": [  7,  23,   119,  63], "ref": "op"  },
		"Pokédex":          { "id": "d", "coords": [135,  23,   247,  63], "ref": "   " },
		"Bag":              { "id": "b", "coords": [  7,  71,   119, 111], "ref": "ob"  },
		"Trainer card":     { "id": "c", "coords": [135,  71,   247, 111], "ref": "   " },
		"Save":             { "id": "s", "coords": [  7, 119,   119, 159], "ref": "   " },
		"Options":          { "id": "o", "coords": [135, 119,   247, 159], "ref": "oo"  },
		"Quit":             { "id": "q", "coords": [223, 167,   247, 191], "ref": "END" },
	},
	"Bag": {
		"id": "b",
		"Items 1":          { "id": "1", "coords": [  0,  35,    48,  74], "ref": "   " },
		"Items 2":          { "id": "2", "coords": [  0,  75,    49, 100], "ref": "   " },
		"Free space 1":     { "id": "3", "coords": [ 49,   7,    94,  70], "ref": "   " },
		"Free space 2":     { "id": "4", "coords": [ 49,  71,    57,  74], "ref": "   " },
		"Key items":        { "id": "5", "coords": [ 58,  71,   108, 107], "ref": "   " },
		"Medicine":         { "id": "6", "coords": [  0, 101,    38, 142], "ref": "   " },
		"TMs":              { "id": "7", "coords": [ 39, 111,    70, 154], "ref": "   " },
		"Berries 1":        { "id": "8", "coords": [ 67, 108,   106, 110], "ref": "   " },
		"Berries 2":        { "id": "9", "coords": [ 71, 111,   106, 142], "ref": "   " },
		"Item 1":           { "id": "a", "coords": [143,  11,   222,  34], "ref": "oi"  },
		"Item 2":           { "id": "b", "coords": [143,  35,   222,  58], "ref": "oi"  },
		"Item 3":           { "id": "c", "coords": [143,  59,   222,  82], "ref": "oi"  },
		"Item 4":           { "id": "d", "coords": [143,  83,   222, 106], "ref": "oi"  },
		"Item 5":           { "id": "e", "coords": [143, 107,   222, 130], "ref": "oi"  },
		"Item 6":           { "id": "f", "coords": [143, 131,   222, 154], "ref": "oi"  },
		"Register 1":       { "id": "A", "coords": [119,  11,   142,  34], "ref": "   " },
		"Register 2":       { "id": "B", "coords": [119,  35,   142,  58], "ref": "   " },
		"Register 3":       { "id": "C", "coords": [119,  59,   142,  82], "ref": "   " },
		"Register 4":       { "id": "D", "coords": [119,  83,   142, 106], "ref": "   " },
		"Register 5":       { "id": "E", "coords": [119, 107,   142, 130], "ref": "   " },
		"Register 6":       { "id": "F", "coords": [119, 131,   142, 154], "ref": "   " },
		"Scroll":           { "id": "i", "coords": [223,  15,   255, 150], "ref": "   " },
		"Previous":         { "id": "j", "coords": [  0, 167,    22, 191], "ref": "   " },
		"Next":             { "id": "k", "coords": [119, 167,   142, 191], "ref": "   " },
		"Sort":             { "id": "l", "coords": [151, 167,   174, 191], "ref": "   " },
		"Register":         { "id": "m", "coords": [175, 167,   190, 191], "ref": "   " },
		"Quit":             { "id": "q", "coords": [191, 167,   214, 191], "ref": "   " },
		"Cancel":           { "id": "x", "coords": [223, 167,   246, 191], "ref": "   " },
	},
	"Bag item": {
		"id": "i",
		"Use":              { "id": "u", "coords": [151,  71,   255,  95], "ref": "   " },
		"Give":             { "id": "g", "coords": [151,  96,   255, 119], "ref": "   " },
		"Trash":            { "id": "t", "coords": [151, 120,   255, 143], "ref": "ot"  },
		"Free space":       { "id": "f", "coords": [151, 144,   255, 167], "ref": "   " },
		"Cancel":           { "id": "x", "coords": [151, 168,   255, 191], "ref": "   " },
	},
	"Key item": {
		"id": "k",
		"Use":              { "id": "u", "coords": [151,  95,   255, 119], "ref": "   " }, // "Walk" when on bike
		"Register":         { "id": "r", "coords": [151, 120,   255, 143], "ref": "   " },
		"Free space":       { "id": "f", "coords": [151, 144,   255, 167], "ref": "   " },
		"Cancel":           { "id": "x", "coords": [151, 168,   255, 191], "ref": "   " },
	},
	"TM item": {
		"id": "h",
		"Use":              { "id": "u", "coords": [151, 119,   255, 143], "ref": "   " },
		"Free space":       { "id": "f", "coords": [151, 144,   255, 167], "ref": "   " },
		"Cancel":           { "id": "x", "coords": [151, 168,   255, 191], "ref": "   " },
	},
	"TM teach": {
		"id": "l",
		"Move 1":           { "id": "1", "coords": [  7,  15,   143,  47], "ref": "   " },
		"Move 2":           { "id": "2", "coords": [  7,  48,   143,  80], "ref": "   " },
		"Move 3":           { "id": "3", "coords": [  7,  81,   143, 111], "ref": "   " },
		"Move 4":           { "id": "4", "coords": [  7, 112,   143, 143], "ref": "   " },
		"Forget":           { "id": "f", "coords": [  7, 159,   143, 191], "ref": "   " },
		"Cancel":           { "id": "x", "coords": [231, 167,   255, 191], "ref": "   " },
	},
	"Trash count": {
		"id": "t",
		"Trash":            { "id": "t", "coords": [127,  95,   230, 142], "ref": "ou"  },
		"More":             { "id": "j", "coords": [233,  91,   255, 115], "ref": "   " },
		"Less":             { "id": "k", "coords": [233, 116,   255, 139], "ref": "   " },
	},
	"Trash confirm": {
		"id": "u",
		"Yes":              { "id": "y", "coords": [191,  47,   255,  71], "ref": "   " },
		"No":               { "id": "x", "coords": [191,  72,   255,  95], "ref": "   " },
	},
	"Pokémon": {
		"id": "p",
		"Pokémon 1":        { "id": "1", "coords": [  0,   7,   127,  55], "ref": "od"  },
		"Pokémon 2":        { "id": "2", "coords": [128,  15,   255,  63], "ref": "od"  },
		"Pokémon 3":        { "id": "3", "coords": [  0,  56,   127, 103], "ref": "od"  },
		"Pokémon 4":        { "id": "4", "coords": [128,  64,   255, 111], "ref": "od"  },
		"Pokémon 5":        { "id": "5", "coords": [  0, 104,   127, 151], "ref": "od"  },
		"Pokémon 6":        { "id": "6", "coords": [128, 112,   255, 159], "ref": "od"  },
		"Register":         { "id": "r", "coords": [183, 167,   206, 191], "ref": "   " },
		"Quit":             { "id": "q", "coords": [207, 167,   222, 191], "ref": "   " },
		"Cancel":           { "id": "x", "coords": [223, 167,   247, 191], "ref": "   " },
	},
	"Pokémon Do": {
		"id": "d",
		"Summary":          { "id": "w", "coords": [151,   0,   255,  23], "ref": "   " },
		"Move 1":           { "id": "1", "coords": [151,  24,   255,  47], "ref": "   " },
		"Move 2":           { "id": "2", "coords": [151,  48,   255,  71], "ref": "   " },
		"Move 3":           { "id": "3", "coords": [151,  72,   255,  95], "ref": "   " },
		"Move 4":           { "id": "4", "coords": [151,  96,   255, 119], "ref": "   " },
		"Switch":           { "id": "s", "coords": [151, 120,   255, 143], "ref": "   " },
		"Item":             { "id": "i", "coords": [151, 144,   255, 167], "ref": "oj"  },
		"Quit":             { "id": "q", "coords": [151, 168,   255, 191], "ref": "   " },
	},
	"Pokémon Item": {
		"id": "j",
		"Give":             { "id": "g", "coords": [151,  95,   255, 119], "ref": "   " }, // "Read" when holding mail
		"Take":             { "id": "t", "coords": [151, 120,   255, 143], "ref": "   " },
		"Move":             { "id": "m", "coords": [151, 144,   255, 167], "ref": "   " },
		"Quit":             { "id": "q", "coords": [151, 168,   255, 191], "ref": "   " },
	},
	"Options": {
		"id": "o",
		"Speed Slow":       { "id": "s", "coords": [111,  23,   159,  47], "ref": "   " },
		"Speed Mid":        { "id": "m", "coords": [160,  23,   207,  47], "ref": "   " },
		"Speed Fast":       { "id": "f", "coords": [208,  23,   255,  47], "ref": "   " },
		"Scene On":         { "id": "A", "coords": [111,  48,   183,  71], "ref": "   " },
		"Scene Off":        { "id": "a", "coords": [184,  48,   255,  71], "ref": "   " },
		"Style Shift":      { "id": "B", "coords": [111,  72,   183,  95], "ref": "   " },
		"Style Set":        { "id": "b", "coords": [184,  72,   255,  95], "ref": "   " },
		"Sound Stereo":     { "id": "C", "coords": [111,  96,   183, 119], "ref": "   " },
		"Sound Mono":       { "id": "c", "coords": [184,  96,   255, 119], "ref": "   " },
		"IR Save":          { "id": "D", "coords": [111, 120,   183, 143], "ref": "   " },
		"IR No Save":       { "id": "d", "coords": [184, 120,   255, 143], "ref": "   " },
		"Register":         { "id": "r", "coords": [ 47, 171,    71, 191], "ref": "   " },
		"Quit":             { "id": "q", "coords": [ 79, 167,   103, 191], "ref": "   " },
		"Confirm":          { "id": "u", "coords": [111, 167,   183, 191], "ref": "   " },
		"Cancel":           { "id": "x", "coords": [184, 167,   255, 191], "ref": "   " }, // Button label is actually "Quit"
		"Save Yes":         { "id": "y", "coords": [151,  47,   255,  71], "ref": "   " },
		"Save No":          { "id": "n", "coords": [151,  72,   255,  95], "ref": "   " },
	},
},
"C-Gear": {
	"id": "y",
	"C-Gear": {
		"id": "c",
		"Power":            { "id": "p", "coords": [190, 170,   208, 188], "ref": "   " },
	},
	"Power": {
		"id": "p",
		"Yes":              { "id": "y", "coords": [167,  47,   255,  71], "ref": "   " },
		"No":               { "id": "x", "coords": [167,  72,   255,  95], "ref": "   " },
	},
},
"PC": {
	"id": "p",
	"Deposit": {
		"id": "d",
		"Pokémon 1":        { "id": "1", "coords": [ 29,  55,    52,  78], "ref": "   " },
		"Pokémon 2":        { "id": "2", "coords": [ 65,  63,    88,  86], "ref": "   " },
		"Pokémon 3":        { "id": "3", "coords": [ 29,  87,    52, 110], "ref": "   " },
		"Pokémon 4":        { "id": "4", "coords": [ 65,  95,    88, 118], "ref": "   " },
		"Pokémon 5":        { "id": "5", "coords": [ 29, 119,    52, 142], "ref": "   " },
		"Pokémon 6":        { "id": "6", "coords": [ 65, 127,    88, 150], "ref": "   " },
		"Deposit":          { "id": "d", "coords": [167,  39,   255,  62], "ref": "   " },
		"Summary":          { "id": "w", "coords": [167,  63,   255,  86], "ref": "   " },
		"Marking":          { "id": "m", "coords": [167,  87,   255, 110], "ref": "   " },
		"Release":          { "id": "r", "coords": [167, 111,   255, 134], "ref": "   " },
		"Cancel":           { "id": "x", "coords": [167, 135,   255, 158], "ref": "   " },
		"Exit PC":          { "id": "z", "coords": [199, 167,   222, 191], "ref": "   " },
		"Quit":             { "id": "q", "coords": [231, 167,   255, 191], "ref": "   " },
	},
	"Withdraw": {
		"id": "w",
		"Withdraw":         { "id": "d", "coords": [167,  39,   255,  62], "ref": "   " },
		"Summary":          { "id": "w", "coords": [167,  63,   255,  86], "ref": "   " },
		"Marking":          { "id": "m", "coords": [167,  87,   255, 110], "ref": "   " },
		"Release":          { "id": "r", "coords": [167, 111,   255, 134], "ref": "   " },
		"Cancel":           { "id": "x", "coords": [167, 135,   255, 158], "ref": "   " },
		"Exit PC":          { "id": "z", "coords": [199, 167,   222, 191], "ref": "   " },
		"Quit":             { "id": "q", "coords": [231, 167,   255, 191], "ref": "   " },
	},
	"Release": {
		"id": "r",
		"Release Yes":      { "id": "y", "coords": [191,  95,   255, 119], "ref": "   " },
		"Release No":       { "id": "x", "coords": [191, 120,   255, 143], "ref": "   " },
	},
	"Box": {
		"id": "b",
		"Previous box":     { "id": "j", "coords": [  5,  17,    25,  37], "ref": "   " },
		"Next box":         { "id": "k", "coords": [140,  17,   160,  37], "ref": "   " },
		"Slot 1 (1,1)":     { "id": "1", "coords": [ 11,  39,    34,  62], "ref": "   " },
		"Slot 2 (1,2)":     { "id": "2", "coords": [ 35,  39,    58,  62], "ref": "   " },
		"Slot 3 (1,3)":     { "id": "3", "coords": [ 59,  39,    82,  62], "ref": "   " },
		"Slot 4 (1,4)":     { "id": "4", "coords": [ 83,  39,   106,  62], "ref": "   " },
		"Slot 5 (1,5)":     { "id": "5", "coords": [107,  39,   130,  62], "ref": "   " },
		"Slot 6 (1,6)":     { "id": "6", "coords": [131,  39,   154,  62], "ref": "   " },
		"Slot 7 (2,1)":     { "id": "7", "coords": [ 11,  63,    34,  86], "ref": "   " },
		"Slot 8 (2,2)":     { "id": "8", "coords": [ 35,  63,    58,  86], "ref": "   " },
		"Slot 9 (2,3)":     { "id": "9", "coords": [ 59,  63,    82,  86], "ref": "   " },
		"Slot 10 (2,4)":    { "id": "A", "coords": [ 83,  63,   106,  86], "ref": "   " },
		"Slot 11 (2,5)":    { "id": "B", "coords": [107,  63,   130,  86], "ref": "   " },
		"Slot 12 (2,6)":    { "id": "C", "coords": [131,  63,   154,  86], "ref": "   " },
		"Slot 13 (3,1)":    { "id": "D", "coords": [ 11,  87,    34, 110], "ref": "   " },
		"Slot 14 (3,2)":    { "id": "E", "coords": [ 35,  87,    58, 110], "ref": "   " },
		"Slot 15 (3,3)":    { "id": "F", "coords": [ 59,  87,    82, 110], "ref": "   " },
		"Slot 16 (3,4)":    { "id": "G", "coords": [ 83,  87,   106, 110], "ref": "   " },
		"Slot 17 (3,5)":    { "id": "H", "coords": [107,  87,   130, 110], "ref": "   " },
		"Slot 18 (3,6)":    { "id": "I", "coords": [131,  87,   154, 110], "ref": "   " },
		"Slot 19 (4,1)":    { "id": "J", "coords": [ 11, 111,    34, 134], "ref": "   " },
		"Slot 20 (4,2)":    { "id": "K", "coords": [ 35, 111,    58, 134], "ref": "   " },
		"Slot 21 (4,3)":    { "id": "L", "coords": [ 59, 111,    82, 134], "ref": "   " },
		"Slot 22 (4,4)":    { "id": "M", "coords": [ 83, 111,   106, 134], "ref": "   " },
		"Slot 23 (4,5)":    { "id": "N", "coords": [107, 111,   130, 134], "ref": "   " },
		"Slot 24 (4,6)":    { "id": "O", "coords": [131, 111,   154, 134], "ref": "   " },
		"Slot 25 (5,1)":    { "id": "P", "coords": [ 11, 135,    34, 158], "ref": "   " },
		"Slot 26 (5,2)":    { "id": "Q", "coords": [ 35, 135,    58, 158], "ref": "   " },
		"Slot 27 (5,3)":    { "id": "R", "coords": [ 59, 135,    82, 158], "ref": "   " },
		"Slot 28 (5,4)":    { "id": "S", "coords": [ 83, 135,   106, 158], "ref": "   " },
		"Slot 29 (5,5)":    { "id": "T", "coords": [107, 135,   130, 158], "ref": "   " },
		"Slot 30 (5,6)":    { "id": "U", "coords": [131, 135,   154, 158], "ref": "   " },
	},
},
"Misc": { /* (nicknames, Pokéathlon, etc.) */
	"id": "z",
	"Fly": {
		"id": "f",
		"Aspertia City":    { "id": "A", "coords": [  5, 148,    21, 156], "ref": "   " },
		"Floccesy Town":    { "id": "B", "coords": [ 24, 122,    40, 130], "ref": "   " },
		"Virbank City":     { "id": "C", "coords": [ 60, 122,    76, 130], "ref": "   " },
		"Pokéstar Studios": { "id": "D", "coords": [ 55, 110,    71, 118], "ref": "   " },
		"Castelia City":    { "id": "E", "coords": [123, 125,   139, 133], "ref": "   " },
		"Join Avenue 1":    { "id": "F", "coords": [130, 100,   139, 106], "ref": "   " },
		"Join Avenue 2":    { "id": "1", "coords": [123,  99,   139,  99], "ref": "   " },
		"Join Avenue 3":    { "id": "2", "coords": [123, 107,   139, 107], "ref": "   " },
		"Nimbasa City":     { "id": "G", "coords": [123,  86,   139,  94], "ref": "   " },
		"Driftveil City":   { "id": "H", "coords": [ 65,  86,    81,  94], "ref": "   " },
		"PWT":              { "id": "I", "coords": [ 68,  98,    84, 106], "ref": "   " },
		"Mistralton City":  { "id": "J", "coords": [ 31,  62,    47,  70], "ref": "   " },
		"Lentimas Town":    { "id": "K", "coords": [178,  62,   194,  70], "ref": "   " },
		"Undella Town":     { "id": "L", "coords": [215,  62,   231,  70], "ref": "   " },
		"Lacunosa Town":    { "id": "M", "coords": [181,  38,   197,  46], "ref": "   " },
		"Opelucid City":    { "id": "N", "coords": [123,  38,   139,  46], "ref": "   " },
		"Humilau City":     { "id": "O", "coords": [226,  31,   242,  39], "ref": "   " },
		"Victory Road 1":   { "id": "P", "coords": [178,  11,   191,  18], "ref": "   " },
		"Victory Road 2":   { "id": "3", "coords": [175,  19,   191,  19], "ref": "   " },
		"Pokémon League":   { "id": "Q", "coords": [161,  10,   177,  18], "ref": "   " },
		"Nuvema Town":      { "id": "R", "coords": [223, 153,   239, 161], "ref": "   " },
		"Accumula Town":    { "id": "S", "coords": [223, 133,   239, 141], "ref": "   " },
		"Striaton City":    { "id": "T", "coords": [219, 113,   235, 121], "ref": "   " },
		"Nacrene City":     { "id": "U", "coords": [194, 113,   210, 121], "ref": "   " },
		"Icirrus City":     { "id": "V", "coords": [ 65,  38,    81,  46], "ref": "   " },
		"Black City":       { "id": "W", "coords": [181,  86,   197,  94], "ref": "   " },
		"Quit":             { "id": "q", "coords": [199, 167,   223, 191], "ref": "   " },
		"Cancel":           { "id": "x", "coords": [231, 167,   255, 191], "ref": "   " },
	},
	"Name": {
		"id": "k",
		"A":                { "id": "A", "coords": [ 23,  39,    39,  63], "ref": "   " },
		"B":                { "id": "B", "coords": [ 40,  39,    55,  63], "ref": "   " },
		"C":                { "id": "C", "coords": [ 56,  39,    71,  63], "ref": "   " },
		"D":                { "id": "D", "coords": [ 72,  39,    87,  63], "ref": "   " },
		"E":                { "id": "E", "coords": [ 88,  39,   103,  63], "ref": "   " },
		"F":                { "id": "F", "coords": [104,  39,   119,  63], "ref": "   " },
		"G":                { "id": "G", "coords": [120,  39,   135,  63], "ref": "   " },
		"H":                { "id": "H", "coords": [136,  39,   151,  63], "ref": "   " },
		"I":                { "id": "I", "coords": [152,  39,   167,  63], "ref": "   " },
		"J":                { "id": "J", "coords": [168,  39,   183,  63], "ref": "   " },
		",":                { "id": "c", "coords": [200,  39,   215,  63], "ref": "   " },
		".":                { "id": "d", "coords": [216,  39,   231,  63], "ref": "   " },
		"K":                { "id": "K", "coords": [ 23,  64,    39,  87], "ref": "   " },
		"L":                { "id": "L", "coords": [ 40,  64,    55,  87], "ref": "   " },
		"M":                { "id": "M", "coords": [ 56,  64,    71,  87], "ref": "   " },
		"N":                { "id": "N", "coords": [ 72,  64,    87,  87], "ref": "   " },
		"O":                { "id": "O", "coords": [ 88,  64,   103,  87], "ref": "   " },
		"P":                { "id": "P", "coords": [104,  64,   119,  87], "ref": "   " },
		"Q":                { "id": "Q", "coords": [120,  64,   135,  87], "ref": "   " },
		"R":                { "id": "R", "coords": [136,  64,   151,  87], "ref": "   " },
		"S":                { "id": "S", "coords": [152,  64,   167,  87], "ref": "   " },
		"T":                { "id": "T", "coords": [168,  64,   183,  87], "ref": "   " },
		"'":                { "id": "a", "coords": [200,  64,   215,  87], "ref": "   " },
		"-":                { "id": "b", "coords": [216,  64,   231,  87], "ref": "   " },
		"U":                { "id": "U", "coords": [ 23,  88,    39, 111], "ref": "   " },
		"V":                { "id": "V", "coords": [ 40,  88,    55, 111], "ref": "   " },
		"W":                { "id": "W", "coords": [ 56,  88,    71, 111], "ref": "   " },
		"X":                { "id": "X", "coords": [ 72,  88,    87, 111], "ref": "   " },
		"Y":                { "id": "Y", "coords": [ 88,  88,   103, 111], "ref": "   " },
		"Z":                { "id": "Z", "coords": [104,  88,   119, 111], "ref": "   " },
		"♂":                { "id": "e", "coords": [200,  88,   215, 111], "ref": "   " },
		"♀":                { "id": "f", "coords": [216,  88,   231, 111], "ref": "   " },
		"0":                { "id": "0", "coords": [ 23, 136,    39, 159], "ref": "   " },
		"1":                { "id": "1", "coords": [ 40, 136,    55, 159], "ref": "   " },
		"2":                { "id": "2", "coords": [ 56, 136,    71, 159], "ref": "   " },
		"3":                { "id": "3", "coords": [ 72, 136,    87, 159], "ref": "   " },
		"4":                { "id": "4", "coords": [ 88, 136,   103, 159], "ref": "   " },
		"5":                { "id": "5", "coords": [104, 136,   119, 159], "ref": "   " },
		"6":                { "id": "6", "coords": [120, 136,   135, 159], "ref": "   " },
		"7":                { "id": "7", "coords": [136, 136,   151, 159], "ref": "   " },
		"8":                { "id": "8", "coords": [152, 136,   167, 159], "ref": "   " },
		"9":                { "id": "9", "coords": [168, 136,   183, 159], "ref": "   " },
		"Upper":            { "id": "u", "coords": [ 23, 160,    47, 183], "ref": "   " },
		"Lower":            { "id": "l", "coords": [ 48, 160,    71, 183], "ref": "   " },
		"Others":           { "id": "o", "coords": [ 72, 160,    95, 183], "ref": "   " },
		"Qwerty":           { "id": "q", "coords": [ 96, 160,   119, 183], "ref": "   " },
		"Delete":           { "id": "z", "coords": [120, 160,   175, 183], "ref": "   " },
		"OK":               { "id": "y", "coords": [176, 160,   231, 183], "ref": "   " },
	},
	"Daycare Store": {
		"id": "d",
		"Store":            { "id": "s", "coords": [151, 119,   255, 143], "ref": "   " },
		"Summary":          { "id": "w", "coords": [151, 144,   255, 167], "ref": "   " },
		"Quit":             { "id": "q", "coords": [151, 168,   255, 191], "ref": "   " },
	},
	"Starters": {
		"id": "s",
		"Snivy":            { "id": "A", "coords": [ 33,  63,    85, 115], "ref": "   " },
		"Tepig":            { "id": "B", "coords": [102,  63,   153, 115], "ref": "   " },
		"Oshawott":         { "id": "C", "coords": [173,  63,   225, 115], "ref": "   " },
		"Pick":             { "id": "p", "coords": [ 71, 167,   182, 191], "ref": "   " },
		"Pick Yes":         { "id": "y", "coords": [183,  87,   255, 111], "ref": "   " },
		"Pick No":          { "id": "x", "coords": [183, 112,   255, 135], "ref": "   " },
	},
},
};
