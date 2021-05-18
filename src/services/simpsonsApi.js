export const getQuote = async () => {
    const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    const json = await res.json();

    return {
        image: json[0].image,
        text: json[0].quote, 
        name: json[0].character 
    };
};