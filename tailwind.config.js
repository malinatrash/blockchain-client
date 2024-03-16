/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}']
export const theme = {
	screens: {
		mobile: { max: '1200px' },
		middle: { max: '1280px' },
		small: { max: '640px' },
		SE: { max: '370px' },
		default: { max: '1440px' },
	},
	fontFamily: {
		montserrat: ['Montserrat', 'sans-serif'],
		poppins: ['Poppins', 'sans-serif'],
	},
	extend: {
		keyframes: {
			blink: {
				'0%': { opacity: '1' },
				'50%': { opacity: '0' },
				'100%': { opacity: '1' },
			},
		},
		animation: {
			cursor: 'blink 3s infinite',
		},
		boxShadow: {
			frame: '1px 0px 20px 1px rgba(71, 159, 118, 0.3)',
		},
		content: {},
		colors: {
			background: '#a2fdd9',
			primary: '#247074',
			danger: '#ff0000',
			placeholder: '#899197',
			green: '00ff00',
			red: 'ff0000',
			black: '#141619',
			light: '#FEFEFE',
			backGroundGray: '#d9d9d9',
			whiteBackground: '#F9F9F9',

			// Input
			inputBorder: '#899197',
			activeInputBorder: '#6EA8FE',
			successInputBorder: '#479F76',
			errorInputBorder: '#E35D6A',

			// CheckBox
			borderGrayColor: '#A7ACB1',
			descriptionColor: '#141619',

			// Button colors
			defaultButtonColor1: '#2fb295',
			defaultButtonColor2: '#82b5e0',
			hoverButtonColor1: '#2FB295',
			hoverButtonColor2: '#8880BC',
			clickButtonColor: '#1F856F',
			disabledButtonColor: '#9AD1C7',

			// Dropdown items colors
			dropDownDefault: '#FFF',
			dropDownHover: '#2fb295',
			dropDownClick: '#2fb295',
		},
	},
}
export const plugins = []
