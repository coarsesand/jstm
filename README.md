# JSTM

Beginnings of a tiling manager written in JavaScript for [Slate.app][].

[Slate.app]: http://github.com/jigish/slate

## Usage

Link/Copy jstm.js to your home directory, then add this to your .slate.js file.

	if (!slate.source('~/.jstm.js')) {
		exit();
	}

## Keybindings

Right now the bindings are defined in jstm.js. This is hardly ideal, so
they'll be removed eventually.
