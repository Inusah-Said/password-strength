module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#171725',
				secondary: '#06B2BC',
				accent: '#FF3F24',
				appGreen: '#38C985',
				appBlue: '#477DFB',
				appRed: '#FF3D22',
				appGray: '#9CA7B8',
				appBlack: '#040A1D',
				orange: '#F3641F',
				blue: '#477DFB',
				red: '#FF3D22',
				green: '#38C985',
				gray1: '#040A1D',
				gray2: '#4C536A',
				gray3: '#9CA7B8',
				grayBg: '#E5E5E5',
				thinGrayBG: '#EEF2F5',
				cardHeading: '#3D4356',
			},
			screens: {
				customH: { raw: '(max-height: 880px)' },
			},
		},
	},
	variants: {
		extend: {},
		outline: ['focus'],
	},
};
