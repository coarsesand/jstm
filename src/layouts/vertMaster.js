// var _     = require('underscore');

exports = function(screen, winCount, masterCount, masterFrac) {
	var positions = [],
		masterWidth = (screen.width * masterFrac),
		regularWidth = (screen.width - masterWidth),
		masterHeight = (screen.height / masterCount),
		regularCount = (winCount - masterCount),
		regularHeight = (screen.height / regularCount);

	var i, j;
	for (i = 0; i < winCount; i++) {
		// Masters
		for (j = 0; j < masterCount; j++) {
			positions.push({
				x: 0,
				y: (j * masterHeight),
				width: masterWidth,
				height: masterHeight
			});
		}
		for (j = 0; j < regularCount; j++) {
			positions.push({
				x: masterWidth,
				y: (j * regularHeight),
				width: regularWidth,
				height: regularHeight
			});
		}
	}

	return positions;
};
