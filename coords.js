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

function rotate_state(e) {
	switch (this.dataset.state) {
		case 'unchecked':
			this.dataset.state = 'checked';
			this.checked = true;
			break;
		case 'checked':
			this.dataset.state = 'indeterminate';
			this.indeterminate = true;
			break;
		case 'indeterminate':
			this.dataset.state = 'unchecked';
			this.indeterminate = false;
			this.checked = false;
			break;
	}

	recomposite_main();
}

function format_x1y1(x1, y1, x2, y2) {
	return '<small><span>↖ ' + x1 + ',' + y1 + '</span><span>↘ ' + x2 + ',' + y2 + '</span></small>';
}

function draw() {
	document.getElementById('ind').indeterminate = true;
	var key_checkboxes = document.querySelectorAll('#key input');
	for (var i in key_checkboxes)
		key_checkboxes[i].onclick = function() { return false; };

	var main = document.getElementById('main');
	main_ctx = main.getContext('2d');
	main_ctx.scale(2, 2);
	// main_ctx.globalCompositeOperation = 'dest-out';
	main_ctx.fillStyle = '#7af';

	var span = document.getElementById('coords');
	main.onmousemove = function(e) {
		var s = '';
		var rx = (e.offsetX === undefined) ? e.layerX - e.currentTarget.offsetLeft : e.offsetX,
			ry = (e.offsetY === undefined) ? e.layerY - e.currentTarget.offsetTop  : e.offsetY;

		if (rx >= 0 || ry >= 0) {
			var d = main_ctx.getImageData(~~rx, ~~ry, 1, 1).data;

			if (d[3] !== 0)
				s = Math.floor(rx / 2) + ',' + Math.floor(ry / 2);
		}

		span.innerHTML = s;
	};

	b = document.getElementById('b');
	for (menu in coords) {
		var child = draw_menu(menu);
		b.appendChild(child);
	}

	all_inputs = document.querySelectorAll('#b input');
}

function recomposite_main() {
	var gathered = { 'checked': [], 'unchecked': [], 'indeterminate': [] };
	for (var i = 0; i < all_inputs.length; i ++) {
		var input = all_inputs[i];
		gathered[input.dataset.state].push([input.id, input.dataset.parent]);
	}

	main_ctx.clearRect(0, 0, cw, ch);
	main_ctx.globalAlpha = 0.4;
	for (var i = 0; i < gathered.checked.length; i ++) {
		var rekt = gathered.checked[i];
		var xywh = to_xywh.apply(null, coords[rekt[1]][rekt[0]]);
		main_ctx.fillRect.apply(main_ctx, xywh);
	}
	for (var i = 0; i < gathered.indeterminate.length; i ++) {
		var rekt = gathered.indeterminate[i];
		var xywh = to_xywh.apply(null, coords[rekt[1]][rekt[0]]);
		main_ctx.clearRect.apply(main_ctx, xywh);
	}
}

function draw_menu(menu) {
	// Heading
	var div = document.createElement('tr');
	var th = document.createElement('th');
	th.innerHTML = menu + '<br /><br />';

	// Reset
	current_color = 0;

	var c = new_canvas();
	var ctx = c.getContext('2d');
	ctx.globalCompositeOperation = 'dest-over';
	th.appendChild(c);
	div.appendChild(th);

	for (rekt in coords[menu]) {
		var child_c = draw_rekt(rekt, menu, ctx);
		div.appendChild(child_c);
	}

	return div;
}

function draw_rekt(rekt, parent, parent_ctx) {
	// Heading
	var div = document.createElement('div');
	div.setAttribute('class', 'button');
	div.innerHTML = '<strong>' + rekt + '</strong>';

	var checkbox = document.createElement('input');
	checkbox.setAttribute('type', 'checkbox');
	checkbox.setAttribute('id', rekt);
	checkbox.setAttribute('data-parent', parent);
	checkbox.setAttribute('data-state', 'unchecked');
	checkbox.onclick = rotate_state;
	div.appendChild(checkbox);
	div.insertAdjacentHTML('beforeend', '<br />' + format_x1y1.apply(null, coords[menu][rekt]) + '<br />');

	var c = new_canvas();
	c.setAttribute('id', rekt + 'canvas')
	var ctx = c.getContext('2d');

	// Pop the next color from the palette
	var color = palette[current_color++];
	ctx.fillStyle = color;
	parent_ctx.fillStyle = color;

	var xywh = to_xywh.apply(null, coords[menu][rekt]);

	// Draw a rektangle
	ctx.fillRect.apply(ctx, xywh);
	parent_ctx.fillRect.apply(parent_ctx, xywh);

	div.appendChild(c)
	var td = document.createElement('td');
	td.appendChild(div);
	return td;
}

window.onload = draw;
