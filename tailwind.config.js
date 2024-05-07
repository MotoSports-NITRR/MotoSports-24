/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
  	],

  	theme: {
    	extend: {
      		fontFamily: {
        		'poppins': ['"Poppins"', 'cursive'],
        		'inter': ['"Inter"', 'regular'],
        		'brushKing': ['"brushKing"', 'regular'],
        		'albula': ['"albula"', 'regular'],
        		'albulaMedium': ['"albulaMedium"', 'medium'],
        		'albulaBold': ['"albulaBold"', 'bold'],
        		'albulaHeavy': ['"albulaHeavy"', 'heavy'],
        		'albula': ['"albula"', 'regular'],
        		'noirPro': ['"noirPro"', 'regular'],
      		},

      		width: {
        		'85vw': '85vw',
				'65vw': '65vw',
				'125': '125px',
				'150': '150px',
				'600': '600px',
				'650': '650px',
				'100%': '100%',
      		},

			maxWidth: {
				'500': '500px',
			},

			height: {
				'150': '150px',
				'400': '400px',
				'1000': '1000px',
				'3000': '3000px',
			},

			borderWidth: {
				'3': '3px',
			},

			margin: {
				'15': '15px',
			},

			colors: {
				customBlue: '#3366FF',
				blackbean: '#2f1000ff',
				sealbrown: '#621b00ff',
				brown: '#945600ff',
				tawny: '#c75000ff',
				dustyWhite: 'rgb(255, 241, 222)',
				barelyBrown: 'rgb(170, 163, 155)',
				modestBrown: 'rgb(255, 251, 245)',
      		},

			  screens: {
				'xsm': '430px',
			  },
    	},
  	},

  	plugins: [],
}