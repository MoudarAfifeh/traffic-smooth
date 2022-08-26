module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: { primary: '#FEF8F5', orange_100: '#EE4D47', orange_200: '#ED4D47', orange_300: '#FCDDD4', orange_400: '#FFF7F5', gray_100: '#E5E5E5', dark_100: "#402B2B" },
            fontFamily: {
                Rubik: ['Rubik'],
                DMSerifDisplay: ['DM Serif Display']
            },
            height: {
                15: '60px',
                22: '90px',
                62: '250px',
                102: '460px'
            },
            width: {
                57: '228px',
                99: '400px',
                100: '440px',
                100: '470px',
                105: '550px',
                110: '560px',

            },
            boxShadow: {
                contactForm: '0px 20px 40px rgba(238, 77, 71, 0.1)',
                contactInput: '0px 20px 40px rgba(238, 77, 71, 0.2)',
                result: '0px 20px 40px rgba(238, 77, 71, 0.1)'
            },
            spacing: {
                percent_40: '40%',
                percent_10: '10%'
            },
            fontSize: {
                100: '100px'
            }
        },
    },
    plugins: [],
}