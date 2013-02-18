var layouts = {
	vertMaster: require('layouts/vertMaster')
};

(function(slate, _) {
	'use strict';

	var percent  = function(n) { return (1.0/100.0)*n; };

	// Really dislike having this magic data
	var ratios = {
		1920: percent(56),
		1440: percent(72),
		1080: percent(60),
		900:  percent(60)
	};

	// Creates Slate movement operations based on a configuration object.
	var position = (function(ratios) {
		return (function() {
			var opts     = arguments[0] || {},
				split    = opts.split || false,
				master   = opts.master || false,
				mirrored = opts.mirrored || false;

			function verticalSplit(win) {
				var screen = win.screen();
				var rect   = screen.rect();
				var newPos = {
					x: rect.x,
					y: rect.y,
					width: rect.width,
					height: rect.height,
					screen: screen.id()
				};
				if (master) {
					newPos.width *= ratios[rect.width];
				} else {
					newPos.width *= (1-ratios[rect.width]);
					newPos.x += rect.width * ratios[rect.width];
				}
				win.move(newPos);
				win.resize(newPos);
			}

			function verticalSplitMirrored(win) {
				var screen = win.screen();
				var rect   = screen.rect();
				var newPos = {
					x: rect.x,
					y: rect.y,
					width: rect.width,
					height: rect.height,
					screen: screen.id()
				};
				if (master) {
					newPos.width *= ratios[rect.width];
					newPos.x += rect.width * (1-ratios[rect.width]);
				} else {
					newPos.width *= (1-ratios[rect.width]);
				}
				win.move(newPos);
				win.resize(newPos);
			}

			function horizontalSplit(win) {
				var screen = win.screen();
				var rect   = screen.rect();
				var newPos = {
					x: rect.x,
					y: rect.y,
					width: rect.width,
					height: rect.height,
					screen: screen.id()
				};
				if (master) {
					newPos.height *= ratios[rect.height];
				} else {
					newPos.height *= (1-ratios[rect.height]);
					newPos.y += rect.height * ratios[rect.height];
				}
				win.move(newPos);
				win.resize(newPos);
			}

			function horizontalSplitMirrored(win) {
				var screen = win.screen();
				var rect   = screen.rect();
				var newPos = {
					x: rect.x,
					y: rect.y,
					width: rect.width,
					height: rect.height,
					screen: screen.id()
				};
				if (master) {
					newPos.height *= ratios[rect.height];
					newPos.y += rect.height * ratios[rect.height];
				} else {
					newPos.height *= (1-ratios[rect.height]);
				}
				win.move(newPos);
				win.resize(newPos);
			}

			function fullScreen(win) {
				var screen = win.screen();
				var rect   = screen.rect();
				var newPos = {
					x: rect.x,
					y: rect.y,
					width: rect.width,
					height: rect.height,
					screen: screen.id()
				};
				win.move(newPos);
				win.resize(newPos);
			}

			switch(split) {
				case 'vertical':
				case 'vert':
				case 'v':
					return mirrored? verticalSplitMirrored : verticalSplit;
				case 'horizontal':
				case 'horz':
				case 'h':
					return mirrored? horizontalSplitMirrored : horizontalSplit;
				default:
					return fullScreen;
			}
		});
	})(ratios);

	// TODO Remove bindings from this
	slate.bindAll({
		'1:alt': position({master: true, split: 'vert'}),
		'1:shift,alt': position({master: false, split: 'vert'}),
		'1:ctrl,alt':
			position({master: true, split: 'vert', mirrored: true}),
		'1:ctrl,shift,alt':
			position({master: false, split: 'vert', mirrored: true}),
		'2:alt': position({master: true, split: 'horz'}),
		'2:shift,alt': position({master: false, split: 'horz'}),
		'2:ctrl,alt':
			position({master: true, split: 'horz', mirrored: true}),
		'2:ctrl,shift,alt':
			position({master: false, split: 'horz', mirrored: true}),
		'3:alt': position()
	});

})(slate, _);
