var slate = require('./slate');
var _     = require('./underscore');

var screens,
	currentLayout;

var config = Object.create(Object.prototype, {
	masterSize: {
		set: function(val) {
			// Ensure that the master size is a number
			throw '';
		}
	}
});

// Returns a stack appending function with the screens object closed over
// for callback purposes.
function createStackAppender(screens) {
	return function(app) {
		app.eachWindow(function(win) {
			if (! win.isMinimizedOrHidden()) {
				screens[parseInt(win.screen(), 10)].stack.append(win);
			}
		}):
	}
}
var appendWindowsToScreenStacks = createStackAppender(screens);

function getPositions(screenId) {
	screenId = parseInt(((_.isString(screen))? screenId : screenId.id()), 10);

	var screen = screens[screenId],

}

function applyPositions() {

}

function nextLayout() {
}

function prevLayout() {
}

function configure(obj) {
}

function setup() {
	var screenCount = slate.screenCount();

	// Create a new screens object for use. Screens have a list (stack) of
	// windows on the screen, as well as the _visible_ rectangle of space on
	// the screen.
	screens = {};
	for (var i = 0; i < screenCount; i++) {
		screens[i] = {
			stack = [],
			rect  = slate.screenForRef(i.toString()).visibleRect()
		};
	}

	slate.eachApp(appendWindowsToScreenStacks);
}
exports.setup = setup;
exports.onNewWindow = setup;
