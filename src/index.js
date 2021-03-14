
exports.min = function min (array) {
	if (array == null || array.length === 0) {
		return 0;
	}
	let minValue = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] < minValue) {
			minValue = array[i];
		}
	}
	return minValue;
}

exports.max = function max (array) {
	if (array == null || array.length === 0) {
		return 0;
	}
	let mixValue = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] > mixValue) {
			mixValue = array[i];
		}
	}
	return mixValue;
}

exports.avg = function avg (array) {
	if (array == null || array.length === 0) {
		return 0;
	}
	let sumValue = 0;
	for (let i = 0; i < array.length; i++) {
		sumValue = sumValue + array[i];
	}
	return sumValue / array.length;
}
