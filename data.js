var bounds =             [  0,   0,   255, 191];
var coords = {
"Battle": {
	"Battle": {
		"Fight":         [  0,  23,   253, 142],
		"Bag":           [  0, 143,    78, 191],
		"Run":           [ 87, 151,   166, 191],
		"Pokémon":       [175, 143,   253, 191],
	},
	"Fight": {
		"Attack 1":      [  0,  23,   126,  78],
		"Attack 2":      [127,  23,   253,  78],
		"Attack 3":      [  0,  87,   126, 142],
		"Attack 4":      [127,  87,   253, 142],
		"Cancel":        [  7, 151,   246, 191],
	},
	"Double battle": {
		"Foe 1":         [  0,   7,   118,  78],
		"Foe 2":         [135,   7,   253,  78],
		"Ally 1":        [  0,  87,   118, 142],
		"Ally 2":        [135,  87,   253, 142],
	},
	"Bag": {
		"Restore":       [  0,   7,   125,  77],
		"Balls":         [127,   7,   253,  77],
		"Status":        [  0,  79,   125, 149],
		"Battle items":  [127,  79,   253, 149],
		"Last used":     [  0, 151,   205, 189],
		"Cancel":        [215, 151,   253, 189],
	},
	"Pocket": {
		"Item 1":        [  0,   7,   125,  53],
		"Item 2":        [127,   7,   253,  53],
		"Item 3":        [  0,  55,   125, 101],
		"Item 4":        [127,  55,   253, 101],
		"Item 5":        [  0, 103,   125, 149],
		"Item 6":        [127, 103,   253, 149],
		"Previous":      [  0, 151,    37, 189],
		"Next":          [ 39, 151,    77, 189],
		"Cancel":        [215, 151,   253, 189],
	},
	"Item": {
		"Use":           [  0, 151,   205, 189],
		"Cancel":        [215, 151,   253, 189],
	},
	"Pokémon": { // Also for "use item on"
		"Pokémon 1":     [  0,   0,   125,  45],
		"Pokémon 2":     [127,   7,   253,  53],
		"Pokémon 3":     [  0,  47,   125,  93],
		"Pokémon 4":     [127,  55,   253, 101],
		"Pokémon 5":     [  0,  95,   125, 141],
		"Pokémon 6":     [127, 103,   253, 149],
		"Cancel":        [215, 151,   253, 189],
	},
	"Switch": {
		"Switch":        [  7,   7,   245, 141],
		"Summary":       [  0, 151,   101, 189],
		"Check moves":   [103, 151,   205, 189],
		"Cancel":        [215, 151,   253, 189],
	},
	"Check moves": { // Almost the same as "Summary"
		"Move 1":        [  0,  47,   125,  93],
		"Move 2":        [127,  47,   253,  93],
		"Move 3":        [  0,  95,   125, 141],
		"Move 4":        [127,  95,   253, 141],
		"Previous":      [  0, 151,    37, 189],
		"Next":          [ 39, 151,    77, 189],
		"Summary":       [ 95, 151,   197, 189],
		"Cancel":        [215, 151,   253, 189],
	},
	"Move": {
		"Slot 1":        [ 87, 151,   125, 165],
		"Slot 2":        [127, 151,   165, 165],
		"Slot 3":        [ 87, 167,   125, 181],
		"Slot 4":        [127, 167,   165, 181],
		"Cancel":        [215, 151,   253, 189],
	},
},
"PC": {
	"Misc": {
		"Release":        [167, 135,  253, 157],
		"Release No":     [199, 127,  246, 158],
		"Release Yes":    [199,  95,  246, 126],
		"See ya":         [130, 122,  250, 161],
		"Quit all PCs":   [  2, 147,  249, 186],
	},
},
"Overworld": {
	"Overworld": {
		"X":             [  7,   0,    158,  14],
		"Pokédex":       [ 15,  21,     74,  52],
		"Trainer card":  [ 95,  21,    154,  52],
		"Pokémon":       [ 15,  61,     74,  92],
		"Save":          [ 95,  61,    154,  92],
		"Bag":           [ 15, 101,     74, 132],
		"Options":       [ 95, 101,    154, 132],
		"Pokégear":      [ 15, 141,     74, 172],
		"Register 1":    [202,   7,    253,  37],
		"Register 2":    [202,  45,    253,  75],
		"Running shoes": [183,  85,    253, 132],
		"A":             [167, 143,    253, 186],
	},
	"OW Bag": {
		"Items":         [  0,   0,     29,  29],
		"Medicine":      [ 31,   0,     61,  29],
		"Balls":         [ 63,   0,     93,  29],
		"TMs/HMs":       [ 95,   0,    125,  29],
		"Berries":       [127,   0,    157,  29],
		"Mail":          [159,   0,    189,  29],
		"Battle items":  [191,   0,    221,  29],
		"Key items":     [223,   0,    253,  29],
		"Item 1":        [  0,  31,    125,  71],
		"Item 2":        [127,  31,    253,  71],
		"Item 3":        [  0,  73,    125, 115],
		"Item 4":        [127,  73,    253, 115],
		"Item 5":        [  0, 117,    125, 151],
		"Item 6":        [127, 117,    253, 151],
		"Previous":      [  0, 167,     37, 189],
		"Next":          [ 39, 167,     77, 189],
		"Cancel":        [191, 167,    253, 189],
	},
	"OW Bag item": {
		"Use":           [  0, 127,     91, 157], // "Walk" when on bike
		"Trash":         [ 95, 127,    189, 157], // "Register" or "Deselect" in last pocket
		"Give":          [  0, 159,     91, 189],
		"Move":          [ 95, 159,    189, 189],
		"Cancel":        [191, 167,    253, 189],
	},
	"OW Pokémon": {
		"Summary":       [127,  23,    255,  54],
		"Switch":        [127,  55,    255,  86],
		"Item":          [127,  87,    255, 118],
		"HM Move 1":     [  0,  15,    126,  46],
		"HM Move 2":     [  0,  47,    126,  78],
		"HM Move 3":     [  0,  79,    126, 110],
		"HM Move 4":     [  0, 111,    126, 142],
	},
},
"Misc.": { /* (nicknames, Pokéathlon, etc.) */
	"Mart": {
		"Buy":           [  2,  26,    249,  66],
		"Sell":          [  2,  73,    249, 113],
		"See ya":        [  2, 122,    249, 162],
	},
	"Buy": {
		"Item 1":        [  0,  31,    125,  71],
		"Item 2":        [127,  31,    253,  71],
		"Item 3":        [  0,  73,    125, 115],
		"Item 4":        [127,  73,    253, 115],
		"Item 5":        [  0, 117,    125, 151],
		"Item 6":        [127, 117,    253, 151],
		"Previous":      [  0, 167,     37, 189],
		"Next":          [ 39, 167,     77, 189],
		"Cancel":        [191, 167,    253, 189],
	},
	"Teach Dialog": {
		// Teach ___ to a Pokémon?
		"Teach to? Yes": [199,  47,    246,  78],
		"Teach to? No":  [199,  79,    246, 110],
		// Should a move be replaced with ___?
		"Should? Yes":   [199,  80,    246, 110], // TODO fix 80
		"Should? No":    [199, 111,    246, 142],
	},
	"Teach Move": {
		"Move 1":        [  7,   7,    125,  37],
		"Move 2":        [  7,  39,    125,  69],
		"Move 3":        [  7,  71,    125, 101],
		"Move 4":        [  7, 103,    125, 133],
		"Forget":        [  7, 151,    125, 181],
	},
	"Fly Jotho": {
	},
	"Fly Kanto": {
	},
},
};
