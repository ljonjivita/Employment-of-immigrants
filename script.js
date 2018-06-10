	// accessToken MB
	mapboxgl.accessToken =
	'pk.eyJ1IjoibGpvbmppdml0YSIsImEiOiJjaWk0c205MGQwMWZxdDltMGIwcHF2MXFtIn0.UuJYjRK0RHeM8ghMN-JRXA';

	// kartet
	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/ljonjivita/civgv7tn9004y2jqle5etq5sw',
		center: [10.752245399999993, 64.60503753],
		zoom: 3
	});

	// legend
	map.on('load', function() {
		var layers = ['< 5000', '5000-10000', '10000-20000', '20000-40000',
			'40000-80000', '> 80000'
		];
		layers.forEach(function(layer) {
			var color = map.getPaintProperty(layer, 'fill-color');
			var item = document.createElement('div');
			var key = document.createElement('span');
			key.className = 'legend-key';
			key.style.backgroundColor = color;
			var value = document.createElement('span');
			value.innerHTML = layer;
			item.appendChild(key);
			item.appendChild(value);
			legend.appendChild(item);
		});
	});
