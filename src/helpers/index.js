export const calTime = (actual, minusHour = 0, minusMin = 0) => {
	const [ hour, min ] = actual.split(':');

	let resultHour = hour - minusHour;
	let resultMin = min - minusMin;

	if (resultMin < 0) {
		resultMin += 60;
		resultHour--;
	}
	if (resultHour < 0) {
		resultHour += 24;
	}

	return `${resultHour}:${resultMin}`;
};

export const displayTime = (time) => {
	const [ hour, min ] = time.split(':');

	const formatHour = hour > 12 ? hour - 12 : hour;
	const period = hour >= 12 ? 'PM' : 'AM';

	const displayHour = formatHour.toString().padStart(2, '0');
	const displayMin = min.toString().padStart(2, '0');

	return `${displayHour}:${displayMin} ${period}`;
};
