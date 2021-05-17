const getQuote = async () => {
    const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=num');
    const json = await res.json();

    return {
        image: json[0].character,
        text: json[0].quote, 
        name: json[0].character 
    };
};