var palette = [
	'rgb(200, 42,102)', 'rgb(232,157, 52)', 'rgb(206, 98,195)', 'rgb(178,223, 75)', 'rgb( 97,223,181)', 'rgb(255,135, 83)', 'rgb(255,255,111)',
	'rgb(223, 38, 65)', 'rgb(185,202,246)', 'rgb(217,142,  0)', 'rgb(255,255,  1)', 'rgb( 70,138,126)', 'rgb(255,189,211)', 'rgb(161, 38,148)',
	'rgb( 88,150, 62)', 'rgb(237,185, 52)', 'rgb( 85, 78,148)', 'rgb(255,198,187)', 'rgb(128,128,  0)', 'rgb(128 , 0, 64)', 'rgb(255,255,195)'
];

var b, current_color, all_inputs, main_ctx,
	cw = bounds[2] - bounds[0] + 1;
	ch = bounds[3] - bounds[1] + 1;

function new_canvas() {
	var c = document.createElement('canvas');
	c.width  = cw;
	c.height = ch;
	return c;
}

function to_xywh(x1, y1, x2, y2) { return [x1, y1, x2 - x1 + 1, y2 - y1 + 1]; }

var next_state = {
	'unchecked': 'checked',
	'checked': 'indeterminate',
	'indeterminate': 'unchecked',
}
function rotate_state(e) {
	set_state(this, next_state[this.dataset.state]);
}

function reset_all(state) {
	var state = state || 'unchecked';
	var inputs = document.querySelectorAll('.menu input');
	for (var i = 0; i < inputs.length; i ++)
		set_state(inputs[i], state);
}

function set_states(e) {
	var children = document.querySelectorAll('input[data-parent="' + this.dataset.id + '"][data-grandparent="' + this.dataset.parent + '"]');
	var state = next_state[this.dataset.state];
	set_state(this, state);
	for (var i = 0; i < children.length; i ++)
		set_state(children[i], state);
}

function set_state(el, state) {
	el.dataset.state = state;
	switch (state) {
		case 'unchecked':
			el.indeterminate = false;
			el.checked = false;
			break;
		case 'checked':
			el.indeterminate = false;
			el.checked = true;
			break;
		case 'indeterminate':
			el.indeterminate = true;
			el.checked = false;
			break;
	}

	recomposite_main();
}

function list_overlaps(r) {
	var span2 = document.getElementById('coords-click'),
		overlaps = document.getElementById('overlaps'),
		rekt, inside, input,
		gathered = { 'checked': [], 'unchecked': [], 'indeterminate': [] };

	span2.value = r.fx + ',' + r.fy;
	overlaps.style.display = 'block';

	for (category in coords) {
		for (menu in coords[category]) {
			for (rekt in coords[category][menu]) {
				x1y1 = coords[category][menu][rekt];
				inside = (x1y1[0] <= r.fx) && (r.fx <= x1y1[2]) && (x1y1[1] <= r.fy) && (r.fy <= x1y1[3]);
				if (inside) {
					var id = category + menu + rekt;
					input = document.getElementById(id);
					gathered[input.dataset.state].push('<a href="#' + id + '" class="overlap">' + menu + ' → ' + rekt + '</a>');
				}
			}
		}
	}
	for (var i in gathered) {
		var el = document.getElementById('overlaps-' + i);
		el.innerHTML = gathered[i].join('');
		el.parentNode.style.display = (gathered[i].length === 0) ? 'none' : 'block';
	}
}

function format_x1y1(x1, y1, x2, y2) {
	return '↖ ' + x1 + ',' + y1 + '<br />↘ ' + x2 + ',' + y2;
}

function mouse2coords(e) {
	var x = (e.offsetX === undefined) ? e.layerX - e.currentTarget.offsetLeft : e.offsetX,
		y = (e.offsetY === undefined) ? e.layerY - e.currentTarget.offsetTop  : e.offsetY,
		fx = Math.floor(x / 2),
		fy = Math.floor(y / 2);

	return { x: x, y: y, fx: fx, fy: fy };
}

function text2coords(s) {
	var m = s.match(/^(\d+),(\d+)$/);
	if (!m)
		throw 'Invalid coordinate syntax.';

	var fx = ~~m[1],
		fy = ~~m[2],
		x = fx * 2,
		y = fy * 2;
	if (fx < bounds[0] || fx > bounds[2] || fy < bounds[1] || fy > bounds[3])
		throw 'Coordinate out of bounds. Bounds are from ' +
			bounds[0] + ',' + bounds[1] + ' to ' + bounds[2] + ',' + bounds[3] + '.';

	return { x: x, y: y, fx: fx, fy: fy };
}

