/**
 * @author mrdoob / http://mrdoob.com/
 */

var Config = function () {

	var name = 'threejs-editor';

	var storage = {
		'autosave': true,
		'theme': 'css/visualizer.css',

		'project/renderer': 'WebGLRenderer',
		'project/renderer/antialias': true,
		'project/renderer/shadows': true,
		'project/vr': false,
		'project/orbit': false,

		'ui/sidebar/animation/collapsed': true,
		'ui/sidebar/geometry/collapsed': true,
		'ui/sidebar/material/collapsed': true,
		'ui/sidebar/object3d/collapsed': false,
		'ui/sidebar/project/collapsed': true,
		'ui/sidebar/scene/collapsed': false,
		'ui/sidebar/script/collapsed': true,

		'ui/sidebar/data/collapsed': true,
		'ui/sidebar/data/params': {},
		'ui/sidebar/project/name': 'three.js',
		'ui/sidebar/data/name': 'three'
	};

	if ( window.localStorage[ name ] === undefined ) {

		window.localStorage[ name ] = JSON.stringify( storage );

	} else {

		var data = JSON.parse( window.localStorage[ name ] );

		for ( var key in data ) {

			storage[ key ] = data[ key ];

		}

	}

	return {

		getKey: function ( key ) {

			return storage[ key ];

		},

		setKey: function () { // key, value, key, value ...

			for ( var i = 0, l = arguments.length; i < l; i += 2 ) {

				storage[ arguments[ i ] ] = arguments[ i + 1 ];

			}

			window.localStorage[ name ] = JSON.stringify( storage );

			console.log( '[' + /\d\d\:\d\d\:\d\d/.exec( new Date() )[ 0 ] + ']', 'Saved config to LocalStorage.' );

		},

		clear: function () {

			delete window.localStorage[ name ];

		}

	}

};
