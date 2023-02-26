const { parse } = require('csv-parse');
const fs = require('fs');

const result = [];

function isHabitable(planet) {
	return (
		planet['koi_disposition'] === 'CONFIRMED' &&
		planet['koi_insol'] > 0.36 &&
		planet['koi_insol'] < 1.11 && planet['koi_prad']<1.6
	);
}
fs.createReadStream('./kepler-data.csv')
	.pipe(
		parse({
			comment: '#',
			columns: true
		})
	)
	.on('data', (chunks) => {
		if (isHabitable(chunks)) {
			result.push(chunks);
		}
	})
	.on('error', (error) => {
		console.log(error);
	})
	.on('end', () => {
		console.log(`We have found ${result.length} habituable planet`);
		console.log('Reading completed!');
	});
