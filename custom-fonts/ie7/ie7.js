/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'rostering\'">' + entity + '</span>' + html;
	}
	var icons = {
		'rostering--negative': '&#xe900;',
		'rostering--positive': '&#xe910;',
		'rostering--reports': '&#xe903;',
		'rostering--more': '&#xe904;',
		'rostering--logout': '&#xe905;',
		'rostering--forward': '&#xe906;',
		'rostering--email': '&#xe907;',
		'rostering--edit': '&#xe909;',
		'rostering--dropdown': '&#xe90a;',
		'rostering--delete': '&#xe90b;',
		'rostering--close': '&#xe90c;',
		'rostering--backward': '&#xe90d;',
		'rostering--addColumn': '&#xe90e;',
		'rostering--key': '&#xe901;',
		'rostering--user': '&#xe902;',
		'rostering--logo': '&#xe908;',
		'rostering--right': '&#xe90f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/rostering--[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
