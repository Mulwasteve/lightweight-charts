function generateData() {
	const res = [];
	const time = new Date(Date.UTC(2000, 0, 1, 0, 0, 0, 0));

	for (let i = 0; i < 25; ++i) {
		const item = {
			time: time.getTime() / 1000,
			value: Math.sin(i),
		};
		time.setUTCDate(time.getUTCDate() + 1);

		res.push(item);
	}
	return res;
}

function runTestCase(container) {
	const chart = window.chart = LightweightCharts.createChart(container, { layout: { attributionLogo: false } });

	const areaSeries = chart.addSeries(LightweightCharts.AreaSeries, {
		lineType: LightweightCharts.LineType.Curved,
	});

	const data = generateData();
	areaSeries.setData(data);

	chart.timeScale().fitContent();
}
