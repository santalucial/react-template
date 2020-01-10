/* eslint-disable no-use-before-define */
export default function dev() {
	'use strict'
	// type 'dev' on your keyboard
	var key = [68, 69, 86]
	var ck = 0
	var max = key.length

	var record = function(e) {
		if (e.which === key[ck]) {
			ck++
		} else {
			ck = 0
		}
		if (ck >= max) {
			window.devMode()
			ck = 0
		}
	}

	// eslint-disable-next-line no-unused-vars
	var init = function() {
		document.addEventListener('keyup', record)
	}

	init()
}
