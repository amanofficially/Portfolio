tailwind.config = {
    theme:{
        extend:{
            gridTemplateColumns:{
                'auto': 'repeat(auto-fit,minmax(200px,1fr))'
            },
            fontFamily:{
                Outfit:["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"]
            },
            animation:{
                spin_slow: 'spin 10s linear infinite'
            },
            colors:{
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001F'
            },
            boxShadow:{
                'black': '4px_4px_0_#000',
                'black': '4px_4px_0_#fff',
            }
        }
        },
        darkMode: 'selector'     
}