function draw() {


	all_inputs = document.querySelectorAll('.menu-list input');
}

function recomposite_main() {
	var gathered = { 'checked': [], 'unchecked': [], 'indeterminate': [] };
	for (var i = 0; i < all_inputs.length; i ++) {
		var input = all_inputs[i];
		gathered[input.dataset.state].push([input.dataset.id, input.dataset.parent, input.dataset.grandparent]);
	}

	main_ctx.clearRect(0, 0, cw, ch);
	main_ctx.globalAlpha = 0.4;
	for (var i = 0; i < gathered.checked.length; i ++) {
		var rekt = gathered.checked[i];
		var xywh = to_xywh.apply(null, coords[rekt[2]][rekt[1]][rekt[0]]);
		main_ctx.fillRect.apply(main_ctx, xywh);
	}
	for (var i = 0; i < gathered.indeterminate.length; i ++) {
		var rekt = gathered.indeterminate[i];
		var xywh = to_xywh.apply(null, coords[rekt[2]][rekt[1]][rekt[0]]);
		main_ctx.clearRect.apply(main_ctx, xywh);
	}
}

function draw_category(category) {
	var div = document.createElement('div');
	div.setAttribute('class', 'category');
	var id = 'category-' + category;
	div.setAttribute('id', id);
	var a = '<a href="#' + id + '">' + category + '</a>';

	var h = document.createElement('h2');
	h.innerHTML = '<strong>' + category + '</strong> screens';
	div.appendChild(h);
	for (menu in coords[category]) {
		div.appendChild(draw_menu(menu, category));
	}
	return [div, a];
}

function draw_menu(menu, parent) {
	// Heading
	var section = document.createElement('div');
	section.setAttribute('class', 'menu');
	var div = document.createElement('div');
	div.setAttribute('class', 'menu-heading');
	var h = document.createElement('h3');

	var checkbox = document.createElement('input');
	var checkbox_id = parent + menu;
	checkbox.setAttribute('type', 'checkbox');
	checkbox.setAttribute('id', checkbox_id);
	checkbox.setAttribute('data-id', menu);
	checkbox.setAttribute('data-parent', parent);
	checkbox.setAttribute('data-state', 'unchecked');
	checkbox.onclick = set_states;
	h.appendChild(checkbox);
	h.insertAdjacentHTML('beforeend', '<label for="' + checkbox_id + '">' + menu + '</label>');
	div.appendChild(h);

	// Reset
	current_color = 0;

	var c = new_canvas();
	var ctx = c.getContext('2d');
	ctx.globalCompositeOperation = 'dest-over';

	var layers = document.createElement('div');
	layers.setAttribute('class', 'layers');
	layers.appendChild(c);
	layers.insertAdjacentHTML('afterbegin', '<img src="data/' + game + '/screens/' + parent + '/' + menu + '.png">');
	div.appendChild(layers);
	section.appendChild(div);

	var div2 = document.createElement('div');
	div2.setAttribute('class', 'menu-list');
	var ul = document.createElement('ul');

	for (rekt in coords[category][menu]) {
		var child_c = draw_rekt(rekt, menu, ctx, parent);
		ul.appendChild(child_c);
	}

	div2.appendChild(ul);
	section.appendChild(div2);
	return section;
}

function draw_rekt(rekt, parent, parent_ctx, grandparent) {
	// Heading
	var div = document.createElement('li');
	div.setAttribute('class', 'rekt');

	var checkbox = document.createElement('input');
	var checkbox_id = grandparent + parent + rekt;
	checkbox.setAttribute('type', 'checkbox');
	checkbox.setAttribute('id', checkbox_id);
	checkbox.setAttribute('data-id', rekt);
	checkbox.setAttribute('data-parent', parent);
	checkbox.setAttribute('data-grandparent', grandparent);
	checkbox.setAttribute('data-state', 'unchecked');
	checkbox.onclick = rotate_state;
	div.appendChild(checkbox);

	var color = palette[current_color ++];
	if (current_color >= palette.length)
		current_color = 0;

	div.insertAdjacentHTML('beforeend',
		'<label for="' + checkbox_id + '">' +
		'<strong>' + rekt + '</strong>' +
		'<small style="background: ' + color + ';"><span>' + format_x1y1.apply(null, coords[category][menu][rekt]) + '</span></small>' +
		'</label>');

	parent_ctx.fillStyle = color;
	var xywh = to_xywh.apply(null, coords[category][menu][rekt]);
	parent_ctx.fillRect.apply(parent_ctx, xywh);

	return div;
}

window.onload = draw;
