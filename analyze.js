function parseData(createGraph) {
	Papa.parse('./USDJPY,D1.csv', {
		download: true,
		complete: function (results) {
			createGraph(results.data);
		}
	});
}

function createGraph(data) {
	var time = [];
	var price = ['Yen'];

	for (var i = 1; i < data.length; i++) {
		time.push(data[i][0]);
		price.push(data[i][5]);
	}

	console.log(time);
	console.log(price);

	var chart = c3.generate({
		bindto: '#chart',
		data: {
			columns: [
				price
			]
		},
		axis: {
			x: {
				type: 'category',
				categories: time,
				tick: {
					multiline: false,
					culling: {
						max: 15
					}
				}
			}
		},
		zoom: {
			enabled: true
		},
		legend: {
			position: 'right'
		}
	});
}

parseData(createGraph);
