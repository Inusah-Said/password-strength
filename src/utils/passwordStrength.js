const checkStrength = (password) => {
	let result = [/[$@$!%*#?&]/, /[A-Z]/, /[0-9]/, /[a-z]/].reduce(
		(acc, regex) => acc + regex.test(password),
		0
	);

	if (result > 2 && password.length > 7) {
		result++;
	}

	let strength = '';
	let progress = 0;

	switch (result) {
		case 0:
		case 1:
		case 2:
			strength = 'Weak';
			progress = 25;

			break;
		case 3:
			strength = 'Good';
			progress = 50;

			break;
		case 4:
			strength = 'Good';
			progress = 75;

			break;
		case 5:
			strength = 'Strong';
			progress = 100;
			break;

		default:
			break;
	}

	return {
		strength,
		progress,
	};
};

export default checkStrength;