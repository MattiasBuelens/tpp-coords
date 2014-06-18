var game = 'black';
var bounds =                [  0,   0,   255, 191];
var coords = {
"Battle": {
	"Battle": {
		"Fight":            [  0,  23,   255, 143],
		"Bag":              [  0, 144,    79, 191],
		"Run":              [ 87, 151,   167, 191],
		"Pokémon":          [175, 144,   255, 191],
	},
	"Fight": {
		"Attack 1":         [  0,  31,   127,  79],
		"Attack 2":         [128,  31,   255,  79],
		"Attack 3":         [  0,  80,   127, 127],
		"Attack 4":         [128,  80,   255, 127],
		"Cancel":           [175, 143,   255, 191],
	},
	"Double battle": {
		"Foe 1":            [  0,  31,   126,  87],
		"Foe 2":            [127,  31,   255,  87],
		"Ally 1":           [  0,  88,   126, 127],
		"Ally 2":           [127,  88,   255, 127],
		"Cancel":           [175, 143,   255, 191],
	},
	"Bag": {
		"Restore":          [  0,   7,   126,  70],
		"Balls":            [127,   7,   255,  70],
		"Status":           [  0,  79,   126, 142],
		"Battle items":     [127,  79,   255, 142],
		"Last used":        [  7, 151,   206, 191],
		"Cancel":           [215, 151,   255, 191],
	},
	"Pocket": {
		"Item 1":           [  0,   7,   126,  54],
		"Item 2":           [127,   7,   255,  54],
		"Item 3":           [  0,  55,   126, 102],
		"Item 4":           [127,  55,   255, 102],
		"Item 5":           [  0, 103,   126, 150],
		"Item 6":           [127, 103,   255, 150],
		"Previous":         [  0, 151,    38, 191],
		"Next":             [ 39, 151,    78, 191],
		"Cancel":           [215, 151,   255, 191],
	},
	"Item": {
		"Use":              [  7, 151,   206, 191],
		"Cancel":           [215, 151,   255, 191],
	},
	"Pokémon": { // Also for "use item on"
		"Pokémon 1":        [  0,   0,   126,  47],
		"Pokémon 2":        [127,   7,   255,  54],
		"Pokémon 3":        [  0,  48,   126,  94],
		"Pokémon 4":        [127,  55,   255, 102],
		"Pokémon 5":        [  0,  95,   126, 142],
		"Pokémon 6":        [127, 103,   255, 150],
		"Cancel":           [215, 151,   255, 191],
	},
	"Switch": {
		"Switch":           [ 51,  23,   202, 130],
		"Summary":          [  0, 151,   102, 191],
		"Check moves":      [103, 151,   206, 191],
		"Cancel":           [215, 151,   255, 191],
	},
	"Check moves": { // Almost the same as "Summary"
		"Move 1":           [  0,  47,   126,  94],
		"Move 2":           [127,  47,   253,  94],
		"Move 3":           [  0,  95,   126, 142],
		"Move 4":           [127,  95,   253, 142],
		"Previous":         [  0, 151,    38, 191],
		"Next":             [ 39, 151,    78, 191],
		"Summary":          [ 95, 151,   198, 191],
		"Cancel":           [215, 151,   255, 191],
	},
	"Move": {
		"Slot 1":           [ 87, 151,   126, 166],
		"Slot 2":           [127, 151,   166, 166],
		"Slot 3":           [ 87, 167,   126, 182],
		"Slot 4":           [127, 167,   166, 182],
		"Cancel":           [215, 151,   255, 191],
	},
},
"Overworld": {
	"Overworld": {
		"Pokémon":          [  7,  23,   119,  63],
		"Pokédex":          [135,  23,   247,  63],
		"Bag":              [  7,  71,   119, 111],
		"Trainer card":     [135,  71,   247, 111],
		"Save":             [  7, 119,   119, 159],
		"Options":          [135, 119,   247, 159],
		"Quit":             [223, 167,   247, 191],
	},
	"Bag": {
		"Item 1":           [143,  11,   222,  34],
		"Item 2":           [143,  35,   222,  58],
		"Item 3":           [143,  59,   222,  82],
		"Item 4":           [143,  83,   222, 106],
		"Item 5":           [143, 107,   222, 130],
		"Item 6":           [143, 131,   222, 154],
		"Register 1":       [119,  11,   142,  34],
		"Register 2":       [119,  35,   142,  58],
		"Register 3":       [119,  59,   142,  82],
		"Register 4":       [119,  83,   142, 106],
		"Register 5":       [119, 107,   142, 130],
		"Register 6":       [119, 131,   142, 154],
		"Scroll":           [223,  15,   255, 150],
		"Previous":         [  0, 167,    22, 191],
		"Next":             [119, 167,   142, 191],
		"Quit":             [191, 167,   214, 191],
		"Cancel":           [223, 167,   246, 191],
	},
	"Bag item": {
		"Use":              [151,  95,   255, 119],
		"Give":             [151, 120,   255, 143],
		"Trash":            [151, 144,   255, 167],
		"Cancel":           [151, 168,   255, 191],
	},
	"Key item": {
		"Use":              [151, 119,   255, 143], // "Walk" when on bike
		"Register":         [151, 144,   255, 167],
		"Cancel":           [151, 168,   255, 191],
	},
	"TM item": {
		"Use":              [151, 143,   255, 167],
		"Cancel":           [151, 168,   255, 191],
	},
	"Trash count": {
		"Trash":            [127,  95,   230, 142],
		"More":             [233,  91,   255, 115],
		"Less":             [233, 116,   255, 139],
	},
	"Trash confirm": {
		"Yes":              [191,  47,   255,  71],
		"No":               [191,  72,   255,  95],
	},
	"Pokémon": {
		"Pokémon 1":        [  0,   7,   127,  55],
		"Pokémon 2":        [128,  15,   255,  63],
		"Pokémon 3":        [  0,  56,   127, 103],
		"Pokémon 4":        [128,  64,   255, 111],
		"Pokémon 5":        [  0, 104,   127, 151],
		"Pokémon 6":        [128, 112,   255, 159],
		"Quit":             [199, 167,   222, 191],
		"Cancel":           [223, 167,   247, 191],
	},
	"Pokémon Do": {
		"Summary":          [151,   0,   255,  23],
		"Move 1":           [151,  24,   255,  47],
		"Move 2":           [151,  48,   255,  71],
		"Move 3":           [151,  72,   255,  95],
		"Move 4":           [151,  96,   255, 119],
		"Switch":           [151, 120,   255, 143],
		"Item":             [151, 144,   255, 167],
		"Quit":             [151, 168,   255, 191],
	},
	"Pokémon Item": {
		"Give":             [151, 119,   255, 143], // "Read" when holding mail
		"Take":             [151, 144,   255, 167],
		"Quit":             [151, 168,   255, 191],
	},
},
"C-Gear": {
	"C-Gear": {
		"Customization":    [165, 161,   181, 177],
		"Help":             [189, 161,   205, 177],
		"Power":            [213, 161,   229, 177],
	},
	"Power": {
		"Yes":              [167,  47,   255,  71],
		"No":               [167,  72,   255,  95],
	},
	"Online": {
		"Settings":         [  0, 159,    55, 191],
		"Cancel":           [191, 159,   255, 191],
	},
	"Save": {
		"Yes":              [151,  63,   255,  87],
		"No":               [151,  88,   255, 111],
	},
	"IR": {
		"Cancel":           [191, 159,   255, 191],
	},
	"Wireless": {
		"Cancel":           [191, 159,   255, 191],
	},
	"Xtransceiver": {
		"Cancel":           [223, 167,   247, 191],
	},
	"Survey Radar": {
		"Cancel":           [215, 167,   239, 191],
	},
	"Survey Start": {
		"Cancel":           [159, 167,   239, 191],
	},
	"Tag Log": {
		"Cancel":           [227, 171,   251, 191],
	},
	"Help": {
		"Quit":             [175, 167,   255, 191],
	},
},
"PC": {
	"Deposit": {
		"Pokémon 1":        [ 29,  55,    52,  78],
		"Pokémon 2":        [ 65,  63,    88,  86],
		"Pokémon 3":        [ 29,  87,    52, 110],
		"Pokémon 4":        [ 65,  95,    88, 118],
		"Pokémon 5":        [ 29, 119,    52, 142],
		"Pokémon 6":        [ 65, 127,    88, 150],
		"Deposit":          [167,  39,   255,  62],
		"Summary":          [167,  63,   255,  86],
		"Marking":          [167,  87,   255, 110],
		"Release":          [167, 111,   255, 134],
		"Cancel":           [167, 135,   255, 158],
		"Exit PC":          [199, 167,   222, 191],
		"Quit":             [231, 167,   255, 191],
	},
	"Withdraw": {
		"Withdraw":         [167,  39,   255,  62],
		"Summary":          [167,  63,   255,  86],
		"Marking":          [167,  87,   255, 110],
		"Release":          [167, 111,   255, 134],
		"Cancel":           [167, 135,   255, 158],
		"Exit PC":          [199, 167,   222, 191],
		"Quit":             [231, 167,   255, 191],
	},
	"Release": {
		"Release Yes":      [191,  95,   255, 119],
		"Release No":       [191, 120,   255, 143],
	},
	"Box": {
		"Previous box":     [  5,  17,    25,  37],
		"Next box":         [140,  17,   160,  37],
		"Slot 1 (1,1)":     [ 11,  39,    34,  62],
		"Slot 2 (1,2)":     [ 35,  39,    58,  62],
		"Slot 3 (1,3)":     [ 59,  39,    82,  62],
		"Slot 4 (1,4)":     [ 83,  39,   106,  62],
		"Slot 5 (1,5)":     [107,  39,   130,  62],
		"Slot 6 (1,6)":     [131,  39,   154,  62],
		"Slot 7 (2,1)":     [ 11,  63,    34,  86],
		"Slot 8 (2,2)":     [ 35,  63,    58,  86],
		"Slot 9 (2,3)":     [ 59,  63,    82,  86],
		"Slot 10 (2,4)":    [ 83,  63,   106,  86],
		"Slot 11 (2,5)":    [107,  63,   130,  86],
		"Slot 12 (2,6)":    [131,  63,   154,  86],
		"Slot 13 (3,1)":    [ 11,  87,    34, 110],
		"Slot 14 (3,2)":    [ 35,  87,    58, 110],
		"Slot 15 (3,3)":    [ 59,  87,    82, 110],
		"Slot 16 (3,4)":    [ 83,  87,   106, 110],
		"Slot 17 (3,5)":    [107,  87,   130, 110],
		"Slot 18 (3,6)":    [131,  87,   154, 110],
		"Slot 19 (4,1)":    [ 11, 111,    34, 134],
		"Slot 20 (4,2)":    [ 35, 111,    58, 134],
		"Slot 21 (4,3)":    [ 59, 111,    82, 134],
		"Slot 22 (4,4)":    [ 83, 111,   106, 134],
		"Slot 23 (4,5)":    [107, 111,   130, 134],
		"Slot 24 (4,6)":    [131, 111,   154, 134],
		"Slot 25 (5,1)":    [ 11, 135,    34, 158],
		"Slot 26 (5,2)":    [ 35, 135,    58, 158],
		"Slot 27 (5,3)":    [ 59, 135,    82, 158],
		"Slot 28 (5,4)":    [ 83, 135,   106, 158],
		"Slot 29 (5,5)":    [107, 135,   130, 158],
		"Slot 30 (5,6)":    [131, 135,   154, 158],
	},
},
"Misc": { /* (nicknames, Pokéathlon, etc.) */
	"Fly": {
		"Nuvema Town":      [223, 153,   239, 161],
		"Accumula Town":    [223, 133,   239, 141],
		"Striaton City":    [219, 113,   235, 121],
		"Nacrene City":     [194, 113,   210, 121],
		"Castelia City":    [123, 125,   139, 133],
		"Nimbasa City":     [123,  86,   139,  94],
		"Driftveil City":   [ 65,  86,    81,  94],
		"Mistralton City":  [ 31,  62,    47,  70],
		"Icirrus City":     [ 65,  38,    81,  46],
		"Opelucid City":    [123,  38,   139,  46],
		"Victory Road":     [154,  19,   170,  27],
		"Pokémon League":   [161,  10,   177,  18],
		"Lacunosa Town":    [181,  38,   197,  46],
		"Undella Town":     [215,  62,   231,  70],
		"Black City":       [181,  86,   197,  94],
		"Quit":             [199, 167,   223, 191],
		"Cancel":           [231, 167,   255, 191],
	},
	"Name": {
		"A":                [ 23,  39,    39,  63],
		"B":                [ 40,  39,    55,  63],
		"C":                [ 56,  39,    71,  63],
		"D":                [ 72,  39,    87,  63],
		"E":                [ 88,  39,   103,  63],
		"F":                [104,  39,   119,  63],
		"G":                [120,  39,   135,  63],
		"H":                [136,  39,   151,  63],
		"I":                [152,  39,   167,  63],
		"J":                [168,  39,   183,  63],
		",":                [200,  39,   215,  63],
		".":                [216,  39,   231,  63],
		"K":                [ 23,  64,    39,  87],
		"L":                [ 40,  64,    55,  87],
		"M":                [ 56,  64,    71,  87],
		"N":                [ 72,  64,    87,  87],
		"O":                [ 88,  64,   103,  87],
		"P":                [104,  64,   119,  87],
		"Q":                [120,  64,   135,  87],
		"R":                [136,  64,   151,  87],
		"S":                [152,  64,   167,  87],
		"T":                [168,  64,   183,  87],
		"'":                [200,  64,   215,  87],
		"-":                [216,  64,   231,  87],
		"U":                [ 23,  88,    39, 111],
		"V":                [ 40,  88,    55, 111],
		"W":                [ 56,  88,    71, 111],
		"X":                [ 72,  88,    87, 111],
		"Y":                [ 88,  88,   103, 111],
		"Z":                [104,  88,   119, 111],
		"♂":                [200,  88,   215, 111],
		"♀":                [216,  88,   231, 111],
		"0":                [ 23, 136,    39, 159],
		"1":                [ 40, 136,    55, 159],
		"2":                [ 56, 136,    71, 159],
		"3":                [ 72, 136,    87, 159],
		"4":                [ 88, 136,   103, 159],
		"5":                [104, 136,   119, 159],
		"6":                [120, 136,   135, 159],
		"7":                [136, 136,   151, 159],
		"8":                [152, 136,   167, 159],
		"9":                [168, 136,   183, 159],
		"Upper":            [ 23, 160,    47, 183],
		"Lower":            [ 48, 160,    71, 183],
		"Others":           [ 72, 160,    95, 183],
		"Qwerty":           [ 96, 160,   119, 183],
		"Delete":           [120, 160,   175, 183],
		"OK":               [176, 160,   231, 183],
	},
	"Daycare Store": {
		"Store":            [151, 119,   255, 143],
		"Summary":          [151, 144,   255, 167],
		"Quit":             [151, 168,   255, 191],
	},
	"Starters": {
		"Snivy":            [ 34,  64,    96, 126],
		"Tepig":            [102,  40,   151,  90],
		"Oshawott":         [157,  64,   220, 126],
		"Pick":             [ 71, 167,   182, 191],
		"Pick Yes":         [183,  87,   255, 111],
		"Pick No":          [183, 112,   255, 135],
	},
},
};
